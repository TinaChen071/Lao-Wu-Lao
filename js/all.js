// $(document).ready(function () {
//     $(".profileIcon").hover(function (e) { 
//         $('.profileMenu').toggle();
//     });
//  });

$(document).ready(function () {
    $(".mobileMenu").click(function (e) { 
        $('.mobile-menu').toggle();
    });
 });
 $(window).resize(function() {
  if(screen.width>768) {
    $('.mobile-menu').hide();
  }
}); 

// arrow icon
// $(document).ready(function () {
//   $('.mainMenu > li > a').click(function (e) { 
//         $(".arrow").toggleClass("active");
//     });
//  });

 // mobile navbar
$(document).ready(function() {
  $('.mainMenu > li > a').click(function(event) {
    
     event.preventDefault();
      
     $(this).parent().siblings().find('ul').slideUp();
     // 將 this 以外的全部隱藏 > 找到父元素 > 找到 ul 關閉
     $(this).parent().find('ul').slideToggle();
        // 找出自己的 ul 做摺疊效果  
   });
});
$(document).ready(function () {
  $('.mainMenu > li > ul > li > a').click(function(event) {
    
    event.preventDefault();
     
    $(this).parent().siblings().find('ul').slideUp();
    // 將 this 以外的全部隱藏 > 找到父元素 > 找到 ul 關閉
    $(this).parent().find('ul').slideToggle();
       // 找出自己的 ul 做摺疊效果  
  });
});
// $(document).ready(function () {
//     $(".ddd").mouseenter(function () {
//         $('.mobile__menu--hover').removeClass('hidden');
//         }
//     );
//     $(".mobile__menu--hover").mouseout(function () {
//         $('.mobile__menu--hover').addClass("hidden");
//         }
//     );
//  });

// modal
// $(function(){

//     $('#modal__btn').on('click',function(){
//         $(".modal").removeClass("hidden");
//     });
    
//     $('.js-modal-close').on('click',function(){
//         $(".modal").addClass("hidden");
//     });

//     // 點畫面外
//     $("body").on('click',function(){
//         $(".modal").toggle();
//       });
//   });
// 點擊畫面外關閉
  $("body").click(function(){
    $(".modal").hide();
    $(".modal-favorite").hide();
  });

   
  // 點擊DIV時、不向上層冒泡。
  $(".modal__btn").click(function(e){
    e.stopPropagation();
  });
   
  // 點擊按鈕時顯示或隱藏DIV
  $(".modal__btn").click(function(e){
    e.stopPropagation();
    $(".modal").toggle();
  });
  // 加入收藏
  $(".modal__fav__btn").click(function(e){
    e.stopPropagation();
    $(".modal-favorite").toggle();
  });

// superfish menu
$(document).ready(function(){
    $("ul.sf-menu").superfish({
      hoverClass:  'sfHover', //當滑鼠掠過時的class
      pathClass:   'overideThisToUse', // 啟用的選單項的class
      pathLevels:  1,    // 選單級數
      delay:     800,    // 下拉選單在滑鼠離開時自動隱藏時間。預設是800毫秒
      animation:   {opacity:'show'}, // 動畫效果，參考Jquery的動畫jQuery's .animate()
      speed:     'normal',  // 動畫速度， 參考Jquery的動畫jQuery's .animate()
      dropShadows:  true,   // 陰影效果，關閉用‘false'
      onInit:    function(){},  // 初始化的回撥函式
      onBeforeShow: function(){}, // 子選單顯示前回調函式
      onShow:    function(){}, // 子選單顯示時回撥函式
      onHide:    function(){}  // 子選單隱藏時回撥函式
    });
   });


// Swiper
$(document).ready(function () {
    
      const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

     // auto play
      autoplay: {
      delay: 3000,
      },

      // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    });
    
});

// Sub Product Sort
$("#menu-button").click(function(e){
  e.stopPropagation();
  $("#drop-menu").toggle();
});

// Sub Product Sort 點擊畫面外關閉
$("body").click(function(){
  $("#drop-menu").hide();
});

// select img
var main = document.querySelector(".main"),
    big = main.querySelector(".big"),
    smalls = main.querySelectorAll(".each")
big.setAttribute("src",smalls[0].getAttribute("src"))
smalls.forEach(each=>{
    each.onclick = function(){
        smalls.forEach(ss=>ss.classList.remove("active"))
        each.classList.add("active")
        big.setAttribute("src",each.getAttribute("src"))
    }
})

// 折疊選單
$(document).ready(function () {
  $('.question h3').click(function (e) { 

      $(this).toggleClass('active');
      // 讓點擊到的 h3 亮起來，其他h3移除active樣式

      $(this).parent().find('div').slideToggle();
      // 讓點擊到的 h3找到父元素 .question ，再找裡面的 P 判斷收闔

      $(this).parent().siblings().find('div').slideUp();
      // 自己以外的 p 隱藏起來

      
  });

  $('.question h3').click(function (e) { 

    $('.more').toggle();
    
    $(this).parent().siblings().find('.more').toggle();
    // 自己以外的 h3 移除 active 樣式
});

  // .find() 可選擇符合特定條件的內層元素，所以可以透過 .parent() 選取到外層元素後，再選取特定條件的內層元素。
});

// 購物車2 mobile overlay
$("#mobile__summary__btn").click(function(e){
  e.stopPropagation();
  $("#mobile__summary__overlay").toggle();
});

// 超商取貨 BTN









