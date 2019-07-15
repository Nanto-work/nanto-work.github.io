$(document).ready(function(){
	var form = $("#feedback-form"),
		successMsg = "Спасибо!",
		logo = $("#header-logo"),
		scrollBreak = 565	;

	toggleLogo(scrollBreak, logo);

	$(window).on("scroll", function() {
		toggleLogo(scrollBreak, logo);
	});

	if ($("#delivered").length) {
        var c = new CountUp("delivered", 1000000, 2108877, 0, 5, {separator: ' '});
        c.start();
    }

	$(form).on("submit", function(){
		submitForm(form, successMsg);
		return false;
	});
});

function submitForm(form, successMsg) {
	var href = $(form).attr("action"),
		msg = {};
	
	$(form).find("input").each(function(){
		var key = $(this).attr("name");
		msg[key] = $(this).val();
	});

	console.log(msg, href);

	$(form).find("button[type='submit']").text(successMsg);
}

function toggleLogo(scrollBreak, logo) {

	if(pageYOffset > scrollBreak) {
		$(logo).addClass("visible-logo");
	} else {
		$(logo).removeClass("visible-logo");
	};
}