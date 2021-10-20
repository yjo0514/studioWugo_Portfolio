$(function(){

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


});