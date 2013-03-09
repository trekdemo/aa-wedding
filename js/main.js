$(function(){
  $('section:not([data-initial])').hide();

  $('.header-container a').click(function(e){
    var $link = $(this),
        href  = $link.attr('href');

    $('section').hide();
    $(href).show();

    $('.header-container nav li').removeClass('active');
    $link.parent().addClass('active');

    e.preventDefault();
  });
});
