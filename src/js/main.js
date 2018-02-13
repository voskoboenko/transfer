//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.js
//= ../../bower_components/jquery-mask-plugin/dist/jquery.mask.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.min.js
//= ../../bower_components/round-slider/dist/roundslider.min.js
//= ../../bower_components/wow/dist/wow.min.js
//= ../../bower_components/jquery-ui/jquery-ui.js

new WOW().init();

$('.dropdown li a').click(function(){
  $(this).parent().parent().siblings('button').children('.value').html($(this).html());
});

/*$(function() {
  $( "#datepicker-1" ).datepicker();
  $( "#datepicker-2" ).datepicker();
});*/

$('.numbers').mask('YYYY', {'translation': {
    Y: {pattern: /[0-9]/}
  }
});

$('#feedbacks').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  },
  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
});


$('#carSlider').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    },
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
})