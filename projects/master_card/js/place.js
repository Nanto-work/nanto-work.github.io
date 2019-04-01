$(document).ready(function(){

  $(".success_window").css("opacity", "0");
  $(".success_window_center").css("opacity", "0");
  $(".incorrect_mail").css("opacity", "0");
  //$(".upload_window").css("opacity", "0");

  $(".niceCheck").mousedown(
    function() {
     changeCheck($(this));
  });
  
  $(".niceCheck").each(
    function() {
      changeCheckStart($(this));
  });
  
  $(".navi_active").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:32,
    gradientLength  :16,
    gradientSteps   :16
  });
  $(".wrap .author_name a").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:10,
    gradientLength  :50,
    gradientSteps   :16
  });
  $(".place_name span").FontEffect({
    gradient        :true,
    gradientColor   :"#f99662",
    gradientPosition:0,
    gradientLength  :100,
    gradientSteps   :24
  });
  $(".upload_title span.upload_title_inner").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:0,
    gradientLength  :100,
    gradientSteps   :30
  });
  $(".upload_place .author_name a").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:10,
    gradientLength  :100,
    gradientSteps   :24
  });
  $(".success_window_center_txt1 span, .success_window_center_txt2 span").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:10,
    gradientLength  :100,
    gradientSteps   :24
  });
  $(".allplace_item .author_name a").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:10,
    gradientLength  :50,
    gradientSteps   :16
  });
  $(".allplace_item .place_title span").FontEffect({
    gradient        :true,
    gradientColor   :"#f99662",
    gradientPosition:0,
    gradientLength  :100,
    gradientSteps   :24
  });
  $(".allplace_check span.allplace_check_link").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:0,
    gradientLength  :50,
    gradientSteps   :14
  });
    $(".rules_accept").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:0,
    gradientLength  :50,
    gradientSteps   :14
  });
  $(".incorrect_mail_txt1, .incorrect_mail_txt2").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:10,
    gradientLength  :100,
    gradientSteps   :24
  });
  $(".upload_window_comp div, .upload_window_album a span").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:0,
    gradientLength  :50,
    gradientSteps   :16
  });

  $(".submit_btn").click(function(){
    var checkRules = $("#check_rules_accept").attr("checked");
    var mail = $(".upload_place .mail input").val();
    if (checkRules != "checked") {
      alert("Прежде чем опубликовать свой рассказ, Вы должны поставить галочку о согласии с нашими правилами");
    } else if (mail.match(/\S*@\S*/) == null){
      $(".success_window").css("opacity", "1").css("z-index", "1000");
      $(".incorrect_mail").css("opacity", "1").css("z-index", "2000");
    } else {
      $(".success_window").css("opacity", "1").css("z-index", "1000");
      $(".success_window_center").css("opacity", "1").css("z-index", "2000");
    };
  });

  $(".incorrect_mail .close_btn").click(function(){
    $(".success_window").css("opacity", "0").css("z-index", "-1");
    $(".incorrect_mail").css("opacity", "0").css("z-index", "-1");
  });

  $(".success_window_center .close_btn input").click(function(){
    $(".success_window").css("opacity", "0").css("z-index", "-1");
    $(".success_window_center").css("opacity", "0").css("z-index", "-1");
  });

  $(".photo_upload_btn").click(function(){
    $(".success_window").css("opacity", "1").css("z-index", "1000");
    $(".upload_window").css("opacity", "1").css("z-index", "2000");
  });
  
  $(".upload_window_close, .upload_window_comp, .upload_window_album").click(function(){
    $(".success_window").css("opacity", "0").css("z-index", "-1");
    $(".upload_window").css("opacity", "0").css("z-index", "-1");
  });

  $(".allplace_check_new").live("click", checkNew);
  $(".allplace_check_popular").live("click", checkPopular);

  /* формирование пэйджинатора */
  var pages = $(".allplace_block").length;
  if (pages <= 1) {
    $(".pagenator").remove();
  } else if (pages <= 8) {
    for (i = 1; i <= pages; i++) {
      $(".down_page").before('<li class="pages">' + i + '</li>');
    };
  } else if (pages > 8) {
    for (i = 1; i < 5; i++) {
      $(".down_page").before('<li class="pages">' + i + '</li>');
    };
    $(".down_page").before('<li>...</li>');
    $(".down_page").before('<li class="pages">' + pages + '</li>');
  } else {
    $(".pagenator").remove();
  };

  $(".pages:first").addClass("active_page");
  /* формирование пэйджинатора */

});

function checkNew(){
  $(".allplace_check").html('<span class="allplace_check_new allplace_check_link">ПОПУЛЯРНЫЕ</span><span class="allplace_check_popular">НОВЫЕ</span>');
  $(".allplace_check span.allplace_check_link").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:0,
    gradientLength  :50,
    gradientSteps   :14
  });
};

function checkPopular(){
  $(".allplace_check").html('<span class="allplace_check_new">ПОПУЛЯРНЫЕ</span><span class="allplace_check_popular allplace_check_link">НОВЫЕ</span>');
  $(".allplace_check span.allplace_check_link").FontEffect({
    gradient        :true,
    gradientColor   :"#ffe741",
    gradientPosition:0,
    gradientLength  :50,
    gradientSteps   :14
  });
};


function changeCheck(el) {
  var el = el,
  input = el.find("input").eq(0);
  if(!input.attr("checked")) {
    el.css("background-position","0 -19px");  
    input.attr("checked", true)
  } else {
    el.css("background-position","0 0");  
    input.attr("checked", false)
  }
    return true;
};

function changeCheckStart(el) {
  var el = el,
  input = el.find("input").eq(0);
  input.attr("checked", false);
  el.css("background-position","0 0");  
};