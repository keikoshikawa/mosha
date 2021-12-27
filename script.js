// ハンバーガーボタンの設定
$(function() {
    $('.btn-gNav').on("click", function() {      
      $('.btn-gNav , #gNav , .btn-line').toggleClass('open'); 
      $('#gNav').slideToggle(230);
    });
  });

 // アコーディオンメニューの設定 
$(function(){
  $(".has-sub").hover(function(){      // .has-subボタンをホバーすると
    $(this).children(".sub").stop().slideToggle(230); // .subメニューがスライドで出る
  });
});

// 画面をリサイズした時の処理
/*
  $(window).on('resize', function () { 
    if (window.matchMedia('(min-width:1200px)').matches) { 
    /*  if ($(".btn-gNav").hasClass("open")) {  // ナビが開いていたら
    $("#gNav").removeClass('open');
    $("#gNav").slideUp();  
    $(".btn-gNav").removeClass('open'); // ハンバーガーアイコンを元に戻す
   } 
    });
  */
    $(window).on('load resize', function(){ 
      if($(window).innerWidth() < 1200 ){
        $('#gNav').hide();//1200より小さい時はnavを非表示にしておく
      }else{
      //1200以上の状態
        $('#gNav').show();
        $(".btn-gNav").removeClass('open');
      };
       }); 