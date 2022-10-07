

! function() {
	"use strict";
	var t, r, n, a, o, l, e;
	null != (r = document.querySelector(".navbar-sticky")) && (r.classList, t = r.offsetHeight, window.addEventListener("scroll", function(e) {
			r.classList.contains("position-absolute") ? 500 < e.currentTarget.pageYOffset ? r.classList.add("navbar-stuck") : r.classList.remove("navbar-stuck") : 500 < e.currentTarget.pageYOffset ? (document.body.style.paddingTop = t + "px", r.classList.add("navbar-stuck")) : (document.body.style.paddingTop = "", r.classList.remove("navbar-stuck"))
		})), e = document.querySelector(".navbar-stuck-toggler"), n = document.querySelector(".navbar-stuck-menu"), null != e && e.addEventListener("click", function(e) {
			n.classList.toggle("show"), e.preventDefault()
		}),
	
	function() {
			for (var o = document.querySelectorAll('[data-bs-toggle="select"]'), e = 0; e < o.length; e++) ! function(e) {
				for (var t = o[e].querySelectorAll(".dropdown-item"), r = o[e].querySelector(".dropdown-toggle-label"), n = o[e].querySelector('input[type="hidden"]'), a = 0; a < t.length; a++) t[a].addEventListener("click", function(e) {
					e.preventDefault();
					e = this.querySelector(".dropdown-item-label").innerText;
					r.innerText = e, null !== n && (n.value = e)
				})
			}(e)
		}()
}();




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


