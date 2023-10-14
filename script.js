$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		// windowTop > 100 ? $('ul').css('top','100px') : $('ul').css('top','160px');
	});
	
	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"], button[data-scroll]').on('click', function(e) {
    var target = $(this).attr('href') || $(this).data('scroll');
    if (target) {
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 500);
        e.preventDefault();
    }
	});
	
	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');
		
		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});
	
});

// BACK TO TOP
const backtotoplink = document.getElementById('gotop')
const onScroll = () => {
  const scroll = document.documentElement.scrollTop
  if (scroll > 0) {
    backtotoplink.classList.add("active");
  } else {
    backtotoplink.classList.remove("active")
  }
}
window.addEventListener('scroll', onScroll)