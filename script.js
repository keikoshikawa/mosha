$(function() {
    $('.btn-gNav').on("click", function() {        // js-btnクラスをクリックすると、
      $(this).toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
      $('#gNav , .btn-line , .has-sub').toggleClass('open');
    });
  });
  
$(function(){
  $(".has-sub").hover(function(){      // .has-subボタンをホバーすると
    $(this).children(".sub").slideToggle(200); // .subメニューがスライドで出る(アコーデオン)
  });
});