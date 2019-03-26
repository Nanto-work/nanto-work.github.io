/* Placeholder plugin for jQuery */
(function(b){function d(a){this.input=a;a.attr("type")=="password"&&this.handlePassword();b(a[0].form).submit(function(){if(a.hasClass("placeholder")&&a[0].value==a.attr("placeholder"))a[0].value=""})}d.prototype={show:function(a){if(this.input[0].value===""||a&&this.valueIsPlaceholder()){if(this.isPassword)try{this.input[0].setAttribute("type","text")}catch(b){this.input.before(this.fakePassword.show()).hide()}this.input.addClass("placeholder");this.input[0].value=this.input.attr("placeholder")}},
hide:function(){if(this.valueIsPlaceholder()&&this.input.hasClass("placeholder")&&(this.input.removeClass("placeholder"),this.input[0].value="",this.isPassword)){try{this.input[0].setAttribute("type","password")}catch(a){}this.input.show();this.input[0].focus()}},valueIsPlaceholder:function(){return this.input[0].value==this.input.attr("placeholder")},handlePassword:function(){var a=this.input;a.attr("realType","password");this.isPassword=!0;if(b.browser.msie&&a[0].outerHTML){var c=b(a[0].outerHTML.replace(/type=(['"])?password\1/gi,
"type=$1text$1"));this.fakePassword=c.val(a.attr("placeholder")).addClass("placeholder").focus(function(){a.trigger("focus");b(this).hide()});b(a[0].form).submit(function(){c.remove();a.show()})}}};var e=!!("placeholder"in document.createElement("input"));b.fn.placeholder=function(){return e?this:this.each(function(){var a=b(this),c=new d(a);c.show(!0);a.focus(function(){c.hide()});a.blur(function(){c.show(!1)});b.browser.msie&&(b(window).load(function(){a.val()&&a.removeClass("placeholder");c.show(!0)}),
a.focus(function(){if(this.value==""){var a=this.createTextRange();a.collapse(!0);a.moveStart("character",0);a.select()}}))})}})(jQuery);

/* cariusel */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.1g.1w=6(o){o=$.1f({r:n,x:n,N:n,17:q,J:n,L:1a,16:n,y:q,u:12,H:3,B:0,k:1,K:n,I:n},o||{});8 G.R(6(){p b=q,A=o.y?"15":"w",P=o.y?"t":"s";p c=$(G),9=$("9",c),E=$("10",9),W=E.Y(),v=o.H;7(o.u){9.1h(E.D(W-v-1+1).V()).1d(E.D(0,v).V());o.B+=v}p f=$("10",9),l=f.Y(),4=o.B;c.5("1c","H");f.5({U:"T",1b:o.y?"S":"w"});9.5({19:"0",18:"0",Q:"13","1v-1s-1r":"S","z-14":"1"});c.5({U:"T",Q:"13","z-14":"2",w:"1q"});p g=o.y?t(f):s(f);p h=g*l;p j=g*v;f.5({s:f.s(),t:f.t()});9.5(P,h+"C").5(A,-(4*g));c.5(P,j+"C");7(o.r)$(o.r).O(6(){8 m(4-o.k)});7(o.x)$(o.x).O(6(){8 m(4+o.k)});7(o.N)$.R(o.N,6(i,a){$(a).O(6(){8 m(o.u?o.H+i:i)})});7(o.17&&c.11)c.11(6(e,d){8 d>0?m(4-o.k):m(4+o.k)});7(o.J)1p(6(){m(4+o.k)},o.J+o.L);6 M(){8 f.D(4).D(0,v)};6 m(a){7(!b){7(o.K)o.K.Z(G,M());7(o.u){7(a<=o.B-v-1){9.5(A,-((l-(v*2))*g)+"C");4=a==o.B-v-1?l-(v*2)-1:l-(v*2)-o.k}F 7(a>=l-v+1){9.5(A,-((v)*g)+"C");4=a==l-v+1?v+1:v+o.k}F 4=a}F{7(a<0||a>l-v)8;F 4=a}b=12;9.1o(A=="w"?{w:-(4*g)}:{15:-(4*g)},o.L,o.16,6(){7(o.I)o.I.Z(G,M());b=q});7(!o.u){$(o.r+","+o.x).1n("X");$((4-o.k<0&&o.r)||(4+o.k>l-v&&o.x)||[]).1m("X")}}8 q}})};6 5(a,b){8 1l($.5(a[0],b))||0};6 s(a){8 a[0].1k+5(a,\'1j\')+5(a,\'1i\')};6 t(a){8 a[0].1t+5(a,\'1u\')+5(a,\'1e\')}})(1x);',62,96,'||||curr|css|function|if|return|ul|||||||||||scroll|itemLength|go|null||var|false|btnPrev|width|height|circular||left|btnNext|vertical||animCss|start|px|slice|tLi|else|this|visible|afterEnd|auto|beforeStart|speed|vis|btnGo|click|sizeCss|position|each|none|hidden|overflow|clone|tl|disabled|size|call|li|mousewheel|true|relative|index|top|easing|mouseWheel|padding|margin|200|float|visibility|append|marginBottom|extend|fn|prepend|marginRight|marginLeft|offsetWidth|parseInt|addClass|removeClass|animate|setInterval|0px|type|style|offsetHeight|marginTop|list|jCarouselLite|jQuery'.split('|'),0,{}))


$(document).ready(function(){

	var b = $('body');
	if ($.browser.safari && $.browser.version < '528') {
		b.addClass('safari3');
	} else if ($.browser.safari) {
		b.addClass('safari');
	} else if ($.browser.opera) {
		b.addClass('opera');
		if ($.browser.version < '9.6') b.addClass('opera90');
	} else if ($.browser.msie) {
		b.addClass('ie');
		if ($.browser.version >= '8.0') b.addClass('ie8');
	} else if ($.browser.mozilla && $.browser.version <= '1.9.2') {
		b.addClass('ff_old');
	}


/* baner carousel */
$(".banner .carousel").jCarouselLite({
		btnNext: ".carnext",
		btnPrev: ".carprev",
		auto: 5000,
		speed: 500,
		visible: 1
    });

/* main.js */
$('input[placeholder], textarea[placeholder]').placeholder();	

$('#a-client, #a-payment').click(function(){
	$('.login .client, .login .payment').slideToggle(300);
})


/* support carousel */
$('.centercol .support table').css('display','none');
$('.centercol .support table').eq(0).show().addClass('display');
$('.centercol .support .green-dotted').click(function(){
	var nmb = $('.centercol .support table').index($('.display'));
	$('.centercol .support table').eq(nmb).removeClass('display').hide();
	if($('.centercol .support table').eq(nmb+1).html()){
		$('.centercol .support table').eq(nmb+1).addClass('display').show();
	}else{
		$('.centercol .support table').eq(0).addClass('display').show();
	}
});

/* faq */
$('.content .faq li p').css('display','none');
$('.content .faq li strong').click(function(){
	$(this).toggleClass('bold');
	$(this).next('p').toggle();
});
$('.content .faq .quest').css('display','none');
$('.content .faq h4').click(function(){
	$(this).next('.quest').toggle();
});

/* dedic table */
	$('table.dedic tr').hover(function(){
		if (!$(this).is('.blue') || !$(this).is('.green'))
			$(this).find('td').toggleClass('hover');
	});

});

/* cufon */
Cufon.replace('.header .menu strong', { fontFamily: 'eserverfont' });
Cufon.replace('.banner .whois strong', { fontFamily: 'eserverfont' });
Cufon.replace('h3', { fontFamily: 'eserverfont' });
Cufon.replace('.support td strong', { fontFamily: 'eserverfont' });
Cufon.replace('.vds-vmware p .cuf', { fontFamily: 'eserverfont' });
Cufon.replace('.carousel .big', { fontFamily: 'eserverfont' });
Cufon.replace('.leftsupport strong', { fontFamily: 'eserverfont' });