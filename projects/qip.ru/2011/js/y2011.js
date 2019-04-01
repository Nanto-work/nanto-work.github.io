/**
 * Hover меню
 */

var menuItem;

$(function(){
	$('dl.qip2011-nav-list dt').hover(function(){
		var el = $(this);
		menuItem = el;
		el.delay(300, "a").queue("a", function(){
			if (el == menuItem) {
			el
			.siblings().removeClass('selected').end()
			.next('dd').andSelf().addClass('selected');
			}
		}).dequeue("a");
		el.mouseleave(function() {
			menuItem = '';
		});
	});
});

$(function(){
		$('dl.lumix-tz-10-tabs dt').click(function(){
			$(this)
				.siblings().removeClass('selected').end()
				.next('dd').andSelf().addClass('selected');
		});
});

/**
 * countDown
 */
var countDown = (function(){
	/** @type {Date} Дата конца отсчёта */
	var end_dt,
	/** @type {Date} Дата начала отсчёта */
		start_dt,	
		second = 1000,
		minute = 60 * second,
		hour = 60 * minute,
		day = 24 * hour,
		container,
		sections;
	
	function padNumber(num) {
		return (num < 10) ? "0" + num : String(num);
	}
	
	function getMove(section) {
		return $(section).find('span');
	}
	
	function updateSection(section, value) {
		var move = getMove(section);
		if (parseInt(move.text(), 10) !== value) {
			var h = move.height();
			var new_move = move.clone().css({top:-h}).text(padNumber(value)).insertBefore(move);
			
			move.animate({top: h}, 'slow', function(){
				move.remove();
			});
			
			new_move.animate({top: 0}, 'slow');
		}
	}
	
	function count() {
		start_dt.setTime(start_dt.getTime() + second);
		var time_delta = end_dt - start_dt;
		if(time_delta <= 0) {
			container.replaceWith('<div class="qip2011-congratulation"></div>');
			return;
		}
		var	days_left = Math.floor(time_delta/day),
			hours_left = Math.floor((time_delta -= days_left * day)/hour),
			minutes_left = Math.floor((time_delta -= hours_left * hour)/minute),
			seconds_left = Math.floor((time_delta -= minutes_left * minute)/second);
			
		if((days_left + hours_left + minutes_left + seconds_left) >= 0) {
			updateSection(sections[0], days_left);
			updateSection(sections[1], hours_left);
			updateSection(sections[2], minutes_left);
			updateSection(sections[3], seconds_left);
			
			setTimeout(count, 1000);
		}
	}
	
	return {
		init: function(end_date, start_date) {
			if (!start_date) {
				start_dt = new Date();
			} else if (typeof start_date == 'number') {
				start_dt = new Date(start_date);
			} else {
				start_dt = start_date;
			}

			if(typeof end_date == 'number') {
				end_dt = new Date(end_date); 
			} else {
				end_dt = end_date;
			}

			container = $('.qip2011-count-down');

			if(end_dt - start_dt <= 0 ){
				container.replaceWith('<div class="qip2011-congratulation"></div>');
				return;
			}
			
			sections = container.find('span.section');
			
			container.removeClass('q_hidden');
			
			count();
		}
	};
})();

function giftsHandler(){
	$('div.gift').hover(function(){
		var wish_id = $(this).attr('id'), jid = $('#user_requested').html();
		if(!jid || !wish_id) return;
		var wish = $(this);
		if(!(wish.attr('title'))){
			$.get('y2011/getWish/0/'+jid+'/'+wish_id, function(data) {
				wish.attr('title', data);
			});
		}
	});
	$('div.gift').click(function(){
		var wish_id = $(this).attr('id'), jid = $('#user_requested').html();
		if(!jid || !wish_id) return;
		var wish = $(this);
		$.get('y2011/getWish/1/'+jid+'/'+wish_id, function(data) {
			if(data) gallery.show('<div>' + data + '</div>');
		});
	});
}

var gallery = (function(){
	var ieVer = (function getInternetExplorerVersion()
		{
			var rv = -1;
			if (navigator.appName == 'Microsoft Internet Explorer')
			{
				var ua = navigator.userAgent;
				var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
				if (re.exec(ua) != null)
					rv = parseFloat( RegExp.$1 );
		  }
		  return rv;
		})(),
	darkBoxEl = document.createElement('div'),
	darkBoxPopup = document.createElement('div'),
	darkBoxPopupInner = document.createElement('div'),
	darkBoxPopupClose = document.createElement('div'),
	init,
	selects = document.getElementsByTagName('select');

	darkBoxPopup.className = 'darkBoxPopup';
	darkBoxPopupInner.className = 'darkBoxPopupInner';
	darkBoxPopupClose.className = 'darkBoxPopupClose';

	darkBoxEl.style.background = 'white';
	darkBoxEl.style.position = 'absolute';
	darkBoxEl.style.zIndex = '1002';
	darkBoxEl.style.top = '0px';
	darkBoxEl.style.left = '0px';
	darkBoxEl.style.width = '100%';
	darkBoxEl.style.minHeight = '100%';
	darkBoxEl.style.opacity = '0.5';
	darkBoxEl.style.filter =  'progid:DXImageTransform.Microsoft.Alpha(opacity=50)';
	darkBoxEl.style.display = 'none';

	darkBoxPopup.style.display = 'none';

	darkBoxPopup.appendChild(darkBoxPopupClose);
	darkBoxPopup.appendChild(darkBoxPopupInner);

	darkBoxPopupClose.onclick = function() {
		darkBoxEl.style.display = 'none';
		darkBoxPopup.style.display = 'none';
		for (var i = 0; i < selects.length; i++) {
			selects[i].style.visibility = 'visible';
		}
	};

	init = function () {
		document.body.appendChild(darkBoxEl);
		document.body.appendChild(darkBoxPopup);
		return true;
	}

	return {
		show:function(htmlData){
			if (init !== true) init();
			darkBoxPopupInner.innerHTML = htmlData;
			darkBoxPopup.style.top = window.scrollY ? (window.scrollY + 50) + 'px' : (document.documentElement.scrollTop) + 50 + 'px';
			darkBoxEl.style.display = 'block';
			darkBoxPopup.style.display = 'block';
			darkBoxEl.style.height = document.documentElement.scrollHeight + 'px';
			if(ieVer == 6){
				for (var i = 0; i < selects.length; i++) {
					selects[i].style.visibility = 'hidden';
				}
			}
		}
	};
})();

function getElkaURL(){
	var block = _$('q_script'),
		tfield = block.getElementsByTagName('input')[0];
	    _show(block), tfield.focus(), tfield.select();
}
