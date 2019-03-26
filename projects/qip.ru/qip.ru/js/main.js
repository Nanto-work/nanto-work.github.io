/* login */
function test(form, callback)
{
	if(form.login.value == '' || form.password.value == '' || (form.login.value == 'Логин' && form.password.value == 'Пароль'))
	{
		_show(_$('qip_login_error'));
		trytofocus(form.login);
		return false;
	}

	disableForm(form, true);

	var post_user = form.login.value;
	var post_host = (form.host.tagName.toLowerCase() === 'select') ? form.host.options[form.host.selectedIndex].value : form.host.value;
	
	JsHttpRequest.query(
		window.login_url + '?r=' + Math.random(),
		{
			user : post_user,
			host : post_host,
			pass : form.password.value,
			alien: form.alien.checked,
			time : new Date().getTimezoneOffset()
		},
		function(result, debugMessages)
		{
			if(debugMessages)
				alert(debugMessages);

			if(result.code == 300){
 				setCookie('lastlogin', post_user+(post_user.indexOf('@') == -1 ? '@'+post_host : '') , new Date(+new Date + 2592000000), 'default.htm', '.qip.ru');
				if(document.location.href.indexOf(result.login_host+'/login') == -1){
					document.location.href = '../https@/'+result.login_host+'/login?captcha' + '&retpath=' + escape(document.location.href);
				} else {
					document.location.href = document.location.href + (document.location.href.indexOf('captcha') == -1 ?  (document.location.href.indexOf('?') == -1 ? '?': '&') + 'captcha' : '');
				}
				return;
			}

			if(result.code == 200)
			{
				var redirUrl = _$('qip_login_redirect').value;
				if(redirUrl.length)
				{
					if(redirUrl == 'self')
						window.location.reload();
					else
						window.location = redirUrl;
					return;
				}

				hideLoginFrom(1);
				_hide(_$('qip_login_error'));

				var jid = form.login.value.toLowerCase().split('@');
				var username = jid[0], domain = jid[1] || (
					(form.host.tagName.toLowerCase() === 'select')
						? form.host.options[form.host.selectedIndex].value
						: form.host.value
				);
				jid = username + '@' + domain;

				var username_top  = jid.length <= 25 ? jid : (jid.substr(0, 22) + '...');
				var username_info = username.length <= 12 ? username : (username.substr(0, 11) + '...');

				_$('qhu_username').innerHTML = username_top;

				setClass(_$('qip_head'), 'qip_head_auth');
				if(_$('q_login_mail'))
					setClass(_$('q_login_mail'), 'q_login_mail_auth');

				if(('fn' in result) && _$('qlm_greeting'))
					_$('qlm_greeting').innerHTML = getDayTime() + (result.fn.length ? (', ' + result.fn) : '');

				updateOwnCabinet();

				return;
			}

			var er_msg = _$('qip_login_error');
			if(result.code == 400 && result.login && result.key)
				er_msg.innerHTML = 'Учетная запись была ранее удалена. ' + 'Восстановить'.link('/settings/undeleteAcc?user=' + result.login + '&key=' + result.key);
			else
				er_msg.innerHTML = 'Логин/пароль введены неправильно. Попробуйте еще раз.';

			_show(er_msg);

			disableForm(form, false);
			form.login.blur();
			trytofocus(form.login);

			if(callback)
				callback(null, result.code);
		}
	);
	return false;
}

/* Генерирование подписей к числительным */
function pluralForm(n, form1, form2, form5)
{
	n = Math.abs(n)%100;
	n1 = n%10;
	if(n > 10 && n < 20) return form5;
	if(n1 > 1 && n1 < 5) return form2;
	if(n1 == 1) return form1;
	return form5;
}

/* Обновление информации личного кабинета */
function updateOwnCabinet()
{
	if(!('reload_personal_url' in window))
		return;

	JsHttpRequest.query(
		window.reload_personal_url, null,
		function(result, debugMessages)
		{
			if(!(result instanceof Object) || debugMessages)
				return;

			setTimeout(updateOwnCabinet, 600000); //10 минут

			if(('fn' in result) && _$('qlm_greeting'))
				_$('qlm_greeting').innerHTML = getDayTime() + (result.fn.length ? (', ' + result.fn) : '');

			var item = false, t, titles = {
				mail: ['новых писем нет', 'новое письмо', 'новых письма', 'новых писем'],
				love: ['новых сообщений нет', 'новое сообщение', 'новых сообщения', 'новых сообщений']
			};

			if(('mail' in result) && (item = _$('qhu_mail_top')))
			{
				t = titles['mail'];
				item.innerHTML = result['mail'] + ' ' + pluralForm(result['mail'], t[1], t[2], t[3]);
				_show(item.parentNode);
			}

			for(var name in titles)
			{
				if(!(name in result) || !(item = _$('qlmm_' + name)))
					continue;

				t = titles[name];
				if(result[name] *= 1)
				{
					setClass(item, 'q_bold');
					item.innerHTML = result[name] + ' ' + pluralForm(result[name], t[1], t[2], t[3]);
				}
				else
					item.innerHTML = t[0];
			}
		},
		true
	)
}

/* Возвращает название времени суток */
function getDayTime()
{
	var t = new Date().getHours();
	var d = new Date().getDay();
	var str_t='';
	if (t < 5) str_t = 'Доброй ночи';
	else if (t < 10) str_t = 'Доброе утро';
	else if (t < 12 && (d == 0 || d == 6)) str_t = 'Доброе утро';
	else if (t < 18) str_t = 'Добрый день';
	else str_t = 'Добрый вечер';
	return str_t;
}

function showLoginForm()
{
	var form = _$('qip_login_form');
	if(!_hidden(form))
		_hide(form);
	else
	{
		_show(form);
		form.login.select();
		trytofocus(form.login);
	}
	return false;
}

//переход на поиск при наличии введенного запроса
function qipGoSearch(link)
{
	var query = document.forms['qip_search_form'].query.value;
	if(query.length)
		link.href = link.className + query;
}

function qipInitSuggest()
{
	if(typeof(suggest) == 'undefined')
		return;
	suggest.init('qip_suggest', 'qip_search_form_input', 'qip_search_form', 'qip_search_form_submit', '../search.qip.ru/suggest@q=');
	suggest.goSearch = function(form) {
		suggest.hide();
		if((suggest.s.style.display == 'none' || suggest.sug_select == -1) && form.query.value.length)
			form.submit();
	}
}

function sample(span,url)
{
	if(url)
		JsHttpRequest.query(url,{},function(){},true);
	var field = (_$('search_form_text_internet') || _$('search_form_text') || _$('qip_search_form_input') || {});
	field.value = span.innerHTML;
	trytofocus(field);
}

function focusField(field, def_val)
{
	if(field.value != def_val)
		return;
	field.className = field.className.split(' ')[0];
	field.value = '';
}

function blurField(field, def_val)
{
	if(field.value != '')
		return;
	field.className = field.className + ' qh_field_inact';
	field.value = def_val;
}

function _$(id){return document.getElementById(id);}

/* создание элемента с атрибутами, стилями и потомками */
function _$$(tagName, attributes, style, childs)
{
	var element = document.createElement(tagName);
	if(attributes)
		for(var property in attributes)
			element[property] = attributes[property];
	if(childs)
		for(var i = 0, ln = childs.length; i < ln; i++)
			element.appendChild(childs[i]);
	return element;
}

function getStyle(element, property, format)
{
	var D = document,
		value = null;
	if(element.style[property])
		value = element.style[css2camel(property)];
	else if(D.defaultView && D.defaultView.getComputedStyle)
		value = D.defaultView.getComputedStyle(element, null).getPropertyValue(property);
	else if(element.currentStyle)
		value = element.currentStyle[css2camel(property)];

	if(format == 1)
		value = isNaN(value = parseInt(value)) ? 0 : value;
	else if(format == 2)
		value = isNaN(value = parseFloat(value)) ? 0 : value;

	return value;
}

function css2camel(property)
{
	if(property == 'float')
		return 'styleFloat';
	var pattern = /\-([a-z])/g;
	if(pattern.test(property))
		property = property.replace(pattern, function(){return arguments[1].toUpperCase();});
	return property;
}

function trytofocus(el){try{el.focus()}catch(e){};}

function setClass(elem, className){if(!hasClass(elem, className)){elem.className += ' ' + className;}}
function unsetClass(elem, className){elem.className = (' ' + elem.className + ' ').replace(' ' + className + ' ', ' ').slice(1, -1);}
function replaceClass(elem, oldClassName, newClassName){elem.className = (' ' + elem.className + ' ').replace(' ' + oldClassName + ' ', ' ' + newClassName + ' ').slice(1, -1);}
function hasClass(elem, className){return (elem.className == className) || ((' ' + elem.className + ' ').indexOf(' ' + className + ' ') != -1);}
function _show(elem){unsetClass(elem, 'q_hidden');}
function _hide(elem){setClass(elem, 'q_hidden');}
function _hidden(elem){return hasClass(elem, 'q_hidden');}


function closeMenu()
{
	setTimeout(hideLoginFrom, 200);
}
function hideLoginFrom(p)
{
	var form = _$('qip_login_form');
	if(form && (!form.login.disabled || p))
		_hide(form);
}

function show_more(hide)
{
	(!hide && hasClass(this, 'qm_inactive')) ? unsetClass(this, 'qm_inactive') : setClass(this, 'qm_inactive');
}

//сохранение настроек страницы для qip.ru
function set_startqip_settings(fieldname, value, cookie_name, project)
{
	cookie_name = cookie_name || 'startqip_settings'; //имя куки

	var settings = getCookie(cookie_name);
	if(!settings) //кука не существует
		settings = '';

	settings = _unpack(settings); //распаковка
	if(!(settings instanceof Object))
		settings = {};

	settings[fieldname] = value; //сохранение значения
	settings = _pack(settings); //упаковка

	project = project || '';

	setCookie(
		cookie_name,
		settings,
		new Date(new Date().getFullYear()+1, 1, 1),
		'default.htm',
		(new RegExp(project+"(qip(2|3)?\.)?qip\.ru").test(document.domain) ? document.domain : (project+'.qip.ru'))
	);
}

function get_startqip_settings(field_name, cookie_name)
{
	cookie_name = cookie_name || 'startqip_settings'; //имя куки

	var settings = getCookie(cookie_name);
	if(!settings) //кука не существует
		return null;

	settings = _unpack(settings); //распаковка
	if(!(settings instanceof Object)) //в куке была лажа
		return null;

	return (field_name in settings) ? settings[field_name] : null;
}

//упаковка и распаковка данных в куке
function _pack(obj)
{
	var data = [];
	for(var field in obj)
		data.push(field+'='+obj[field]);
	return data.join('|');
}
function _unpack(packed)
{
	var data = packed.split('|'), obj = {};
	for(var i=0; i<data.length; i++)
	{
		data[i] = data[i].split('=');
		if(data[i].length === 2)
			obj[data[i][0]] = data[i][1];
	}
	return obj;
}

function disableForm(form, disable)
{
	var elems = form.elements;
	for(var i=0; i<elems.length; i++)
		elems[i].disabled = disable;
}

function checkAll(src_elem, target_elem_name)
{
	var elems = src_elem.form.elements;
	for(var i=0; i<elems.length; i++)
		if(elems[i].type.toLowerCase() == 'checkbox' && (elems[i].name == target_elem_name || elems[i].name == src_elem.name))
			elems[i].checked = src_elem.checked;
}

function setCookie(name, value, expires, path, domain, secure)
{
	var curCookie = name + "=" + escape(value) +
	((expires) ? "; expires=" + expires.toGMTString() : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");
	document.cookie = curCookie;
}

function getCookie(name)
{
	var prefix = name + "=";
	var cookieStartIndex = document.cookie.indexOf(prefix);
	if (cookieStartIndex == -1)
		return null;
	var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
	if (cookieEndIndex == -1)
		cookieEndIndex = document.cookie.length;
	return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}

function deleteCookie(name, path, domain)
{
	if (getCookie(name))
	{
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

/* для элемента elem возвращает родителя (любой вложенности) с тегом parent_tag_name, если найден, иначе - false */
function getParentByTagName(elem, parent_tag_name)
{
	var cur_tag_name = elem.tagName.toLowerCase(), parent_tag_name = parent_tag_name.toLowerCase();
	while(cur_tag_name !== parent_tag_name && cur_tag_name !== 'html')
		elem = elem.parentNode, cur_tag_name = elem.tagName.toLowerCase();
	return (cur_tag_name === 'html') ? false : elem;
}

/* проверяет версию браузера и показывает всплывашку с предложением обновиться, если он устарел */
function qipBrowserReject()
{
	var ua = navigator.userAgent;
	if(    (!ua.match(/(opera\b)(?:.+version\/|[/ ])(\d+\.\d+)/i) && !ua.match(/ms(ie) (\d+\.\d+)/i) && !ua.match(/(firefox)\/(\d+\.\d+)/i))
		|| (RegExp.$2*1 >= {ie: 8, firefox: 3, opera: 11}[RegExp.$1.toLowerCase()])
		|| (getCookie('qip_browser_reject') != null)
	) return;

	setCookie('qip_browser_reject', 1, new Date(+new Date + 86400000), 'default.htm', '.qip.ru');

	document.domain = '127.0.0.1';

	setClass(document.body.parentNode, 'q_reject_root');

	document.getElementsByTagName('head')[0].appendChild(
		_$$('link', {id: 'q_reject_stylesheet_link', rel: 'stylesheet', href: 'reject/reject.css'})
	);
	document.body.insertBefore(_$$('div', {
		id: 'q_reject_darkbox', className: 'q_reject_darkbox', title: ua,
		innerHTML: '<div class="qr_container"><iframe class="qrc_iframe" src="reject/reject.html" frameborder="0" scrolling="no"></iframe></div>'
	}), document.body.firstChild);
}

function qipBrowserRejectClose()
{
	var link = _$('q_reject_stylesheet_link'), reject = _$('q_reject_darkbox');
	link && link.parentNode.removeChild(link), reject && reject.parentNode.removeChild(reject);
	unsetClass(document.body.parentNode, 'q_reject_root');
}
