let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
    for (let item of alertClose ) {
        item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
        })
}

$('.header__main-slider').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    appendDots: $('.header__slider-blog .header__slider-number'),
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header__gallery-slider',
    responsive: [{
        breakpoint: 450,
        settings: {
          asNavFor: false,
      }
    }] 
})

$('.header__gallery-slider').slick({
    autoplay: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $('.header__slider-blog .slider_arrow'),
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick_arrow slick_prev">предыдущий</button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next">следующий</button>',
    asNavFor: '.header__main-slider',
    responsive: [{
        breakpoint: 450,
        settings: {
          asNavFor: false,
      }
    }] 
})

/* прокрутка цифр в каруселе*/

    // header-wrapper slider count

    if( $('.header__main-slider').hasClass('slick-slider') ){
        var total_count = $('.header__slider-blog').find('.news__slide-img').children('li').length;
  
        $('.header__slider-blog').find('.header__slider-current').text("01");
        $('.header__slider-blog').find('.header__slider-total').text("0" + total_count);
      }
  
      $('.header__main-slider').on("afterChange", function(){
        var count = $('.header__slider-blog').find('.slick-dots').children('li.slick-active').index();
        count++;
        $('.header__slider-blog').find('.header__slider-current').text("0" + count);
      });
  
// Main slider count END

$(function(){
    $('input[type="tel"]').click(function(){
        $(this).setCursorPosition(3);
    }).mask("+7 (999) 999 99 99");
    
    $.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
    };
})

//burger-menu 


//sub-menu 

let hamb = document.querySelector(".burger")
let headerMenu = document.querySelector(".header__nav-items")

if(hamb) {
    hamb.addEventListener("click", function (event) {
    document.body.classList.toggle('lock');
    hamb.classList.toggle("burger__active");
    headerMenu.classList.toggle("header__nav-items__active")
});
}

$('.header__nav-item a').on("click", function(){
    // if( $('.burger').css('display') == 'block' ){
      if( $(this).hasClass('active') ){
        $(this).removeClass('active');
        $(this).siblings('.sub-menu').slideUp();
      } else{
        $(this).addClass('active');
        $(this).siblings('.sub-menu').slideDown();
      }
    // }
});


$('.sub-menu__first').on("click", function(){
    if($(this).hasClass('active') ){
        $(this).removeClass('active');
    } else{
        $(this).addClass('active');
    }
});

$(window).resize(function(){
    if( $('.burger').css('display') == 'block' ){
        $('.sub-menu').hide();
    }
    else{
        $('.sub-menu').show();
    }
});

let headerArrows = document.querySelectorAll('.header__nav-arrow')
if(headerArrows.length > 0) {
    for(let index = 0; index < headerArrows.length; index++) {
        const headerArrow = headerArrows[index];
        headerArrow.addEventListener('click', function(e) {
            headerArrow.parentElement.classList.toggle('active')
        })
    }
}



//Accardeon

const faqs = document.querySelectorAll('.service__item-headline')
faqs.forEach((faq) => {
    faq.addEventListener('click', (e) => {
        faq.parentElement.classList.toggle('active')
    });
});

// const downs = document.querySelectorAll('.tabs__item')
// faqs.forEach((down) => {
//     down.addEventListener('click', (e) => {
//         down.parentElement.classList.toggle('active')
//     });
// });


const ups = document.querySelectorAll('.up')
ups.forEach((up) => {
    up.addEventListener('click', () => {
        up.classList.toggle('active');
    });
});


$(function() {
	var tab = $('.tabs-contentbox > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('.tabs__item').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tabs__item').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();

	// Клики по якорным ссылкам.
	$('.tabs-target').click(function(){
		$('.tabs__item[href=' + $(this).attr('href')+ ']').click();
	});
	
});

//Pop-up1

const openPopUp = document.getElementsByClassName('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

if(openPopUp?.length) {
    for(let i = 0; i < openPopUp.length; i++) {
        openPopUp[i].addEventListener('click', function(e) {
            e.preventDefault();
            popUp.classList.add('active');

        })
    }
}

if(closePopUp) {
    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('active');
    })
}

// //slider

    function slidesPlugin(activeSlide = 0) {
        const slides = document.querySelectorAll('.slide');
        if(!slides?.length) return;
        slides[activeSlide].classList.add('active');

            for(const slide of slides) {
                slide.addEventListener('click', () => {
                    clearActiveClasses()
                    slide.classList.toggle('active')
                })
            }

        function clearActiveClasses() {
            slides.forEach((slide) => {
                slide.classList.remove('active')
            })
        }
    }

    slidesPlugin();



let newPrice = document.getElementById('newPrice');
let oldPrice = document.getElementById('oldPrice');

if (newPrice?.innerHTML) {
    oldPrice.classList.add('line');
}


// scroll
let lastScroll = 0;
const defaultOffset = 100;
const header = document.querySelector('header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header-fixed');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('header-fixed');
    }
    else if(scrollPosition() < lastScroll && containHide() && scrollPosition() < defaultOffset) {
        header.classList.remove('header-fixed');
    }
    lastScroll = scrollPosition();
})


const fileLabel = document.querySelector('.application__download');
const fileInput = document.querySelector('.upload-file__input');
let fileText = document.querySelector('.application__download-text');
if(fileLabel) {
    fileLabel.addEventListener('click', (event) => {
        fileInput.click();
    });
    
    fileInput.addEventListener('change', (event) => {
        console.log('fileInput', fileInput);
        if (event.target.files?.length) {
            fileText.innerHTML = event.target?.files[0]?.name;
        } else {
            fileText.innerHTML = 'прикрепить документ';
        }
    })
}






  



