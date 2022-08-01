burger = document.querySelector('.header__burger')
menu = document.querySelector('.header__burger-menu')

burger.onclick = function(){
	menu.classList.toggle('active')
}

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
});