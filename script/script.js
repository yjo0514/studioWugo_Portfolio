$(function(){

     //배경 슬라이드 시작

     let bgSlide=0;
     setInterval(fnSlide, 3900);
     function fnSlide(){
          bgSlide++;
          if(bgSlide==1){
               imgpath="images/mainPage/9a1fbee9b0324.jpg";
          } else if(bgSlide==2){
               imgpath="images/mainPage/6d01ae4275364.jpg";
               bgSlide=-1;
          } else if(bgSlide==0){
               imgpath="images/mainPage/9ad5b2a2812eb.jpg";
          }
          $("body").css({"background-image":"url("+imgpath+")"});
     }

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


     //전체동의 구현 시작

     $("#wholeChk").click(function(){
          let chkTF= $(this).prop("checked");
          $(".contractAgree").prop("checked",chkTF);
     });


     //전체동의 구현 끝


     //popLoginBG 시작

     $("#loginPopBtn").click(function(){
          $("#popLoginBG").css({"display":"block"});
     });

     $("#popBtnArea button").click(function(){
          $("#popLoginBG").css({"display":"none"});
     });


     //popLoginBG 끝


});

     //약관 동의 후 가입하기 시작

     function fnAtBtn(){

     let domChkbox= document.getElementById("wholeChk")
     wholeChk=domChkbox.checked;
     //약관동의 체크박스, true/false만 존재함
 
  if (wholeChk==""){ //agree입력란이 공백이라면
         alert("약관동의 체크를 확인해주세요.");   
         domChkbox.focus(); 
     } else{
          location="join_form.html";
     }

}


     //약관 동의 후 가입하기 끝


     // 상품 수량 증가 감소 시작

     function fnMiusCnt(){
          let price= document.querySelector("#priceCnt").innerText;
          price = price.replace(/,/g, "");
          let cnt= document.querySelector("#cnt").value;
          // let cntAll= document.querySelector("#cntAll").value;

          if(cnt==1){
               return false;
          } else{          
               cnt--;
               let priceSum= price*cnt;
               priceSum = priceSum.toLocaleString();
               document.querySelector("#price").innerText=priceSum;
               document.querySelector("#cnt").value=cnt;
               document.querySelector("#cntAll").innerText = cnt; 

          }


          // document.querySelector("#cntAll").value=cntAll;
     }

     function fnPlusCnt(){
          let price= document.querySelector("#priceCnt").innerText;
          price = price.replace(/,/g, "");
          let cnt= document.querySelector("#cnt").value;
          // let cntAll= document.querySelector("#cntAll").value;


          cnt++;
          let priceSum = price * cnt;
          priceSum = priceSum.toLocaleString();
          document.querySelector("#price").innerText = priceSum;    
          document.querySelector("#cnt").value = cnt;
          document.querySelector("#cntAll").innerText = cnt; 
     }


     


     // 상품 수량 증가 감소 끝


     //join Elseif 시작



          function fnSbm(){

               let domId= document.querySelector("#id").value;
               domId= domId.trim();
               document.querySelector("#id").value=domId;
               $("#joinID>#idArea").css({
                    "padding-bottom":"5px",
                    "border-color":"#f00"
               });

               if(domId==""){
                    let idMsg=("아이디를 입력 하세요.");
                    document.querySelector("#idMsg").innerText=idMsg;
                    document.querySelector("#id").focus();
                    return;
               }

               let domPw= document.querySelector("#pw").value;
               domPw= domPw.trim();
               document.querySelector("#pw").value=domPw;
               $("#joinID>#pwArea").css({
                    "padding-bottom":"5px",
                    "border-color":"#f00"
               });

               if(domPw==""){
                    let pwMsg=("비밀번호를 입력 하세요.");
                    document.querySelector("#pwMsg").innerText=pwMsg;
                    document.querySelector("#pw").focus();
                    return;
               }

               let domPwRe= document.querySelector("#pwRe").value;
               domPwRe= domPwRe.trim();
               document.querySelector("#pwRe").value=domPwRe;
               $("#joinID>#pwReArea").css({
                    "padding-bottom":"5px",
                    "border-color":"#f00"
               });

               if(domPwRe==""){
                    let pwReMsg=("비밀번호를 한번 더 입력 하세요.");
                    document.querySelector("#pwReMsg").innerText=pwReMsg;
                    document.querySelector("#pwRe").focus();
                    return;
               }

               let domuEmail= document.querySelector("#uEmail").value;
               domuEmail= domuEmail.trim();
               document.querySelector("#uEmail").value=domuEmail;
               $("#email>#uEmailArea").css({
                    "padding-bottom":"5px",
                    "border-color":"#f00"
               });

               if(domuEmail==""){
                    let uEmailMsg=("이메일을 입력하세요.");
                    document.querySelector("#uEmailMsg").innerText=uEmailMsg;
                    document.querySelector("#uEmail").focus();
                    return;
               }

               let domuName= document.querySelector("#uName").value;
               domuName= domuName.trim();
               document.querySelector("#uName").value=domuName;
               $("#nickname>#uNameArea").css({
                    "padding-bottom":"5px",
                    "border-color":"#f00"
               });


               if(domuName==""){
                    let uNameMsg=("이름을(를) 입력하세요.");
                    document.querySelector("#uNameMsg").innerText=uNameMsg;
                    document.querySelector("#uName").focus();
                    return;
               }



               document.querySelector("#idMsg").innerText = "";
               // let domId=document.getElementById("id");
               // id=domId.value;
               // id=id.trim();
          

          // let domPw=document.getElementById("pw");
          // pw=domPw.value;
          // pw=pw.trim();

          // let domPwRe=document.getElementById("pwRe");
          // pwRe=domPwRe.value;
          // pwRe=pwRe.trim();
          
          // let domUemail=document.getElementById("uEmail");
          // uEmail=domUemail.value;
          // uEmail=uEmail.trim();

          // let domUname=document.getElementById("uName");
          // uName=domUname.value;
          // uName=uName.trim();




          // if(id==""){
          //      domId.focus();
          // } else if(pw==""){
          //      domPw.focus();
          // } else if(pwRe==""){
          //      domPwRe.focus();
          // } else if(uEmail==""){
          //      domUemail.focus();
          // } else if(uName==""){
          //      domUname.focus();
          // }

     }



     //join Elseif 끝