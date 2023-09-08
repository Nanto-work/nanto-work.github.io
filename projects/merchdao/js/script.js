document.addEventListener("DOMContentLoaded", function() {

/* screen observer */
	let observerMarginBottom = document.documentElement.clientHeight - document.getElementById("header").offsetHeight,
		observerMargin = "0px 0px -" + observerMarginBottom + "px 0px",
		observerOptions = {
			rootMargin: observerMargin, 
			threshold: 0
		};

	let screenArr = document.querySelectorAll(".screen");

	let screenObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				
				let screen = entry.target,
					headerClass = "header " + $(screen).data("header-class");
				
				document.getElementById("header").className = headerClass;
			}
		})
	}, observerOptions);

	screenArr.forEach((v) => {
		screenObserver.observe(v);
	});


/* toggle gallery tabs */
	$(".screen4__btn").on("click", function() {
		let gallery = $(this).data("tab");
		
		$(".screen4__btn, .screen4-gallery").removeClass("active");
		$(this).addClass("active");
		$(gallery).addClass("active");

		return false;
	});

});