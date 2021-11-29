$(function() {
    $('.btn-gNav').on("click", function() {        // js-btnクラスをクリックすると、
      $(this).toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
      $('#gNav , .btn-line').toggleClass('open');
    });
  });
  
  