$(document).ready(function(){
   
    var leftMove1 = 466;
    var leftMove2= 466;

    $(".graph1 .screen").each(function() {
        $(this).css("left", leftMove1);
        leftMove1 = leftMove1 + 988;
    });

    $(".graph2 .screen").each(function() {
        $(this).css("left", leftMove2);
        leftMove2 = leftMove2 + 988;
    });
    
    $(".graph2 .screen").css("opacity", "0.7");

    $(".screen a").each(function() {
        var opac = $(this).width() / 500;
        $(this).css("opacity", 0.6 + opac);
    });

    var middle = - (($(".graph1 .screen").size()) * 494 + 466);
    var rightMove = - (middle);

    $(".graph1").css("margin-left", middle);
    $(".graph2").css("margin-left", middle);

    $(".competition .left_arrow").hover(function(){
        movingLeft('.graph1', 5000);
        movingLeft('.graph2', 7000);
        },
        function(){
            $('.graph1').stop();
            $('.graph2').stop();
        }
    );

    $(".competition .right_arrow").hover(function(){
        movingRight('.graph1', rightMove, 5000);
        movingRight('.graph2', rightMove, 7000);
        },
        function(){
            $('.graph1').stop();
            $('.graph2').stop();
        }
    );

    $(".competition").mousemove(function(e){
        e = e || window.event;
        var y = (e.clientY - 257) / 10;
        $(".graph1").css("top", y);
        $(".graph2").css("margin-top", y/2);
    });

    $(".screen a").hover(function() {
            opac = $(this).css("opacity");
            $(this).css("z-index", "9000").css("opacity", "1");;
            $(this).find(".wrap_gal").hide();
        },
        function() {
            $(this).css("opacity", opac);
            $(this).find(".wrap_gal").show();
    });

    $(".screen a").click(function() {
        var videoLink = $(this).attr("href");
        $(".video_box object").removeAttr("data");
        $(".video_box object").attr("data", videoLink);
        $(".video_box").show();
        
        return false;
    });
    $(".content.competition .close_box").click(function() {
        $(".video_box").hide();
    });

});