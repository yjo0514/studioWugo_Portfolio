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
 
         $("#sideMenuBG").fadeToggle(220);
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
 
        $("#sideMenuBG").fadeToggle(220);
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


     //nonmemberPop 시작

     $("#nonmemberPop").click(function(){
          $("#nonmemberBG").css({"display":"block"});
     });
     
     $("#nonmemberBtn button").click(function(){
          $("#nonmemberBG").css({"display":"none"});
     });

     //nonmemberPop 끝

     //findLoginPop 시작

     $("#findPop").click(function(){
          $("#findBG").css({"display":"block"});
          $("#popLoginBG").css({"display":"none"});
     });
     
     $("#findCloseBtn button").click(function(){
          $("#findBG").css({"display":"none"});
     });


     $("button.findTabBtn").click(function(){

          $("button.findTabBtn").css({
               "color":"rgb(107, 107, 107)",
               "border": "1px solid #ccc",
               "background-color": "rgb(228, 228, 228)",
               "border-bottom-color": "#000",
               "z-index":"1"
               
           });
   
           $(this).css({
                "color":"#000",
               "border": "1px solid #000",
               "background-color": "#fff",
               "border-bottom-color": "#fff",
               "z-index":"2"
           });

           var txt = $(this).text();
           var cssAttr;
           var placeholderTxt;

           if (txt == "아이디 찾기") {
               cssAttr = "border-left";
               placeholderTxt = "이메일 또는 아이디";
           } else {
               cssAttr = "border-right";
               placeholderTxt = "가입한 아이디";
           }
   
           $(this).siblings("button").css({
               cssAttr: "none"
               
           });

           if(txt=="비밀번호 찾기"){
           let findBtn=("비밀번호 찾기");
           document.querySelector("#findBtn").innerText=findBtn;
           
          } else {
           let findBtn=("아이디 찾기");
           document.querySelector("#findBtn").innerText=findBtn;
          }

          if(txt=="비밀번호 찾기"){
               let findHeader=("비밀번호 찾기");
               document.querySelector("#headerFind").innerText=findHeader;
              } else {
               let findHeader=("아이디 찾기");
               document.querySelector("#headerFind").innerText=findHeader;
              }

           $("#findUserID").attr("placeholder", placeholderTxt);



     });


     //findLoginPop 끝

});

     //약관 동의 후 가입하기 시작

     function fnAtBtn(){

     let domChkbox= document.getElementById("wholeChk")
     wholeChk=domChkbox.checked;
     //약관동의 체크박스, true/false만 존재함
 
  if (wholeChk==""){ //agree입력란이 공백이라면
         alert("약관 및 개인정보 처리 방침에 동의하셔야 가입이 가능합니다.");   
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


     //login Elseif 시작

     function fnLogBtn(){
          let logId= document.querySelector("#loginID").value;
          logId=logId.trim();

          if(logId==""){
          alert("아이디를 입력 하세요.");
          return;
     }

          let logPw= document.querySelector("#loginPw").value;
          logPw=logPw.trim();
     
          if(logPw==""){
          alert("비밀번호를 입력 하세요.");
          return;
     }
     }



     //login Elseif 끝


     //nonmemberElseif 시작

     function fnIqBtn(){
          let logNfo= document.querySelector("#nfo").value;
          logNfo=logNfo.trim();

          if(logNfo==""){
          alert("주문번호를 입력해주세요");
          return;
     }

          let logAdd= document.querySelector("#address").value;
          logAdd=logAdd.trim();
     
          if(logAdd==""){
          alert("연락처를 입력해주세요");
          return;
     }
     }


     //nonmemberElseif 끝



     
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
               } else{
                    document.querySelector("#idMsg").innerText="";
                    $("#joinID>#idArea").css({
                         "padding-bottom":"5px",
                         "border-color":"#ccc"
                    });
               }

               let domPw= document.querySelector("#pw").value;
               domPw= domPw.trim();
               document.querySelector("#pw").value=domPw;
               $("#joinID>#pwArea").css({
                    "padding-bottom":"5px",
                    "border-color":"#f00",
                    "border-top":"1px solid #f00"
               });

               if(domPw==""){
                    let pwMsg=("비밀번호를 입력 하세요.");
                    document.querySelector("#pwMsg").innerText=pwMsg;
                    document.querySelector("#pw").focus();
                    return;
               }else{
                    document.querySelector("#pwMsg").innerText="";
                    $("#joinID>#pwArea").css({
                         "padding-bottom":"5px",
                         "border-color":"#ccc",
                         "border-top":"none"
                    });
               }

               let domPwRe= document.querySelector("#pwRe").value;
               domPwRe= domPwRe.trim();
               document.querySelector("#pwRe").value=domPwRe;
               $("#joinID>#pwReArea").css({
                    "padding-bottom":"5px",
                    "border-color":"#f00",
                    "border-top":"1px solid #f00"
               });

               if(domPwRe==""){
                    let pwReMsg=("비밀번호를 한번 더 입력 하세요.");
                    document.querySelector("#pwReMsg").innerText=pwReMsg;
                    document.querySelector("#pwRe").focus();
                    return;
               }else{
                    document.querySelector("#pwReMsg").innerText="";
                    $("#joinID>#pwReArea").css({
                         "padding-bottom":"5px",
                         "border-color":"#ccc",
                         "border-top":"none"
                    });
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
               }else{
                    document.querySelector("#uEmailMsg").innerText="";
                    $("#email>#uEmailArea").css({
                         "padding-bottom":"5px",
                         "border-color":"#ccc"
                    });
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
               }else{
                    document.querySelector("#uNameMsg").innerText="";
                    $("#nickname>#uNameArea").css({
                         "padding-bottom":"5px",
                         "border-color":"#ccc"
                    });
               }


     }

     //join Elseif 끝


     //goods 시작

     $(function(){

          $("#goodsMainImg li").mouseover(function(){
           let mainImg= $(this).children().attr("src");
           $("#goodsSlide img").attr("src",mainImg);
          });



     });

     
     //goods 끝