$(document).ready(function() {

$nav=$('.nav');
$toggleCollapse=$('.toggleCollapse');

// click event on toggle menu
$toggleCollapse.click(function(){
	$nav.toggleClass('nav-items');
	console.log('jkdfcjknkjfnc');

});


// owl-crousel for blog
$('.owl-carousel').owlCarousel({
	loop:true,
	autoplay:true,
	autoplayTimeout:3000,
	dots:false,
	nav:true,
	navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
});

// move up
$('.move-up span').click(function(){
	$('html,body').animate({
		scrollTop:0
	},3000);
})

});

const newsLetter = document.querySelector("#advert");
const closeLetter = document.querySelector("#close");

const showLetter = () => {
	newsLetter.style.display = "block";
};

setTimeout(showLetter, 10000);

closeLetter.addEventListener("click" , () => {
	newsLetter.style.display = "none" ;
});