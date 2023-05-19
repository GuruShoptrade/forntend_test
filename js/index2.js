var nav_Items = document.getElementsByClassName("nav_Items");
var nav_Item = document.getElementsByClassName("nav_Item");
var main_icon = document.getElementById("main_icon");

$(window).resize(function() {
    if(screen.width > 1023){
        if(nav_Items[0].style.display === "none"){
            nav_Items[0].style.display = "flex";
        }
    }
    else{
        nav_Items[0].style.display = "none";
    }
});


$(document).ready(function(){

    main_icon.onclick = function myFunction() {
        if(nav_Items[0].style.display === "none"){
            nav_Items[0].style.display = "flex";
        }
        else
        {
            alert(screen.width);
            nav_Items[0].style.display = "none";
        }
    }

    for (var i = 0; i < nav_Item.length; i++){
        nav_Item[i].addEventListener("click", myFunction2);
    }

    $('.banner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:'<img class="slick-prev" src="./img/arrow prev.png">',
        nextArrow:'<img class="slick-next" src="./img/arrow next.png">',
        customPaging : function(slider, i) {
            return "<div class='square'></div>";
        },
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    arrows: false,
                }
            }
      ]
    });

    $('.product_images').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:'<img class="slick-prev" src="./img/arrow prev b.png">',
        nextArrow:'<img class="slick-next" src="./img/arrow next b.png">',
        customPaging : function(slider, i) {
            return "<div class='square'></div>";
        },
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    arrows: false,
                }
            }
      ]
    });

    $('.cards').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        arrows: true,
        mobileFirst: true,
        prevArrow:'<img class="slick-prev" src="./img/arrow prev b.png">',
        nextArrow:'<img class="slick-next" src="./img/arrow next b.png">',
        mobileFirst:true,
        responsive: [
            {
                breakpoint: 1204,
                settings: {
                    slidesToShow: 4,
                    arrows: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
      ]
    });

});



function update_price(value) {
    switch (value) {
        case '30':
            update_text(30);  
            break;
        case '60':
            update_text(60);  
            break;        
        case '90':
            update_text(90);  
            break;
    }
}

function update_text(value) {
    document.getElementById("offer_price_value").innerText = "$"+ value + " USD";
    document.getElementById("price_value").innerText = "$"+ value*2 + " USD";
}

function handleMinus(){
    if(document.getElementById("qty").value > 0)
        document.getElementById("qty").value--;
}

function handlePlus(){
    document.getElementById("qty").value++;
}

function playVideo() {
    var video = document.getElementById('video_player');
    if(video.paused){
        video.play();
        document.getElementById('play_btn').style.display = "none";
        document.getElementById('pause_btn').style.display = "block";
    }
    else
    {        
        video.pause();
        document.getElementById('play_btn').style.display = "block";
        document.getElementById('pause_btn').style.display = "none";
    }
}

function myFunction2() {
    if(screen.width < 1023){
        nav_Items[0].style.display = "none";
    }
}


$(document).ready(function() {
    var $slider = $('.row_2');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
});