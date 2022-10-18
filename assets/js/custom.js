




$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
  $('.slider1').owlCarousel({
		loop:true,
			margin:30,
			nav:false,
			mouseDrag: true,
			items:1,
			dots: false,
			autoHeight: true,
			autoplay: false,
			smartSpeed:1500,
			autoplayHoverPause: true,
			
		
    responsive:{
        0:{
					items:3,
				},
				576:{
					items:2,
				},
				768:{
					items:3,
				},
				1200:{
					items:9,
				}
    }
})
});



$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
  $('.product_tab_1').owlCarousel({
		loop:true,
			margin:15,
			nav:false,
			mouseDrag: true,
			items:1,
			dots: false,
			autoHeight: true,
			autoplay: false,
			smartSpeed:1500,
			autoplayHoverPause: true,
			
		
    responsive:{
        0:{
					items:2,
				},
				576:{
					items:2,
				},
				768:{
					items:3,
				},
				1200:{
					items:7,
				}
    }
})
});

//product vew 
    (function () {
            var c = document.querySelectorAll(".product-gallery");
            if (c.length)
                for (var e = 0; e < c.length; e++) ! function(r) {
                    for (var n = c[r].querySelectorAll(".product-gallery-thumblist-item:not(.video-item)"), a = c[r].querySelectorAll(".product-gallery-preview-item"), e = c[r].querySelectorAll(".product-gallery-thumblist-item.video-item"), t = 0; t < n.length; t++) n[t].addEventListener("click", o);

                    function o(e) {
                        e.preventDefault();
                        for (var t = 0; t < n.length; t++) a[t].classList.remove("active"), n[t].classList.remove("active");
                        this.classList.add("active"), c[r].querySelector(this.getAttribute("href")).classList.add("active")
                    }
                    for (var l = 0; l < e.length; l++) lightGallery(e[l], {
                        selector: "this",
                        download: !1,
                        videojs: !0,
                        youtubePlayerParams: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0,
                            controls: 0
                        },
                        vimeoPlayerParams: {
                            byline: 0,
                            portrait: 0,
                            color: "fe696a"
                        }
                    })
                }(e)
        }(),
        function() {
            for (var e = document.querySelectorAll(".image-zoom"), t = 0; t < e.length; t++) new Drift(e[t], {
                paneContainer: e[t].parentElement.querySelector(".image-zoom-pane")
            })
      })();
	
	
	var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 5,
        },
    },
  });
	
	
	
	//store product slider 1
	
$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
  $('.store_product_slider_1').owlCarousel({
		loop:true,
			margin:10,
			nav:false,
			loop: true,
			mouseDrag: true,
			
			dots: false,
			autoHeight: true,
			autoplay: false,
			smartSpeed:1500,
			autoplayHoverPause: true,
			
		
 responsive:{
        	  0:{
					items:1.4,
				},
				576:{
					items:1,
				},
				768:{
					items:5,
				},
				1200:{
					items:4,
				}
    }

});

	var owl = $('.store_product_slider_1');
owl.owlCarousel();

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn').click(function() {
  
    owl.trigger('prev.owl.carousel', [300]);
	})

   });
	//store product slider 1

//store product slider 2
$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
  $('.store_product_slider_2').owlCarousel({
		loop:true,
			margin:10,
			nav:false,
			loop: true,
			mouseDrag: true,
			
			dots: false,
			autoHeight: true,
			autoplay: false,
			smartSpeed:1500,
			autoplayHoverPause: true,
			
		
 responsive:{
        	  0:{
					items:1.4,
				},
				576:{
					items:1,
				},
				768:{
					items:5,
				},
				1200:{
					items:4,
				}
    }

});

	var owl = $('.store_product_slider_2');
owl.owlCarousel();

$('.customNextBtn2').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn2').click(function() {
  
    owl.trigger('prev.owl.carousel', [300]);
	})

   });

//store product slider 2

//store product slider 3
$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
  $('.store_product_slider_3').owlCarousel({
		loop:true,
			margin:10,
			nav:false,
			loop: true,
			mouseDrag: true,
			
			dots: false,
			autoHeight: true,
			autoplay: false,
			smartSpeed:1500,
			autoplayHoverPause: true,
			
		
 responsive:{
        	  0:{
					items:1.4,
				},
				576:{
					items:1,
				},
				768:{
					items:5,
				},
				1200:{
					items:4,
				}
    }

});

	var owl = $('.store_product_slider_3');
owl.owlCarousel();

$('.customNextBtn3').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn3').click(function() {
  
    owl.trigger('prev.owl.carousel', [300]);
	})

   });
//store product slider 3

//store product slider 4
$(document).ready(function(){
 // $(".owl-carousel").owlCarousel();
  $('.store_product_slider_4').owlCarousel({
		loop:true,
			margin:10,
			nav:false,
			loop: true,
			mouseDrag: true,
			
			dots: false,
			autoHeight: true,
			autoplay: false,
			smartSpeed:1500,
			autoplayHoverPause: true,
			
		
 responsive:{
        	  0:{
					items:1.4,
				},
				576:{
					items:1,
				},
				768:{
					items:5,
				},
				1200:{
					items:4,
				}
    }

});

	var owl = $('.store_product_slider_4');
owl.owlCarousel();

$('.customNextBtn4').click(function() {
    owl.trigger('next.owl.carousel');
})

$('.customPrevBtn4').click(function() {
  
    owl.trigger('prev.owl.carousel', [300]);
	})

   });

//store product slider 4



