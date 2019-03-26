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

				if(window.qipHead)
					qipHead.checkAuth();
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