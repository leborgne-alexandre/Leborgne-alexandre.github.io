$(document).ready(function(){

$('.contact2').mouseenter(function(){

  $('.tel').show()
})

  $('.contact2').mouseleave(function(){

    $('.tel').hide()

  })

})



$(document).ready(function(){

$('.hover1').mouseenter(function(){

  $('.stealth').show()
})

  $('.hover1').mouseleave(function(){

    $('.stealth').hide()

  })

})
$(document).ready(function(){

$('.hover2').mouseenter(function(){

  $('.stealth2').show()
})

  $('.hover2').mouseleave(function(){

    $('.stealth2').hide()

  })

})
$(document).ready(function(){

$('.hover3').mouseenter(function(){

  $('.stealth3').show()
})

  $('.hover3').mouseleave(function(){

    $('.stealth3').hide()

  })

})
$(document).ready(function(){

$('.hover4').mouseenter(function(){

  $('.stealth4').show()
})

  $('.hover4').mouseleave(function(){

    $('.stealth4').hide()

  })

})


$(function(){

    $(".navbar a, footer a").on("click", function(event){

        event.preventDefault();
        var hash = this.hash;

        $('body,html').animate({scrollTop: $(hash).offset().top} , 900 , function(){window.location.hash = hash;})

    });

})
