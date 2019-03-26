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

//авторизация
function qipLogin(form)
{
	var message = _$('ql_message');

	if(!form.login.value.length || !form.password.value.length)
	{
		message.innerHTML = 'Логин/пароль введены неправильно. Попробуйте еще раз.';
		setClass(message, 'ql_message_showed');
		return false;
	}

	unsetClass(message, 'ql_message_showed');

	disableForm(form, true);

	var post_user = form.login.value;
	var post_host = form.host.options[form.host.selectedIndex].value;

	JsHttpRequest.query(
		window.login_url + '?r=' + Math.random(),
		{
			user : post_user,
			host : post_host,
			pass : form.password.value,
			alien: !form.alien.checked * 1,
			time : new Date().getTimezoneOffset()
		},
		function(result, debugMessages)
		{
			if(debugMessages)
				alert(debugMessages);

			if(result.code == 300){
 				setCookie('lastlogin', post_user+(post_user.indexOf('@') == -1 ? '@'+post_host : '') , new Date(+new Date + 2592000000), 'default.htm', '.qip.ru');
				document.location.href = '../https@/'+result.login_host+'/login?captcha&retpath=' + escape(document.location.href);
				return;
			}

			if(result.code == 200)
			{
				if(form.retpath.checked)
					return document.location = form.retpath.value;

				var jid = form.login.value;
				if(jid.indexOf('@') == -1)
					jid += '@' + form.host.options[form.host.selectedIndex].value;

				var trimmed = (jid.length > 30) ? jid.substr(0, 30) + '...' : jid;
				var header = _$('ql_header_login');
				header.innerHTML = trimmed, header.title = jid;
				setClass(_$('q_login'), 'q_login_authorized');

				qipReloadPersonal();
			}
			else if(result.code == 400 && result.login && result.key)
			{
				message.innerHTML = 'Учетная запись была ранее удалена.';
				message.appendChild(_$$('a', {id: 'ql_message_undelete', href: '/settings/undeleteAcc?user=' + result.login + '&key=' + result.key, innerHTML: 'Восстановить'}))
				setClass(message, 'ql_message_showed');
			}
			else
			{
				message.innerHTML = 'Логин/пароль введены неправильно. Попробуйте еще раз.';
				setClass(message, 'ql_message_showed');
			}
			disableForm(form, false);
			trytofocus(form.login);
		}
	);

	return true;
}

//обновление уведомления о личных письмах/сообщениях
function qipReloadPersonal()
{
	if(!('reload_personal_url' in window))
		return;

	JsHttpRequest.query(
		window.reload_personal_url + '?r=' + Math.random(), null,
		function(result, debugMessages)
		{
			if(!(result instanceof Object) || debugMessages)
				return;

			setTimeout(qipReloadPersonal, 600000);

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
				if(!(name in result) || !(item = _$('q_login_' + name)))
					continue;

				t = titles[name];
				if(result[name] *= 1)
					item.innerHTML = '<i class="q_icon qlm_message"></i><span>' + result[name] + '</span> ' + pluralForm(result[name], t[1], t[2], t[3]);
				else
					item.innerHTML = t[0];
				_show(item.parentNode);
			}
		}
	);
}

//переключение табов новостей
function qipNewsSwitchTheme(tab)
{
	tab = tab.parentNode; //a < li
	if(hasClass(tab, 'qnh_active'))
		return true;

	var news = tab.parentNode.parentNode, //li < ul < div
		tabs = [], themes = [];

	if(('themes' in news) && ('tabs' in news))
		tabs = news.tabs, themes = news.themes;
	else
	{
		news.tabs   = tabs   = childs.apply(tab.parentNode, ['li', null, true]);
		news.themes = themes = childs.apply(news, ['div', 'qn_content', true]);
	}

	news.tabs.active = tab;
	var current = 0;
	for(var i = 0; i < themes.length; i++)
		(tabs[i] == tab)
			? (setClass(tabs[i], 'qnh_active'), _show(themes[i]), current = i)
			: (unsetClass(tabs[i], 'qnh_active'), _hide(themes[i]));

	set_startqip_settings('news_tab', current);

	return false;
}

//переключение страны новостей
function qipNewsSwitchCountry(btn, code)
{
	var countries = {RU: 'UA', UA: 'RU'};
	if(!(code in countries))
		return;
	var news = btn.parentNode.parentNode.parentNode;
	unsetClass(news, 'q_news_' + countries[code]), setClass(news, 'q_news_' + code)
	set_startqip_settings('news_country', code);
}

//сохранение выбранного знака зодиака
function qipHoro(select)
{
	var value = select.options[select.selectedIndex].value;
	select.form.action = select.form.action.replace(/\d+/, value);
	if(select.form.old.value * 1 !== value * 1)
		set_startqip_settings('horo', value);
	select.form.submit();
}

// подгрузка скрипта со списком городов и их кодов
function qipSwitchCity(show, city_code)
{
	var city = _$('q_city'), list = _$('qt_city_list');

	if(list.options.length > 1)
	{
		list.disabled = !show;
		unsetClass(city, 'qt_city_normal'), setClass(city, 'qt_city_selection');
		return trytofocus(list);
	}

	unsetClass(city, 'qt_city_normal'), setClass(city, 'qt_city_loading');

	window.city_data = {city: city, list: list, city_code: city_code};
	document.body.appendChild(_$$('script', {type: 'text/javascript', charset: 'utf-8', src: window.base_url+'js/geo.js?1'}));
}

//обновление блока погоды
function qipReloadInfo(city_code)
{
	window.geo_code = city_code; //запоминаем текущий город в отдельной переменной

	JsHttpRequest.query(
		window.base_url + 'reloadinfo@r=' + Math.random(),
		{code: city_code},
		function(result, debugMessages)
		{
			if(debugMessages)
				return alert(debugMessages);

			document.forms['qip_love_form'].geo.value = result.geo.love;

			(_$('q_city_name')   || {}).innerHTML = result.geo.city;
			(_$('q_city_parent') || {}).innerHTML = result.weather.city;
			(_$('q_weather')     || {}).innerHTML = result.weather.html;

			var maps = _$('q_maps');
			if('probki' in result)
			{
				var v = result.probki * 1;
				unsetClass(maps, 'q_maps_static');
				_$('qm_icon').className = 'qmp_' + (v < 4 ? 'green' : v < 7 ? 'yellow' : 'red');
				_$('q_probki').innerHTML = v.toString().bold() + ' ' + pluralForm(v, 'балл', 'балла', 'баллов');
			}
			else
			{
				setClass(maps, 'q_maps_static');
			}

			window.geo_code = result.code;
			setCookie('sqip_weather_code', window.geo_code, new Date(new Date().getFullYear()+1, 1, 1), 'default.htm', '.qip.ru');

			qipCityHideShow();
		},
		true
	);
	return false;
}

//сокрытие списка выбора города
function qipCityHideShow()
{
	var city = _$('q_city');
	if(!city)
		return;
	unsetClass(city, 'qt_city_selection'), setClass(city, 'qt_city_normal');
	_$('qt_city_list').disabled = true;
}

//заполнение списка городов
function fillOptions(opts)
{
	var data = window.city_data;
	var list = data.list, opts = opts.split(';');
	for(var i = 0, ln = opts.length; i < ln; i++)
	{
		var entry = opts[i].split(',');
		list.options[i] = new Option(entry[1], entry[0]);
		if(data.city_code == entry[0])
			list.options[i].selected = true;
	}
	unsetClass(data.city, 'qt_city_loading'), setClass(data.city, 'qt_city_selection');
	list.disabled = false;
	trytofocus(list);
}

//выбор потомков по параметрам (используется временно)
function childs(tagName, className, childsOnly)
{
	var collection = [];
	var nodeList = childsOnly
		? this.childNodes
		: this.getElementsByTagName(tagName);
	for(var i = 0, ln = nodeList.length; i < ln; i++)
		if((nodeList[i].nodeType !== 3) && ('tagName' in nodeList[i])
			&& (nodeList[i].tagName.toLowerCase() === tagName) && (className ? hasClass(nodeList[i], className) : true))
			collection.push(nodeList[i]);
	return collection;
}

var qipAsideProjects = (function (window){
	var timeout, utils;
	utils = {
		addClass : function(el, class_name) {
			if (this.hasClass(el, class_name))
				return;
			el.className = el.className + " " + class_name;
		},
		removeClass : function(el, class_name) {
			if (!this.hasClass(el, class_name))
				return;
			var names = el.className.split(" "), i;
			for (i in names) {
				if (names.hasOwnProperty(i)) {
					if (names[i] === class_name)
						names.splice(i, 1);
				}
			}
			el.className = names.join(" ");
		},
		hasClass : function(el, class_name) {
			return (" " + el.className + " ").indexOf(" " + class_name + " ") > 1;
		}
	};
	return {
		init: function (el) {
			el.onmouseover = function (e) {
				if (timeout)
					window.clearTimeout(timeout);
				timeout = window.setTimeout(function () {
					utils.addClass(el, "q_aside_projects_hover");
				}, 300);
			}

			el.onmouseout = function (e) {
				if (timeout)
					window.clearTimeout(timeout);
				timeout = window.setTimeout(function () {
					utils.removeClass(el, "q_aside_projects_hover");
				}, 300);
			}
		}
	};
}(this));

window.qipRadio = {
	id: null,
	list: [],
	change: function()
	{
		this.list.shift();
		var playing = _$('q_radio_playing').getElementsByTagName('span');
		playing[0].innerHTML = this.list[0].artists, playing[1].innerHTML = this.list[0].title;

		if(this.list.length > 1)
			this.next();

		if(this.list.length == 2)
		{
			JsHttpRequest.query(
				'blocks/radio' + '?r=' + Math.random(),
				{id: this.id},
				function(result, debugMessages)
				{
					if(result && result.list && result.list.length)
						qipRadio.list = result.list;
				}
			);
		}
	},
	next: function()
	{
		window.setTimeout(function(){qipRadio.change()}, (this.list[1].start_time - this.list[0].start_time) * 1000);
	},
	init: function(id, list)
	{
		this.id = id, this.list = list, this.next();
	}
};
var suggest={highlighter:'internet',dis:false,sel_pr:false,go:false,myvar:'',sug_load:0,tot_select:0,sug_select:-1,got_sug:0,duration:500,sl:false,l:0,s:false,f:false,bl:false,fo:false,jsonp:false,lista:false,http:'',dx:0,dy:0,hc:0,bodyOffset:function(a){var b=a.offsetTop,left=a.offsetLeft;if(this.doesNotIncludeMarginInBodyOffset){b+=parseFloat(a.style.marginTop)||0};left+=parseFloat(a.style.marginLeft)||0;return{top:b,left:left}},offsetParent:function(a){var b=a.offsetParent||document.body;while(b&&(!/^body|html$/i.test(b.tagName)&&b.style.position=='static'))b=b.offsetParent;return b},init:function(b,c,d,e,f){this.s=this.gi(b);this.s.innerHTML='';this.f=this.gi(c);this.fo=this.gi(d);if(this.s==null||this.f==null||this.fo==null){return};var g=document.body,container=document.createElement('div'),innerDiv,checkDiv,table,td;var h=parseFloat(g.style.marginTop)||0,html='<div style="position: absolute;top: 0;left: 0;margin: 0;border: 5px solid #000;padding: 0;width: 1px;height: 1px;"><div></div></div><table style="position: absolute;top: 0;left: 0;margin: 0;border: 5px solid #000;padding: 0;width: 1px;height: 1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';container.innerHTML=html;g.insertBefore(container,g.firstChild);innerDiv=container.firstChild,checkDiv=innerDiv.firstChild,td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);checkDiv.style.position='fixed',checkDiv.style.top='20px';this.supportsFixedPosition=(checkDiv.offsetTop===20||checkDiv.offsetTop===15);checkDiv.style.position='',checkDiv.style.top='';innerDiv.style.overflow='hidden',innerDiv.style.position='relative';this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);this.doesNotIncludeMarginInBodyOffset=(g.offsetTop!==h);g.removeChild(container);var i=document.createElement("div");i.style.width=i.style.paddingLeft="1px";document.body.appendChild(i);this.boxModel=this.boxModel=i.offsetWidth===2;document.body.removeChild(i).style.display='none';body=container=innerDiv=checkDiv=table=td=i=null;if(typeof(f)!='undefined'){this.http=f};if(typeof(e)!='undefined'){e.onmousedown=function(){suggest.fl()}};if(this.s.length==0)return;window.onresize=function(){if(suggest.dis)return;suggest.pos()};window.onContextMenu=window.onblur=function(){suggest.hide();suggest.lista=false};this.pos();this.f.onblur=function(){if(suggest.dis)return;if(suggest.f.value!=suggest.myvar){setTimeout("suggest.s.innerHTML = '';suggest.tot_select = 0;",200)};suggest.bl=true;suggest.fl()};this.f.onfocus=function(){suggest.bl=false;if(suggest.dis)return;if(suggest.tot_select>0){suggest.show()}};this.addH(this.f,'keyup',function(a){if(!a)var a=window.event;if(suggest.dis)return false;if(a.keyCode)code=a.keyCode;else if(a.which)code=a.which;suggest.ev=false;switch(code){case 9:break;case 13:break;case 17:break;case 16:break;case 20:break;case 27:suggest.hide();suggest.sug_select=-1;break;case 38:clearTimeout(suggest.lista);if(suggest.lista!=false){clearTimeout(suggest.lista);suggest.lista=false};suggest.selSuggest(-1);return false;break;case 40:if(suggest.s.style.display=='none'&&suggest.s.childNodes.length==0){suggest.get();suggest.pos()};if(suggest.lista!=false){clearTimeout(suggest.lista);suggest.lista=false};suggest.selSuggest(1);return false;break;default:if(suggest.sl==false){suggest.sl=setTimeout("suggest.get();suggest.pos()",suggest.duration)};break};return false});this.addH(this.f,'keydown',function(a){if(!a)var a=window.event;if(a.keyCode)code=a.keyCode;else if(a.which)code=a.which;suggest.ev=a;switch(code){case 93:clearTimeout(suggest.lista);suggest.lista=false;suggest.hide();break;case 38:if(suggest.dis)return false;if(suggest.lista==false)suggest.lista=setTimeout('suggest.listal(-1);',300);return false;break;case 40:if(suggest.dis)return false;if(suggest.lista==false)suggest.lista=setTimeout('suggest.listal(1);',300);return false;break}})},fl:function(){setTimeout("suggest.hide();suggest.sug_select = -1;",200)},gi:function(a){return document.getElementById(a)},highlighters:{'internet':function(a,b,x){var c='';if(b[1].toString()=='2'){c='<b class="pr">'+b[0]+'</b>'}else if(parseInt(b[1])>2&&suggest_wiz.wiz[b[1]]){c=suggest_wiz(b[1],a,b,x)}else{c='<b>'+b[0]+'</b>'};return c},'maps':function(a,b,x){var c=new RegExp('('+a+')','ig');return b[0].replace(c,'<i>$1</i>')}},cb:function(a){this.l=0;if(this.dis)return;this.tot_select=0;this.s.innerHTML='';if(a.length==0||a[1].length==0){this.hide();return}else{for(var i=0;i<a[1].length;i++){var x=document.createElement('a');x.href='#';if(a[1][i][1]>2){};x.innerHTML=this.highlighters[this.highlighter](a[0],a[1][i],x);x.onclick=function(){suggest.setSuggest(this);suggest.hide();return false};x.onmouseover=function(){suggest.hSuggest(this)};this.s.appendChild(x)}};var x=document.createElement('div');x.innerHTML='<a href="#" class="sclose">Закрыть</a>';this.s.appendChild(x);this.sug_select=-1;this.tot_select=i;this.s.scrollTop=0;if(!suggest.bl)this.show()},disable:function(){this.dis=true;this.s.innerHTML='';return true},enable:function(){this.dis=false;return true},setSuggest:function(a){this.hc=1;if(a.className.match(/sugwiz/)){window.location=a.href.toString();return false};this.sel_pr=(a.childNodes[0].className=='pr');if(typeof(a.childNodes)!='undefined'&&a.childNodes.length==1){this.f.value=a.innerHTML.replace(/(<\/?[\S][^>]*>)/gi,'')}else{for(var i in a.childNodes){if(a.childNodes[i].tagName=='B'){this.f.value=a.childNodes[i].innerHTML.replace(/(<\/?[\S][^>]*>)/gi,'');break}}};this.sug_select=-1;if(typeof(this.goSearch)=='function'){this.goSearch(this.fo,this.f)}},hSuggest:function(a){if(this.dis)return;if(this.sug_select>=0)this.s.childNodes[this.sug_select].className=this.s.childNodes[this.sug_select].className.replace(' selected','');for(var i=0;i<this.s.childNodes.length;i++){if(this.s.childNodes[i]==a){this.sug_select=i}else if(this.s.childNodes[i].className!='sclose'){this.s.childNodes[i].className=this.s.childNodes[i].className.replace(' selected','')}};try{a.className=a.className.replace(' selected','')+' selected'}catch(e){}},b:function(){var a=navigator.userAgent,gecko=/Gecko\//.test(a)?a.match(/; rv: 1\.(\d+?)\.(\d)/):0,webkit=/AppleWebKit/.test(a),safari=webkit&&/Safari\//.test(a),ie=0;/*@cc_on+@_jscript_version*10%10@*/;var a=navigator.userAgent;var b=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if((ie==7||ie==8)&&b.exec(a)!=null){ie=parseFloat(RegExp.$1)};return{ie:ie>=5?ie:0,opera:window.opera&&opera.version?opera.version()[0]:0,safari:safari&&/Version\//.test(a)?a.match(/Version\/(\d{1})/)[1]:0,chrome:safari&&/Chrome\//.test(a)?a.match(/Chrome\/(\d+?\.\d)/)[1]:0}}(),pos:function(){if(!this.f)return;co=this.fpos(this.f);this.s.style.left=co[0]+'px';var a=this.height(this.f);var b=this.f.clientWidth;if(this.b.ie==6){b-=2;a+=1}else if(this.b.ie>0){a+=1};this.s.style.top=(co[1]+a-1)+'px';this.s.style.width=(b)+'px'},get:function(){this.sl=false;w=this.f.value;w=w.replace(/^\s+/,'');w=this.preesc(w);if(w.length<3){this.hide();this.l=0;return};this.myvar=this.f.value;if(this.l>0)return;this.l=1;this.query(w)},query:function(x){this.jsonp=document.createElement('script');this.jsonp.src=this.http+this.esc(w.toLowerCase())+'&from=web&rnd='+Math.random();document.body.appendChild(this.jsonp)},listal:function(a){if(this.lista==false)return;if(a==-1)this.lista=setInterval('suggest.selSuggest(-1);',40);if(a==1)this.lista=setInterval('suggest.selSuggest(1);',40)},selSuggest:function(a){if(this.s.style.display=='none')return false;if(this.tot_select<1)return;n=-1;if(this.sug_select>=0){if(typeof(this.s.childNodes[this.sug_select])!='undefined'){this.s.childNodes[this.sug_select].className=this.s.childNodes[this.sug_select].className.replace(' selected','')};if(this.sug_select==0&&a==-1){this.sug_select=-1;this.f.value=this.myvar;return};if(this.sug_select+a<0){n=this.tot_select-1}else if(this.sug_select+a>this.tot_select-1){n=0}else{n=this.sug_select+a}}else{if(a==-1){var n=this.tot_select-1}else{var n=0}};if(n>=0){tag_a=this.s.childNodes[n];tag_a.className=tag_a.className.replace(' selected','')+' selected';this.sug_select=n;if(tag_a.childNodes.length==1){this.f.value=tag_a.innerHTML.replace(/(<\/?[\S][^>]*>)/gi,'')}else{var b=false;for(var i in tag_a.childNodes){if(tag_a.childNodes[i].tagName=='B'){b=true;this.f.value=tag_a.childNodes[i].innerHTML.replace(/(<\/?[\S][^>]*>)/gi,'')}};if(b===false){this.f.value=tag_a.innerHTML.replace(/(<\/?[\S][^>]*>)/gi,'')}}}},addH:function(o,e,h){if(o.addEventListener){o.addEventListener(e,h,false)}else if(o.attachEvent){o.attachEvent('on'+e,h)}},height:function(a){return Math.max(a.scrollHeight,a.offsetHeight)},hide:function(){this.s.style.display='none';clearTimeout(suggest.lista)},isHidden:function(){return(this.s.style.display!='none')},show:function(){if(this.s.innerHTML!=''){this.s.style.display='block'}},url:function(s){this.http=s},preesc:function(s){return s.split('\\').join('')},esc:function(s){s=encodeURI(s);var h=["!","#","$","=",": ",",",";","?","'","(",")","&"];var a=['%21','%23','%24','%3D','%3A','%2C','%3B','%3F','%27','%28','%29','%26'];for(var i=0;i<h.length;i++){s=s.split(h[i]).join(a[i])};return s},addI:function(a,b){var x=document.createElement('input');x.name=a;x.type='hidden';x.value=b;this.fo.appendChild(x)}};if("getBoundingClientRect"in document.documentElement){suggest.fpos=function(a){if(!a||!a.ownerDocument)return null;if(a===a.ownerDocument.body)return this.bodyOffset(a);var b=a.getBoundingClientRect();var c=a.ownerDocument;var d=c.body;var e=c.documentElement;var f=window.pageYOffset||e.scrollTop||d.scrollTop;var g=window.pageXOffset||e.scrollLeft||d.scrollLeft;var h=e.clientTop||d.clientTop||0;var i=e.clientLeft||d.clientLeft||0;var j=b.top+(self.pageYOffset||this.boxModel&&e.scrollTop||d.scrollTop)-h;var k=b.left+(self.pageXOffset||this.boxModel&&e.scrollLeft||d.scrollLeft)-i;return[Math.round(k),Math.round(j)]}}else{suggest.fpos=function(a){if(!a||!a.ownerDocument)return null;if(a===a.ownerDocument.body)return this.bodyOffset(a);var b=a.offsetParent,prevOffsetParent=a,doc=a.ownerDocument,computedStyle,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView.getComputedStyle(a,null),top=a.offsetTop,left=a.offsetLeft;while((a=a.parentNode)&&a!==body&&a!==docElem){if(this.supportsFixedPosition&&prevComputedStyle.position==="fixed")break;computedStyle=defaultView.getComputedStyle(a,null);top-=a.scrollTop,left-=a.scrollLeft;if(a===b){top+=a.offsetTop,left+=a.offsetLeft;if(this.doesNotAddBorder&&!(this.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(a.tagName)))top+=parseFloat(computedStyle.borderTopWidth)||0,left+=parseFloat(computedStyle.borderLeftWidth)||0;prevOffsetParent=b,b=a.offsetParent};if(this.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible")top+=parseFloat(computedStyle.borderTopWidth)||0,left+=parseFloat(computedStyle.borderLeftWidth)||0;prevComputedStyle=computedStyle};if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static")top+=body.offsetTop,left+=body.offsetLeft;if(this.supportsFixedPosition&&prevComputedStyle.position==="fixed")top+=Math.max(docElem.scrollTop,body.scrollTop),left+=Math.max(docElem.scrollLeft,body.scrollLeft);return[left,top]}};function suggest_wiz(n,a,b,x){x.className='sugwiz',x.href='http://'+b[2]+(b[2].match('\\?')?'&':'?')+'from2=sug2';var c=arguments.callee.wiz[n];return'<img src="'+c.icon+'" /> <b>'+b[0].replace(a,'<b>'+a+'</b>')+'</b><br/><span>Перейти на сайт '+c.host+'</span>'};suggest_wiz.wiz={3:{host:'horo.qip.ru',icon:'../horo.qip.ru/favicon.ico'},4:{host:'pogoda.rbc.ru',icon:'../search.qip.ru/skin/img/pogoda.gif'},5:{host:'horo.qip.ru',icon:'../horo.qip.ru/favicon.ico'},6:{host:'maps.qip.ru',icon:'../maps.qip.ru/favicon.ico'},9:{host:'voip.qip.ru',icon:'../search.qip.ru/skin/img/voip.gif'},11:{host:'love.qip.ru',icon:'../search.qip.ru/skin/img/love.gif'},12:{host:'job.qip.ru',icon:'../search.qip.ru/skin/img/job.gif'},13:{host:'referats.qip.ru',icon:'../search.qip.ru/skin/img/referats.gif'},14:{host:'horo.qip.ru',icon:'../horo.qip.ru/favicon.ico'},15:{host:'flowers.qip.ru',icon:'../search.qip.ru/skin/wizard/flowers.gif'},18:{host:'torrchok.net',icon:'../torrchok.net/favicon.ico'},19:{host:'kards.qip.ru',icon:'../search.qip.ru/skin/img/wallpapers.gif'},20:{host:'qip.ru',icon:'../qip.ru/favicon.ico'},21:{host:'kards.qip.ru',icon:'../search.qip.ru/skin/img/avatars.gif'},22:{host:'smotri.com',icon:'../search.qip.ru/skin/img/tv.gif'},23:{host:'kards.qip.ru',icon:'../search.qip.ru/skin/img/cards.gif'},24:{host:'search.files.qip.ru',icon:'../search.qip.ru/skin/img/files.gif'}};

/**
 * JsHttpRequest: JavaScript "AJAX" data loader
 * @license LGPL
 * @author Dmitry Koterov, http://en.dklab.ru/lib/JsHttpRequest/
 */
function JsHttpRequest(){
var t=this;
t.onreadystatechange=null;
t.readyState=0;
t.responseText=null;
t.responseXML=null;
t.status=200;
t.statusText="OK";
t.responseJS=null;
t.caching=false;
t.loader=null;
t.session_name="PHPSESSID";
t._ldObj=null;
t._reqHeaders=[];
t._openArgs=null;
t._errors={inv_form_el:"Invalid FORM element detected: name=%, tag=%",must_be_single_el:"If used, <form> must be a single HTML element in the list.",js_invalid:"JavaScript code generated by backend is invalid!\n%",url_too_long:"Cannot use so long query with GET request (URL is larger than % bytes)",unk_loader:"Unknown loader: %",no_loaders:"No loaders registered at all, please check JsHttpRequest.LOADERS array",no_loader_matched:"Cannot find a loader which may process the request. Notices are:\n%"};
t.abort=function(){
with(this){
if(_ldObj&&_ldObj.abort){
_ldObj.abort();
}
_cleanup();
if(readyState==0){
return;
}
if(readyState==1&&!_ldObj){
readyState=0;
return;
}
_changeReadyState(4,true);
}
};
t.open=function(_2,_3,_4,_5,_6){
with(this){
if(_3.match(/^((\w+)\.)?(GET|POST)\s+(.*)/i)){
this.loader=RegExp.$2?RegExp.$2:null;
_2=RegExp.$3;
_3=RegExp.$4;
}
try{
if(document.location.search.match(new RegExp("[&?]"+session_name+"=([^&?]*)"))||document.cookie.match(new RegExp("(?:;|^)\\s*"+session_name+"=([^;]*)"))){
_3+=(_3.indexOf("?")>=0?"&":"?")+session_name+"="+this.escape(RegExp.$1);
}
}
catch(e){
}
_openArgs={method:(_2||"").toUpperCase(),url:_3,asyncFlag:_4,username:_5!=null?_5:"",password:_6!=null?_6:""};
_ldObj=null;
_changeReadyState(1,true);
return true;
}
};
t.send=function(_7){
if(!this.readyState){
return;
}
this._changeReadyState(1,true);
this._ldObj=null;
var _8=[];
var _9=[];
if(!this._hash2query(_7,null,_8,_9)){
return;
}
var _a=null;
if(this.caching&&!_9.length){
_a=this._openArgs.username+":"+this._openArgs.password+"@"+this._openArgs.url+"|"+_8+"#"+this._openArgs.method;
var _b=JsHttpRequest.CACHE[_a];
if(_b){
this._dataReady(_b[0],_b[1]);
return false;
}
}
var _c=(this.loader||"").toLowerCase();
if(_c&&!JsHttpRequest.LOADERS[_c]){
return this._error("unk_loader",_c);
}
var _d=[];
var _e=JsHttpRequest.LOADERS;
for(var _f in _e){
var ldr=_e[_f].loader;
if(!ldr){
continue;
}
if(_c&&_f!=_c){
continue;
}
var _11=new ldr(this);
JsHttpRequest.extend(_11,this._openArgs);
JsHttpRequest.extend(_11,{queryText:_8.join("&"),queryElem:_9,id:(new Date().getTime())+""+JsHttpRequest.COUNT++,hash:_a,span:null});
var _12=_11.load();
if(!_12){
this._ldObj=_11;
JsHttpRequest.PENDING[_11.id]=this;
return true;
}
if(!_c){
_d[_d.length]="- "+_f.toUpperCase()+": "+this._l(_12);
}else{
return this._error(_12);
}
}
return _f?this._error("no_loader_matched",_d.join("\n")):this._error("no_loaders");
};
t.getAllResponseHeaders=function(){
with(this){
return _ldObj&&_ldObj.getAllResponseHeaders?_ldObj.getAllResponseHeaders():[];
}
};
t.getResponseHeader=function(_13){
with(this){
return _ldObj&&_ldObj.getResponseHeader?_ldObj.getResponseHeader(_13):null;
}
};
t.setRequestHeader=function(_14,_15){
with(this){
_reqHeaders[_reqHeaders.length]=[_14,_15];
}
};
t._dataReady=function(_16,js){
with(this){
if(caching&&_ldObj){
JsHttpRequest.CACHE[_ldObj.hash]=[_16,js];
}
responseText=responseXML=_16;
responseJS=js;
if(js!==null){
status=200;
statusText="OK";
}else{
status=500;
statusText="Internal Server Error";
}
_changeReadyState(2);
_changeReadyState(3);
_changeReadyState(4);
_cleanup();
}
};
t._l=function(_18){
var i=0,p=0,msg=this._errors[_18[0]];
while((p=msg.indexOf("%",p))>=0){
var a=_18[++i]+"";
msg=msg.substring(0,p)+a+msg.substring(p+1,msg.length);
p+=1+a.length;
}
return msg;
};
t._error=function(msg){
msg=this._l(typeof (msg)=="string"?arguments:msg);
msg="JsHttpRequest: "+msg;
if(!window.Error){
throw msg;
}else{
if((new Error(1,"test")).description=="test"){
throw new Error(1,msg);
}else{
throw new Error(msg);
}
}
};
t._hash2query=function(_1e,_1f,_20,_21){
if(_1f==null){
_1f="";
}
if((""+typeof (_1e)).toLowerCase()=="object"){
var _22=false;
if(_1e&&_1e.parentNode&&_1e.parentNode.appendChild&&_1e.tagName&&_1e.tagName.toUpperCase()=="FORM"){
_1e={form:_1e};
}
for(var k in _1e){
var v=_1e[k];
if(v instanceof Function){
continue;
}
var _25=_1f?_1f+"["+this.escape(k)+"]":this.escape(k);
var _26=v&&v.parentNode&&v.parentNode.appendChild&&v.tagName;
if(_26){
var tn=v.tagName.toUpperCase();
if(tn=="FORM"){
_22=true;
}else{
if(tn=="INPUT"||tn=="TEXTAREA"||tn=="SELECT"){
}else{
return this._error("inv_form_el",(v.name||""),v.tagName);
}
}
_21[_21.length]={name:_25,e:v};
}else{
if(v instanceof Object){
this._hash2query(v,_25,_20,_21);
}else{
if(v===null){
continue;
}
if(v===true){
v=1;
}
if(v===false){
v="";
}
_20[_20.length]=_25+"="+this.escape(""+v);
}
}
if(_22&&_21.length>1){
return this._error("must_be_single_el");
}
}
}else{
_20[_20.length]=_1e;
}
return true;
};
t._cleanup=function(){
var _28=this._ldObj;
if(!_28){
return;
}
JsHttpRequest.PENDING[_28.id]=false;
var _29=_28.span;
if(!_29){
return;
}
_28.span=null;
var _2a=function(){
_29.parentNode.removeChild(_29);
};
JsHttpRequest.setTimeout(_2a,50);
};
t._changeReadyState=function(s,_2c){
with(this){
if(_2c){
status=statusText=responseJS=null;
responseText="";
}
readyState=s;
if(onreadystatechange){
onreadystatechange();
}
}
};
t.escape=function(s){
return escape(s).replace(new RegExp("\\+","g"),"%2B");
};
}
JsHttpRequest.COUNT=0;
JsHttpRequest.MAX_URL_LEN=2000;
JsHttpRequest.CACHE={};
JsHttpRequest.PENDING={};
JsHttpRequest.LOADERS={};
JsHttpRequest._dummy=function(){
};
JsHttpRequest.TIMEOUTS={s:window.setTimeout,c:window.clearTimeout};
JsHttpRequest.setTimeout=function(_2e,dt){
window.JsHttpRequest_tmp=JsHttpRequest.TIMEOUTS.s;
if(typeof (_2e)=="string"){
id=window.JsHttpRequest_tmp(_2e,dt);
}else{
var id=null;
var _31=function(){
_2e();
delete JsHttpRequest.TIMEOUTS[id];
};
id=window.JsHttpRequest_tmp(_31,dt);
JsHttpRequest.TIMEOUTS[id]=_31;
}
window.JsHttpRequest_tmp=null;
return id;
};
JsHttpRequest.clearTimeout=function(id){
window.JsHttpRequest_tmp=JsHttpRequest.TIMEOUTS.c;
delete JsHttpRequest.TIMEOUTS[id];
var r=window.JsHttpRequest_tmp(id);
window.JsHttpRequest_tmp=null;
return r;
};
JsHttpRequest.query=function(url,_35,_36,_37){
var req=new this();
req.caching=!_37;
req.onreadystatechange=function(){
if(req.readyState==4){
_36(req.responseJS,req.responseText);
}
};
req.open(null,url,true);
req.send(_35);
};
JsHttpRequest.dataReady=function(d){
var th=this.PENDING[d.id];
delete this.PENDING[d.id];
if(th){
th._dataReady(d.text,d.js);
}else{
if(th!==false){
throw "dataReady(): unknown pending id: "+d.id;
}
}
};
JsHttpRequest.extend=function(_3b,src){
for(var k in src){
_3b[k]=src[k];
}
};
JsHttpRequest.LOADERS.xml={loader:function(req){
JsHttpRequest.extend(req._errors,{xml_no:"Cannot use XMLHttpRequest or ActiveX loader: not supported",xml_no_diffdom:"Cannot use XMLHttpRequest to load data from different domain %",xml_no_headers:"Cannot use XMLHttpRequest loader or ActiveX loader, POST method: headers setting is not supported, needed to work with encodings correctly",xml_no_form_upl:"Cannot use XMLHttpRequest loader: direct form elements using and uploading are not implemented"});
this.load=function(){
if(this.queryElem.length){
return ["xml_no_form_upl"];
}
if(this.url.match(new RegExp("^([a-z]+://[^\\/]+)(.*)","i"))){
if(RegExp.$1.toLowerCase()!=document.location.protocol+"//"+document.location.hostname.toLowerCase()){
return ["xml_no_diffdom",RegExp.$1];
}
}
var xr=null;
if(window.XMLHttpRequest){
try{
xr=new XMLHttpRequest();
}
catch(e){
}
}else{
if(window.ActiveXObject){
try{
xr=new ActiveXObject("Microsoft.XMLHTTP");
}
catch(e){
}
if(!xr){
try{
xr=new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e){
}
}
}
}
if(!xr){
return ["xml_no"];
}
var _40=window.ActiveXObject||xr.setRequestHeader;
if(!this.method){
this.method=_40&&this.queryText.length?"POST":"GET";
}
if(this.method=="GET"){
if(this.queryText){
this.url+=(this.url.indexOf("?")>=0?"&":"?")+this.queryText;
}
this.queryText="";
if(this.url.length>JsHttpRequest.MAX_URL_LEN){
return ["url_too_long",JsHttpRequest.MAX_URL_LEN];
}
}else{
if(this.method=="POST"&&!_40){
return ["xml_no_headers"];
}
}
this.url+=(this.url.indexOf("?")>=0?"&":"?")+"JsHttpRequest="+(req.caching?"0":this.id)+"-xml";
var id=this.id;
xr.onreadystatechange=function(){
if(xr.readyState!=4){
return;
}
xr.onreadystatechange=JsHttpRequest._dummy;
req.status=null;
try{
req.status=xr.status;
req.responseText=xr.responseText;
}
catch(e){
}
if(!req.status){
return;
}
try{
if(req.responseText.indexOf("<html>")==0)
return;
var _42=req.responseText||"{ js: null, text: null }";
eval("JsHttpRequest._tmp = function(id) { var d = "+_42+"; d.id = id; JsHttpRequest.dataReady(d); }");
}
catch(e){
return req._error("js_invalid",req.responseText);
}
JsHttpRequest._tmp(id);
JsHttpRequest._tmp=null;
};
xr.open(this.method,this.url,true,this.username,this.password);
if(_40){
for(var i=0;i<req._reqHeaders.length;i++){
xr.setRequestHeader(req._reqHeaders[i][0],req._reqHeaders[i][1]);
}
xr.setRequestHeader("Content-Type","application/octet-stream");
}
xr.send(this.queryText);
this.span=null;
this.xr=xr;
return null;
};
this.getAllResponseHeaders=function(){
return this.xr.getAllResponseHeaders();
};
this.getResponseHeader=function(_44){
return this.xr.getResponseHeader(_44);
};
this.abort=function(){
this.xr.abort();
this.xr=null;
};
}};
JsHttpRequest.LOADERS.script={loader:function(req){
JsHttpRequest.extend(req._errors,{script_only_get:"Cannot use SCRIPT loader: it supports only GET method",script_no_form:"Cannot use SCRIPT loader: direct form elements using and uploading are not implemented"});
this.load=function(){
if(this.queryText){
this.url+=(this.url.indexOf("?")>=0?"&":"?")+this.queryText;
}
this.url+=(this.url.indexOf("?")>=0?"&":"?")+"JsHttpRequest="+this.id+"-"+"script";
this.queryText="";
if(!this.method){
this.method="GET";
}
if(this.method!=="GET"){
return ["script_only_get"];
}
if(this.queryElem.length){
return ["script_no_form"];
}
if(this.url.length>JsHttpRequest.MAX_URL_LEN){
return ["url_too_long",JsHttpRequest.MAX_URL_LEN];
}
var th=this,d=document,s=null,b=d.body;
if(!window.opera){
this.span=s=d.createElement("SCRIPT");
var _4a=function(){
s.language="JavaScript";
if(s.setAttribute){
s.setAttribute("src",th.url);
}else{
s.src=th.url;
}
b.insertBefore(s,b.lastChild);
};
}else{
this.span=s=d.createElement("SPAN");
s.style.display="none";
b.insertBefore(s,b.lastChild);
s.innerHTML="Workaround for IE.<s"+"cript></"+"script>";
var _4a=function(){
s=s.getElementsByTagName("SCRIPT")[0];
s.language="JavaScript";
if(s.setAttribute){
s.setAttribute("src",th.url);
}else{
s.src=th.url;
}
};
}
JsHttpRequest.setTimeout(_4a,10);
return null;
};
}};
JsHttpRequest.LOADERS.form={loader:function(req){
JsHttpRequest.extend(req._errors,{form_el_not_belong:"Element \"%\" does not belong to any form!",form_el_belong_diff:"Element \"%\" belongs to a different form. All elements must belong to the same form!",form_el_inv_enctype:"Attribute \"enctype\" of the form must be \"%\" (for IE), \"%\" given."});
this.load=function(){
var th=this;
if(!th.method){
th.method="POST";
}
th.url+=(th.url.indexOf("?")>=0?"&":"?")+"JsHttpRequest="+th.id+"-"+"form";
if(th.method=="GET"){
if(th.queryText){
th.url+=(th.url.indexOf("?")>=0?"&":"?")+th.queryText;
}
if(th.url.length>JsHttpRequest.MAX_URL_LEN){
return ["url_too_long",JsHttpRequest.MAX_URL_LEN];
}
var p=th.url.split("?",2);
th.url=p[0];
th.queryText=p[1]||"";
}
var _4e=null;
var _4f=false;
if(th.queryElem.length){
if(th.queryElem[0].e.tagName.toUpperCase()=="FORM"){
_4e=th.queryElem[0].e;
_4f=true;
th.queryElem=[];
}else{
_4e=th.queryElem[0].e.form;
for(var i=0;i<th.queryElem.length;i++){
var e=th.queryElem[i].e;
if(!e.form){
return ["form_el_not_belong",e.name];
}
if(e.form!=_4e){
return ["form_el_belong_diff",e.name];
}
}
}
if(th.method=="POST"){
var _52="multipart/form-data";
var _53=(_4e.attributes.encType&&_4e.attributes.encType.nodeValue)||(_4e.attributes.enctype&&_4e.attributes.enctype.value)||_4e.enctype;
if(_53!=_52){
return ["form_el_inv_enctype",_52,_53];
}
}
}
var d=_4e&&(_4e.ownerDocument||_4e.document)||document;
var _55="jshr_i_"+th.id;
var s=th.span=d.createElement("DIV");
s.style.position="absolute";
s.style.display="none";
s.style.visibility="hidden";
s.innerHTML=(_4e?"":"<form"+(th.method=="POST"?" enctype=\"multipart/form-data\" method=\"post\"":"")+"></form>")+"<iframe name=\""+_55+"\" id=\""+_55+"\" style=\"width:0px; height:0px; overflow:hidden; border:none\"></iframe>";
if(!_4e){
_4e=th.span.firstChild;
}
d.body.insertBefore(s,d.body.lastChild);
var _57=function(e,_59){
var sv=[];
var _5b=e;
if(e.mergeAttributes){
var _5b=d.createElement("form");
_5b.mergeAttributes(e,false);
}
for(var i=0;i<_59.length;i++){
var k=_59[i][0],v=_59[i][1];
sv[sv.length]=[k,_5b.getAttribute(k)];
_5b.setAttribute(k,v);
}
if(e.mergeAttributes){
e.mergeAttributes(_5b,false);
}
return sv;
};
var _5f=function(){
top.JsHttpRequestGlobal=JsHttpRequest;
var _60=[];
if(!_4f){
for(var i=0,n=_4e.elements.length;i<n;i++){
_60[i]=_4e.elements[i].name;
_4e.elements[i].name="";
}
}
var qt=th.queryText.split("&");
for(var i=qt.length-1;i>=0;i--){
var _64=qt[i].split("=",2);
var e=d.createElement("INPUT");
e.type="hidden";
e.name=unescape(_64[0]);
e.value=_64[1]!=null?unescape(_64[1]):"";
_4e.appendChild(e);
}
for(var i=0;i<th.queryElem.length;i++){
th.queryElem[i].e.name=th.queryElem[i].name;
}
var sv=_57(_4e,[["action",th.url],["method",th.method],["onsubmit",null],["target",_55]]);
_4e.submit();
_57(_4e,sv);
for(var i=0;i<qt.length;i++){
_4e.lastChild.parentNode.removeChild(_4e.lastChild);
}
if(!_4f){
for(var i=0,n=_4e.elements.length;i<n;i++){
_4e.elements[i].name=_60[i];
}
}
};
JsHttpRequest.setTimeout(_5f,100);
return null;
};
}};


