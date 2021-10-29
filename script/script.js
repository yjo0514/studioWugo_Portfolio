$(function(){

     //배경 슬라이드 시작
     // $("#gnbBtn").click(function(){
     //      $("body").fadeToggle();
     //  });



     //      $.backstretch(["../images/mainPage/6d01ae4275364.jpg",
     // "../images/mainPage/9a1fbee9b0324.jpg","../images/mainPage/9ad5b2a2812eb.jpg"
     // ],
     // {duration: 2000, fade: 500});




     // $(document).ready(function(){
          
     //      $("#headerLogo a").click(function(){
     //          $("body").slideToggle();
     //      });
          
     //  });




     //    var i = 0;
     //    $("#body").css("background-image", "url(images/" + images[i] + ")");
     //    setInterval(function () {
     //        i++;
     //        if (i == images.length) {
     //            i = 0;
     //        }
     //        $("#dvImage").fadeOut("slow", function () {
     //            $(this).css("background-image", "url(images/" + images[i] + ")");
     //            $(this).fadeIn("slow");
     //        });
     //    }, 1000);
    


     // setInterval (fnSlide, 5000);
     // function fnSlide(){
     //      $("body").animate({
     //           "margin-left":"100%"
     //      },
     //      3000,
     //      function(){
     //           $(body).
     //      }
     //      );

     // }




     // $(document).ready(function(){
     //      $("body").backgroundTransition({
     //           backgrounfs:[
     //                {src: ""}
     //           ]
     //      });

     // });

     //배경 슬라이드 끝

    //sideMenu 시작

     let leftValue="0";

     let chkToF = true;
     $("#gnbBtn a").click(function() {
         $(this).toggleClass("applied");
 
         $("#sideMenuBG").fadeToggle(250);
         if (chkToF) {
              $("#sideMenuArea").animate({"left": "0px"}, 250);
              chkToF = false;
             } else {
             $("#sideMenuArea").animate({"left": "-320px"}, 250);
             chkToF = true;
             }
     });

     $("div#sideMenuArea button").click(function(){
        $(this).toggleClass("applied");
 
        $("#sideMenuBG").fadeToggle(250);
        if (chkToF) {
             $("#sideMenuArea").animate({"left": "0px"}, 250);
             chkToF = false;
            } else {
            $("#sideMenuArea").animate({"left": "-320px"}, 250);
            chkToF = true;
            }
     });

     //sideMenu 끝

     //notice 권한 알림 시작
     $("#bbs button").click(function(){
          alert("작성 권한이 없습니다.");
     })
     //notice 권한 알림 끝



});