$(function(){

    //sideMenu 시작

     let leftValue="0";

     $("#gnbBtn>a").click(function(){
     $("#sideMenuArea").stop().animate({"left": leftValue},
        800,
        function(){
            if(leftValue=="0"){
                leftValue="-320px";
            }else if(leftValue=="-320px"){
                leftValue="0";
            }
        }
        );

    });
    
     //sideMenu 끝


});