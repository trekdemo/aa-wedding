$(function(){
  $('section:not([data-initial])').hide();
  $('aside').localScroll();

  $('.header-container a').click(function(e){
    var $link = $(this),
        href  = $link.attr('href');

    $('section:visible').fadeOut(300, function(){
      $(href).fadeIn(300);
    });

    $('.header-container nav li').removeClass('active');
    $link.parent().addClass('active');

    e.preventDefault();
  });
});
