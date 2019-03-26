var simpleSlider;

(function($){
	
	
	/* –––––––––––––––––––––––––––——————————————————————————————————————————————————— */
	/* —————SCRIPTS for ALL Pages ——————————————————————————————————————————————————— */
	/* —————there located scripts for sidebar, navbar, footer, and etc general elems— */
	/* —————SCRIPT for Current page must be localted in SCRIPTS-[current-page].JS———— */
	/* —————————————————————————————————————————————————————————————————————————————— */
	
	
	$(document).ready(function(){
	
	
		/* ––––––––––––––––––––––––––––––––––– */
		/* ––––––––––––––REVOLVER––––––––––––– */
		/* ––––––––––––––––––––––––––––––––––– */
		
		var imgArr = new Array( // relative paths of images
			'assets/content/rotator/abstract-q-c-300-200-4.jpg',
			'assets/content/rotator/fashion-q-c-300-200-5.jpg',
			'assets/content/rotator/fashion-q-c-300-200-9.jpg',
			'assets/content/rotator/food-q-c-300-200-5.jpg',
			'assets/content/rotator/food-q-c-300-200-9-1.jpg',
			'assets/content/rotator/food-q-c-300-200-9.jpg',
			'assets/content/rotator/food-q-g-300-200-6.jpg',
			'assets/content/rotator/nature-q-c-300-200-1.jpg',
			'assets/content/rotator/nature-q-c-300-200-10.jpg',
			'assets/content/rotator/nightlife-q-c-300-200-1.jpg',
			'assets/content/rotator/nightlife-q-c-300-200-10.jpg',
			'assets/content/rotator/people-q-c-300-200-9.jpg',
			'assets/content/rotator/sports-q-c-300-200-1.jpg',
			'assets/content/rotator/sports-q-c-300-200-3.jpg',
			'assets/content/rotator/sports-q-c-300-200-7.jpg',
			'assets/content/rotator/technics-q-c-300-200-3.jpg',
			'assets/content/rotator/technics-q-c-300-200-6.jpg',
			'assets/content/rotator/technics-q-c-300-200-10.jpg'
		);
		
		var preloadArr = new Array();
		var i;
		var imageRotatorInterval;
		
		/* preload images */
		for(i=0; i < imgArr.length; i++){
			preloadArr[i] = new Image();
			preloadArr[i].src = imgArr[i];
		}
		
		var currImg = 1;
		
		/* image rotator */
		function changeImg(){
			$('#sidenav-header').css('background-image','url(' + preloadArr[currImg++%preloadArr.length].src +')');
		}
		/* EVENT ON ELEM */
		
		$('#sidenav-logo').hover(
			function() {
				imageRotatorInterval = setInterval(changeImg, 25);
			}, function() {
				clearInterval(imageRotatorInterval);
				$('#sidenav-header').css('background-image','');
			}
		);
		
		/* ––––––––––––––––––––––––––––––––––––– */
		/* global SIMPLE BXslider initialisation */
		/* ––––––––––––––––––––––––––––––––––––– */
/*
		simpleSlider = $('.simple-slider');
		simpleSlider.bxSlider({
			auto: false,
			pager: false,
		});
*/

		/* ––––––––––––––––––––––––––––––––––– */
		/* ––––––––––––––POPUPS––––––––––––– */
		/* ––––––––––––––––––––––––––––––––––– */
		$('.btn-popup').popover({
			html: true,
			content: function(){
				var dataPopupContentDiv = $(this).attr('data-pop-content');
				var dataPopupContent = $(dataPopupContentDiv).html();
				return dataPopupContent;
			},
		});


		/* переключение окна логина и панели юзера */
		var loginingUser = false; // сюда нужна логическая переменная - если юзер залогинен, то true
		showUserPanel(loginingUser);

		/* переключение окна логина и регистрации на странице checkout по клику */
		$(".checkout-blur").find(".checkout-login_toggle-enter").click(function() {
			$(".checkout-login").removeClass("checkout-login_showreg");
			return false;
		});
		$(".checkout-blur").find(".checkout-login_toggle-reg").click(function() {
			$(".checkout-login").removeClass("checkout-login_showreg");
			$(".checkout-login").addClass("checkout-login_showreg");
			return false;
		});

		/* для checkout - после заполнения формы и отправки её на сервер, ждём овтета, чтобы убрать окно */
		var checkoutUser = false; 
		
		$(".checkout-blur").find("#checkout-auth_submit").click(function() {
			checkoutUser = true;// сюда нужна логическая переменная - если юзер авторизовался, то true; если нет - пусть смотрит на окошко регистрации
			showCheckoutPanel(checkoutUser);
			return false;
		});

		$(".image_picker_selector li:last-child").click(function() {
			$(".color-hide").removeClass("color-hide_show");
			$(".color-hide").addClass("color-hide_show");
		});

		$(".image_picker_selector li:not(:last-child)").click(function() {
			$(".color-hide").removeClass("color-hide_show");
		});

	});
	
	/* ––––––––––––––––––––––––––––––––––– */
	/* ––––––––––—REVOLVER hiding––––––––– */
	/* ––––––––––––––––––––––––––––––––––– */
	var visibleSidenav = false;
	$(document).scroll(function() {
	    if( $(this).scrollTop() >= ($('#header').height()/2) ) {
	        if( !visibleSidenav ) {
	            visibleSidenav = true;
	            $('#sidenav-header').css({opacity:'1'});
	            $('#sidenav').addClass('scrolled');
	        }
	    } else {
	        if( visibleSidenav ) {
	            visibleSidenav = false;
	            $('#sidenav-header').css({opacity:'0'});
	            $('#sidenav').removeClass('scrolled');
	        }
	    }
	});
	
	
	/* ––––––––––––––––––––––––––––––––––––– */
	/* ———————searchField——————————————————— */
	/* ––––––––––––––––––––––––––––––––––––– */
	$('#searchFieldShow').click(function(){
		
		$('#searchWrapper').slideToggle();
		
		return false;
	});
	
	
	/* ––––––––––––––––––––––––––––––––––––– */
	/* ———————global IMAGEPICKJER INIT—————— */
	/* ––––––––––––––––––––––––––––––––––––– */
	if ($('select.image-picker').html()){
		startGoodsProp();// функция вставлена для наглядности, после реализации синхронизации с сервером заменить на changeGoodsProp();
		$("select.image-picker").imagepicker();
		$("select.image-picker").imagepicker().change(function() {
			changeGoodsProp();
		});
	};
	
	if ($('select.image-picker').html()){
		$('select.selectBox').selectBox({
			mobile: true,
			menuTransition: 'fade',
		});
		$('select.selectBox').selectBox().change(function () {
			changeGoodsProp();
	    	// selectValue = $(this).val();
			// $(this).attr("value", selectValue);
	    });
	};

	function startGoodsProp() {//функция вставлена для наглядности, после реализации синхронизации с сервером - удалить
		$("select.image-picker").imagepicker();
		var goodsPrice = "70000";
		$("#changeGoodsPrice").text(goodsPrice);
	}

	function changeGoodsProp() {// функция которая получает значение цены и вставляет в html, срабатывает при загрузке страницы и при изменении любой хар-ки товара
		//как вариант - сюда можно вставить аяксовый вызов - отправляет на сервер значения выбранных селектов (можно сразу форму отправлять и там её парсить), и ждёт ответ в виде уже сгенерированной цены
		var goodsPrice = "35000";
		$("#changeGoodsPrice").text(goodsPrice);
	}

	/* переключение окна логина и панели юзера */
	function showUserPanel(loginingUser) {
		if (loginingUser == true) {
			$("#users-dropdown").removeClass("logining");
			$("#users-dropdown").addClass("logining");
		} else {
			$("#users-dropdown").removeClass("logining");
		};
	}

	/* убираем окно авторизации на странице checkout */
	function showCheckoutPanel(checkoutUser) {
		if (checkoutUser == true) {
			$("body.checkout").removeClass("checkout-blur");
		};
	}

	/* ––––––––––––––––––––––––––––––––––––– */
	/* ———————MASKED PHONE INPUT      —————— */
	/* ––––––––––––––––––––––––––––––––––––– */
	/*
if ($('input[type="tel"]')){
		$('input[type="tel"]').mask("+7 (999) 999 999");
	}
*/
	
	
	/* ––––––––––––––––––––––––––––––––––––– */
	/* ———————Make SIDENAV Dropdown on hover——— */
	/* ––––––––––––––––––––––––––––––––––––– */    
	$("#sidenav a").click(function(e){
		/*e.stopPropagation();*/
		return false;
	});
	$('#sidenav .unique').hover(function() {
         $(this).toggleClass('open');
    });
    
	
	
})(jQuery);