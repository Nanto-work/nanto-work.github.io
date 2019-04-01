$(document).ready(function(){
    
  $(".head_log-in").click(function(){
    $(".head_log-in_reg").show();
  });
  $(".head_log-in").mouseleave(function(){
    setTimeout(function(){
      $(".head_log-in_reg").hide();
      }, 400);
  });

   
/* Чекбокс */
  
  $(".storyradio").each(
    function() {     
     changeRadioStart($(this));
  });

  $(".content.news .news_date span").mouseover(function() {
    $(this).parent().find(".news_text").show();
  });

  $(".content.news .news_date .news_text").mouseleave(function() {
    $(".content.news .news_date .news_text").hide();
  });

  $(".content.persons div.left_arrow").click(function(){
    $(".content.persons div.inner_cont").fadeOut(function(){
      $("div.person_item").removeClass("main_item");
      $("div.person_item:first").appendTo(".content.persons div.inner_cont");
      $("div.person_item:first").addClass("main_item");
    });
    $("div.inner_cont").fadeIn();
  });

  $(".content.persons div.right_arrow").click(function(){
    $(".content.persons div.inner_cont").fadeOut(function(){
      $("div.person_item").removeClass("main_item");
      $("div.person_item:last").prependTo(".content.persons div.inner_cont");
      $("div.person_item:first").addClass("main_item");
    });
    $("div.inner_cont").fadeIn();
  });

  $(".tales .left_arrow").hover(function(){
      movingLeft('.tales .jspPane', 5000);
      },
      function(){
          $('.tales .jspPane').stop();
      }
  );

  $(".tales .right_arrow").hover(function(){
      movingRight('.tales .jspPane', 0, 5000);
      },
      function(){
          $('.tales .jspPane').stop();
      }
  );

});


function arrowPos() {
  $(".tales .jspArrowLeft").appendTo(".tales").css("width", "60px");
  $(".tales .jspArrowRight").appendTo(".tales").css("width", "60px");
};

function movingLeft(elem, speed) {
  $(elem).animate({"left":"0"}, speed, "linear");
};

function movingRight(elem, rightMove, speed) {
  $(elem).animate({"left": rightMove}, speed, "linear");
};

function changeRadio(el)
  {
    var el = el,
    input = el.find("input").eq(0);
    var nm=input.attr("name");
    
    $(".storyradio input").each(
      function() {
        if($(this).attr("name")==nm)
        {
          $(this).parent().removeClass("radiochecked");
        }
    });           
  
  
  if(el.attr("class").indexOf("storyradio_disabled")==-1)
  { 
    el.addClass("radiochecked");
    input.attr("checked", true);
  }
  
    return true;
}

function changeVisualRadio(input)
{
  var wrapInput = input.parent();
  var nm=input.attr("name");
    
  $(".storyradio input").each(
  
  function() {
     
    if($(this).attr("name")==nm)
    {
      $(this).parent().removeClass("radiochecked");
    }
     
     
  });

  if(input.attr("checked")) 
  {
    wrapInput.addClass("radiochecked");
  }
}

function changeRadioStart(el)
{

try
{
var el = el,
  radioName = el.attr("name"),
  radioId = el.attr("id"),
  radioChecked = el.attr("checked"),
  radioDisabled = el.attr("disabled"),
  radioTab = el.attr("tabindex");
  radioValue = el.attr("value");
  if(radioChecked)
    el.after("<span class='storyradio radiochecked'>"+
      "<input type='radio'"+
      "name='"+radioName+"'"+
      "id='"+radioId+"'"+
      "checked='"+radioChecked+"'"+
      "tabindex='"+radioTab+"'"+
            "value='"+radioValue+"' /></span>");
  else
    el.after("<span class='storyradio'>"+
      "<input type='radio'"+
      "name='"+radioName+"'"+
      "id='"+radioId+"'"+
      "tabindex='"+radioTab+"'"+
          "value='"+radioValue+"' /></span>");
  
  if(radioDisabled)
  {
    el.next().addClass("storyradio_disabled");
    el.next().find("input").eq(0).attr("disabled","disabled");
  }
  
  el.next().bind("mousedown", function(e) { changeRadio($(this)) });
  el.next().find("input").eq(0).bind("change", function(e) { changeVisualRadio($(this)) });
  if($.browser.msie)
  {
    el.next().find("input").eq(0).bind("click", function(e) { changeVisualRadio($(this)) }); 
  }
  el.remove();
}
catch(e)
{
  
}
    return true;
}