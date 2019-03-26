$(document).ready(function() {
	
	$(".khb_about, .kh_aboutbox").hover( // вызов и задержка меню навигации в хэдере по ховеру
		function() {
			$(".kh_aboutbox").show();
			$(".khb_about").addClass("khb_about_hover");
		},
		function() {
  			$(".kh_aboutbox").hide();
			$(".khb_about").removeClass("khb_about_hover");
		}
	);

});

function messagePage() {

	$(".mycheck").each(function() { //чекбоксы
		changeCheckStart($(this));
		deleteButton();
	});

	$(".mycheck").mousedown(function() { //чекбоксы
		changeCheck($(this));
		deleteButton();
	});

	$(".kwbmw_delete").click(function() {
		$(".mycheck input:checked").parents(".kwbmw_messageblock").remove(); //удаляет отмеченные сообщения из DOM
		return false;
	});

	$(".kwbmwc_active").click(function() { //игнорирование клика по ссылке активного вида просмотра сообщений
		return false;
	});

	$(".kwbmwp_circle").not(".kwbmwp_active").click(function() {
		var newPage = $(this).index(); //по клику определяем индекс элемента, т.е. номер страницы. вместо alerta привязать свой метод
		$(".kwbmwp_circle").removeClass("kwbmwp_active");
		$(this).addClass("kwbmwp_active");
	});
};

function homePage() {

	$(".kwbhw_tab, .kwbhs_tab").click(function() { // переключение вкладок на домашней
		$(".kwbh_working, .kwbh_start").toggleClass("kwbh_active");
	});

	placeholderStyle();

	$(".kwbhswb_buttons div:not(.kwbhswta_btn)").click(function() { // переключение активной кнопки
		$(this).parents(".kwbhswb_buttons").find("div").removeClass("kwbhswbb_active gradient");
		$(this).addClass("kwbhswbb_active gradient");
		$(this).find("input").attr("checked", true);// переключение скрытого радиобаттона для выбранного региона
	});

	$(".kwbhswta_btn").each(function() { //динамическая вставка option
		for (i = 15; i <= 65; i++) {
			$(this).append('<option value="' + i + '">' + i + '</option>');
		};
	});

	$('#kwbhswta_from option:eq(0)').attr("selected", true);// выбранные option по умолчанию (на весь диапазон)
	$('#kwbhswta_to option:eq(49)').attr("selected", true);

	var defaults1 = { // инициализация нестандартных select
			defaultText: 'От<span class="kwbhswtab_arrows">&#9660;</span>',
	};
	$('#kwbhswta_from').sSelect(defaults1);
	var defaults2 = {
			defaultText: 'До<span class="kwbhswtab_arrows">&#9660;</span>',
	};
	$('#kwbhswta_to').sSelect(defaults2);

	$(".selectedTxt").click(function() { //инициализация скролла
		$(this).parent().find(".newList").jScrollPane(
			{
				showArrows: true,
				verticalDragMinHeight: 11,
				verticalDragMaxHeight: 11
			}
		);
	});

		
	$(".kwbhswta_btn").change(function() { // проверка выбранных значений select и вывод предупреждения при несовпадении
		if ($('#kwbhswta_from').val() > $('#kwbhswta_to').val()) {
		 	$(".kwbhswbs_error").css("display", "block");
		} else {
			$(".kwbhswbs_error").css("display", "none");
		};
	});

	$(".kwbhswu_input input").blur(function() { // проверка на валидность url
		if (isValidURL($(this).val()) || $(this).val() == 0) {
			$(this).parent().removeClass("kwbhswu_error");
		} else {
			$(this).parent().addClass("kwbhswu_error");
		};
		placeholderStyle();
	});

	$("#kwbhsw_agree").attr("checked", false);
	$(".kwbb_regionwin .mycheck input").attr("checked", false);
	
	$(".mycheck").each(function() { //чекбоксы
		changeCheckStart($(this));
	});

	$(".kwbhsw_agree .mycheck").mousedown(function() { //чекбоксы
		var el = $(this);
		input = el.find("input").eq(0);
		if(!input.attr("checked")) {
			el.css("background-position","0 -17px");	
			input.attr("checked", true);
			$("#kwbhsw_submit").addClass("kwbhsw_submiton");
		} else {
			el.css("background-position","0 0");	
			input.attr("checked", false);
			$("#kwbhsw_submit").removeClass("kwbhsw_submiton");
		};
		return true;
	});

	$("#kwbhsw_submit").click(function() { // отмена действия по умолчанию на submit, если не отмечен чекбокс
		if ($("#kwbhsw_submit").hasClass("kwbhsw_submiton") == true) {
			$(".kwb_back").show();
			$(".kwbb_starting").show();
			$("html,body").animate({"scrollTop":0},"slow");
			$(".kwbb_starting .kwbbr_close").click(function() {
				$(".kwbb_starting").hide();
				$(".kwb_back").hide();
			});
		} else {
			return false;
		};
	});

	showWindow(".kwbhswbb_world a", ".kwbb_world");
	showWindow(".kwbhswbb_russia a", ".kwbb_russia");
	showWindow(".kwbhswbb_ussr a", ".kwbb_ussr");

	$(".kwbhsw_file").click(function() {
		$(".kwb_back").show();
		$(".kwbb_banner").show();
		$("html,body").animate({"scrollTop":0},"slow");	
	});

	$(".kwbbr_view").click(function() { // просмотр отредактированного баннера
		$(".kwbbr_view").hide();
		$(".kwbbr_edit").show();
		$(".kwbb_banner").addClass("kwbb_bannershow");
		return false;
	});

	$(".kwbbr_edit").click(function() { // просмотр отредактированного баннера
		$(".kwbbr_edit").hide();
		$(".kwbbr_view").show();
		$(".kwbb_banner").removeClass("kwbb_bannershow");
		return false;
	});

	$(".kwbb_banner .kwbbr_close").click(function() { // закрытие окна создания баннера без сохранения
		$(".kwbb_banner").hide();
		$(".kwb_back").hide();
		return true;
	});

	$(".kwbb_banner .kwbb_save").click(function() { // закрытие окна создания баннера
		$(".kwbb_banner").hide();
		$(".kwb_back").hide();
	});
		
};

function changeCheck(el)
{
	var el = el,
	input = el.find("input").eq(0);
	if(!input.attr("checked")) {
		el.css("background-position","0 -17px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
	return true;
};

function changeCheckStart(el)
{
	var el = el,
		input = el.find("input").eq(0);
	if(input.attr("checked")) {
		el.css("background-position","0 -17px");	
		}
	return true;
};

function deleteButton()
{
	if ($(".mycheck input:checked").size() > 0) {
		$(".kwbmw_delete").show();
	} else {
		$(".kwbmw_delete").hide();
	};
};

function placeholderStyle() { // центрирование placeholder
	if ($(".kwbhswu_input input").val() == 0) {
		$(".kwbhswu_input input").css("color", "#bfbebe").css("text-align", "center");
	} else {
		$(".kwbhswu_input input").css("color", "#404040").css("text-align", "left");
	};
};

function isValidURL(url) { // регулярка для url согласно RFC
	return /^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&amp;?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/.test(url);
};

function showWindow(link, hideWindow) {
	$(link).click(function() {
		$(".kwb_back").show();
		$(hideWindow).show();
		$(hideWindow).find("ul").jScrollPane(
			{
				showArrows: true,
				verticalDragMinHeight: 11,
				verticalDragMaxHeight: 11
			}
		);
		$("html,body").animate({"scrollTop":0},"slow");	
		return false;
	});

	checkWindow(hideWindow);

	$(hideWindow).find(".kwbbr_close").click(function() {
		$(hideWindow).hide();
		$(".kwb_back").hide();
		$(hideWindow).find(".mycheck").css("background-position","0 0").parent().removeClass("kwbb_checked");;
		return true;
	});

	$(hideWindow).find(".kwbb_save").click(function() {
		$(hideWindow).hide();
		$(".kwb_back").hide();
	});
};

function checkWindow(hideWindow) {
	$(hideWindow).find("ul .mycheck").mousedown(function() {
    var el = $(this);
    input = el.find("input").eq(0);
    
    if(!input.attr("checked")) {
      el.css("background-position","0 -17px");  
      input.attr("checked", true);
      el.parent().addClass("kwbb_checked");
    } else {
      el.css("background-position","0 0");  
      input.attr("checked", false);
      el.parent().removeClass("kwbb_checked");
    };
    return true;
  });

	$(hideWindow).find(".kwbb_allcheck .mycheck").mousedown(function() {
    var el = $(this);
    input = el.find("input").eq(0);
    if(!input.attr("checked")) {
      el.css("background-position","0 -17px");  
      input.attr("checked", true);
      el.parent().addClass("kwbb_checked");
      el.parents(".kwbb_regionwin").find(".mycheck").not(this).each(function() {
        var el = $(this);
        input = el.find("input").eq(0);
        el.css("background-position","0 -17px");  
        input.attr("checked", true);
        el.parent().addClass("kwbb_checked");
        return true;
      });
    } else {
      el.css("background-position","0 0");  
      input.attr("checked", false);
      el.parent().removeClass("kwbb_checked");
      el.parents(".kwbb_regionwin").find(".mycheck").not(this).each(function() {
        var el = $(this);
        input = el.find("input").eq(0);
        el.css("background-position","0 0");  
        input.attr("checked", false);
        el.parent().removeClass("kwbb_checked");
        return true;
      });
    };
    return true;
  });

};