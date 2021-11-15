//goods 시작

     $(function(){

          $("#goodsMainImg li").mouseover(function(){
           let mainImg= $(this).children().attr("src");
           $("#goodsSlide img").attr("src",mainImg);
          });


     });

     
     //goods 끝