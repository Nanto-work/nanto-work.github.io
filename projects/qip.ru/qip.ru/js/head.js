(function(){

	var qipHead = {

		//флаг наличия поддержки XHR2
		CORS: (window.XMLHttpRequest && 'withCredentials' in Object(new XMLHttpRequest)),

		//данные
		data: {
			form: null,
			form_elements: [],
			sent: {},
			city: {},
			notificationsLoaded: 0,
			'': ''
		},

		//инициализация
		init: function()
		{
			this.startNotifying();
		},

		//хуки
		callbacks: {
			signin: null
		},

		//загрузчик: использует XHR2 в случае его поддержки, иначе - JsHR с подгрузкой библиотеки при необходимости
		query: function(method, url, data, callback)
		{
			if(this.CORS)
			{
				var xhr = new XMLHttpRequest;

				xhr.onload = function(){
					callback(JSON.parse(this.response || this.responseText));
				};

				xhr.open(method, url, true);

				if(window.api_host != document.location.host || document.location.protocol != 'https:')
					xhr.withCredentials = true;

				if(method == 'POST')
					xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

				xhr.send(data || null);

				return true;
			}
			else
			{
				var loader = function()
				{
					JsHttpRequest.query(
						url + (url.indexOf('?') != -1 ? '&' : '?') + 'r=' + Math.random(),
						data,
						function(result, debugMessages)
						{
							if(debugMessages)
								return alert(debugMessages);

							callback(result);
						},
						true
					);
				};

				if(window.JsHttpRequest)
					return loader();

				var js = document.createElement('script');
				js.type = 'text/javascript', js.src = '../https@/' + window.api_host + '/js/JsHttpRequest.js', js.onload = loader;
				document.getElementsByTagName('head')[0].appendChild(js);
			}
		},

		//запуск оповещений (при необходимости)
		startNotifying: function()
		{
			var notifications = document.querySelector('.qhu_notifications');
			if(!notifications)
				return;

			this.updateNotifications();
			window.setInterval(function(){
				qipHead.updateNotifications();
			}, 60000);
		},

		//обновление оповещений
		updateNotifications: function(data)
		{
			var url = '../https@/' + window.api_host + '/blocks/getNotifications';

			if(data)
			{
				if(new Date - this.data.notificationsLoaded < 10000)
					return;

				setClass(document.querySelector('.qhu_notifications .qhe_popup'), 'qhe_loading');
				url += 'data';
			}

			this.query('GET', url, null, function(data){
				if(!data || !('total' in data))
					return;

				var total = document.querySelector('.qhun_total');
				total.innerHTML = (data.total < 100) ? data.total : '99+';
				(data.total > 0) ? setClass(total, 'qhun_total_new') : unsetClass(total, 'qhun_total_new');

				if(data.mail)
				{
					document.querySelector('.qhu_notifications .qhun_mail').innerHTML = data.mail;
					qipHead.data.notificationsLoaded = new Date;
				}

				unsetClass(document.querySelector('.qhu_notifications .qhe_popup'), 'qhe_loading');
			});
		},

		checkAuth: function(data)
		{
			setClass(document.querySelector('.qip_head .qh_user'), 'qhe_loading');
			this.auth({retpath: document.location.href});
		},

		auth: function(data)
		{
			this.query('POST', '../https@/' + window.api_host + '/api/securetest', this.serializeFormData(data), function(result){
				if(result.code == 200)
				{
					return qipHead.signedin(result);
				}
				else if(result.code == 300)
				{
					document.location.href = result.login_url;
				}

				if(result.message)
				{
					var message = document.querySelector('.qh_user .qhu_signin .qhus_message');
					message.innerHTML = result.message.text;
					message.className = 'qhus_message qhus_' + result.message.type;
				}

				qipHead.enableForm();
				unsetClass(document.querySelector('.qip_head .qh_user'), 'qhe_loading');
			});
		},

		//запуск авторизации
		signin: function(form)
		{
			if(!form.login.value.length || !form.password.value.length || !this.CORS)
				return false;

			try
			{
				var retpath = form.retpath;
				if(retpath[1] && retpath[1].checked)
					retpath[1].disabled = true;

				this.data.sent = this.getFormData(form);
				this.disableForm(form);
				this.data.form = form;

				this.auth(this.data.sent);

				return false;
			}
			catch(error)
			{
				this.enableForm();
				return true;
			}
		},

		//обработчик успешной авторизации
		signedin: function(data)
		{
			if(this.data.form)
			{
				var retpath = this.data.form.retpath;
				if((retpath[0] && document.location.href.indexOf(retpath[0].value) == -1) || (retpath[1] && retpath[1].checked && !data.nomail))
					return document.location.href = this.data.sent.retpath;
			}

			document.querySelector('.qip_head .qh_user').innerHTML = data.userblock;
			var mail_link = document.querySelector('.qip_head .qh_services a[href*="mail.qip.ru"]');
			if(mail_link)
				mail_link.parentNode.parentNode.removeChild(mail_link.parentNode);

			if(this.callbacks.signin)
				this.callbacks.signin(data);

			this.startNotifying();
		},

		//показ попапа
		popup: function(item)
		{
			if(hasClass(item, 'qhe_expanded'))
			{
				unsetClass(item, 'qhe_expanded')
				return false;
			}
			else
			{
				for(var i = 0, head = item.parentNode.parentNode, items = head.querySelectorAll('.qh_list .qh_extra'), ln = items.length; i < ln; i++)
					if(items[i] != item)
						unsetClass(items[i], 'qhe_expanded');
				setClass(item, 'qhe_expanded');
				return true;
			}
		},

		//получение данных формы
		getFormData: function(form)
		{
			var data = {};

			for(var i = 0, elems = form.elements, ln = elems.length; i < ln; i++)
			{
				if(elems[i].disabled)
					continue;

				switch(elems[i].tagName.toLowerCase())
				{
				case 'input':
					switch(elems[i].type)
					{
					case 'text':
					case 'button':
					case 'hidden':
					case 'password': data[elems[i].name] = elems[i].value; break;
					case 'checkbox': if(elems[i].checked) {data[elems[i].name] = elems[i].value;} break;
					default: break;
					}
					break;

				case 'select': data[elems[i].name] = elems[i].options[elems[i].selectedIndex].value; break;
				case 'button': data[elems[i].name] = elems[i].textContent; break;
				default: break;
				}
			}
			return data;
		},

		serializeFormData: function(data)
		{
			var serialized = [];
			for(var field in data)
				serialized.push(field + '=' + encodeURIComponent(data[field]));
			return serialized.join('&');
		},

		//деактивация формы
		disableForm: function(form)
		{
			this.data.form_elements = [];

			for(var i = 0, elems = form.elements, ln = elems.length; i < ln; i++)
			{
				if(elems[i].disabled)
					continue;

				this.data.form_elements[this.data.form_elements.length] = elems[i];
				elems[i].disabled = true;
			}

			setClass(form.submit, 'qhuss_loading');
		},


		//активация формы
		enableForm: function()
		{
			if(!this.data.form)
				return;

			for(var i = 0, ln = this.data.form_elements.length; i < ln; i++)
				this.data.form_elements[i].disabled = false;

			this.data.form.retpath[1].disabled = false;
			unsetClass(this.data.form.submit, 'qhuss_loading');
		},


		//загрузка списка городов
		cityListLoad: function(geo_code, handler)
		{
			var select = this.data.city_select || handler.parentNode.getElementsByTagName('select')[0];

			if(select.options.length)
				return false;

			setClass(select.parentNode.parentNode, 'qhe_loading');

			document.body.appendChild(_$$('script', {
				id: 'qhmc_city_list_loader', type: 'text/javascript', src: '..//' + window.api_host + '/js/geo2.js'
			}));

			this.data.city = {geo_code: geo_code, select: select, handler: handler};
		},

		//обработка успешной загрузки списка городов
		cityListLoaded: function(list)
		{
			var i = 0;
			for(var geo_code in list)
			{
				this.data.city.select.options[i] = new Option(list[geo_code], geo_code);
				if(geo_code == this.data.city.geo_code)
					this.data.city.select.options[i].selected = true;
				i++;
			}

			this.data.city.select.disabled = false;

			unsetClass(this.data.city.select.parentNode.parentNode, 'qhe_loading');
		},

		//переключение города
		switchCity: function(select)
		{
			var option = select.options[select.selectedIndex];
			qipReloadInfo && qipReloadInfo(option.value);
			this.data.city.handler.firstChild.innerText = option.text;
			select.blur();
		},

		//обработка кликов на странице
		clickHandler: function(event)
		{
			var expanded = document.querySelector('.qip_head .qhe_expanded'),
				element = event.target || event.srcElement;

			if(!expanded)
				return;

			while(element != expanded && element.parentNode)
				element = element.parentNode;

			if(element != expanded)
				unsetClass(expanded, 'qhe_expanded');
		}

	};

	window.qipHead = qipHead;

	if(window.addEventListener)
	{
		window.addEventListener('click', window.qipHead.clickHandler, false);

		window.addEventListener('DOMContentLoaded', function(){
			window.qipHead.init();
		}, false);
	}

})();
