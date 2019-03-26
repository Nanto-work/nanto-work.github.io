jQuery(function($) {
	$(document).ready(function() {

		var umorama = {
  			common: {},
    		controller: {}
		};

		var category = 0, page = 2;

		var countUsers = $("#countUsers").text();
		countUsers = countUsers.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
		$("#countUsers").text(countUsers);
		counterJokes(".counterJokes");

		/*setEqualHeight($(".column"));*/

/*		$(".popup-box").fancybox({
	        'titlePosition'     : 'inside',
	        'transitionIn'      : 'none',
	        'transitionOut'     : 'none',
	        'autoScale' : false,
	        'autoDimensions' : true,
	        'height' :false,
	        'scrolling' : 'no'
	    });*/

		$('.input-tip').formtips({
        	tippedClass: 'tipped'
    	});

		var $block = $(".social-box")// фиксированный подвал
		var socialOffset = $block.offset();
		var scrollTreshold = socialOffset.top;
		var fixedClass = "fixed";
		$(window).scroll(function() {
			if ($(window).scrollTop()>scrollTreshold) {
				$block.addClass(fixedClass)
			} else {
				$block.removeClass(fixedClass)
			};
		});

		$(".category-one a").click(function(){//отладка аякса
			umorama.controller.joke.load(category, page, function(error, response) {
			    if ( response.category == category && response.page == page) {
        			if (error) {
        				alert("Выдать 404");
        			} else {
            			$('.middle').append(response.html);
            			++page;
        			};
    			};
			});

			/*var indexCategory = $(this).closest(".category-one").index();
			var nameCategory = "contentCategory" + indexCategory;
			$(".category-one").eq(indexCategory).toggleClass("on");
			var urlCategory = $(this).attr("href");
			//urlCategory =+ "?ajax=true";
			if ($(".category-one").eq(indexCategory).hasClass("on")) {
			
			} else { */
			/* $(".middle").load(urlCategory + " .category_content");*/
				/*$.ajax({
					url: urlCategory + " .category_content",
					dataType: "html",
					success: function (data) {
										
						var $(".middle").html(data);
					}
				});
			};*/
			return false;
		});
 	});
});
/*
function setEqualHeight(columns) {//некорректный обсчёт
    var tallestcolumn = 0;
    columns.each(
            function()
            {
                currentHeight = $(this).height();
                if(currentHeight > tallestcolumn)
                {
                    tallestcolumn = currentHeight+50;
                }
            }
    );
    columns.height(tallestcolumn);
}
*/
/*$(function(){
    $(".someClass").tipTip({maxWidth: "auto", edgeOffset: 10});
});*/

function counterJokes(count) {
	var countString = ('00000' + $(count).text()).slice(-5);
	$("#countJoke1").text(countString[4]);
	$("#countJoke2").text(countString[3]);
	$("#countJoke3").text(countString[2]);
	$("#countJoke4").text(countString[1]);
	$("#countJoke5").text(countString[0]);
}