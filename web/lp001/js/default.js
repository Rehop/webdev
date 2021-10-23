
;$(function(){

  "use strict";
  var myCursor	= jQuery('.mouse-cursor');

  if(myCursor.length){
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
  }
  
    /*----------------------------------
  # header sticky 
  -----------------------------------*/

  var activeSticky = $("#active-sticky"),
    winDow = $(window);
  winDow.on("scroll", function () {
    var scroll = $(window).scrollTop(),
      isSticky = activeSticky;
    if (scroll < 1) {
      isSticky.removeClass("is-sticky");
    } else {
      isSticky.addClass("is-sticky");
    }
  });

  
  /*-----------------------------------
  # brand-carousel
  ------------------------------ */

  var brandCarousel = new Swiper(".brand-carousel .swiper-container", {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
      },

      // when window width is >= 640px
      992: {
        slidesPerView: 4,
      },
    },
  });

  /*-----------------------------------
  # brand-carousel
  ------------------------------ */



  
});

