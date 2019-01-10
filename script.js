// GLOBALNE VARIJABLE
var navbar = document.getElementById('navbar')
var site = document.querySelector('main')
var siteWidth
var siteHeight
var difference


// SWIPER
var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
    },
})

if ( window.innerWidth <= 768 ) {
	navbar.classList.add('scrolled')
	for ( var k = 0; k < document.getElementsByClassName('link').length; k++ ) {
		document.getElementsByClassName('link')[k].addEventListener('click', function(){
			document.querySelector('.dropdown-trigger').classList.remove('active')
			document.querySelector('.nav').classList.remove('active')
		})
	}
}

// ONLOAD FUNKCIJE
window.onload = function () {
	window.scrollTo(0,0)
}
setTimeout(function(){
	siteWidth = window.innerWidth
	siteHeight = document.body.offsetHeight - window.innerHeight
	difference = siteWidth / siteHeight
	document.getElementById('overlay').style.opacity = "0"
}, 1000)
setTimeout(function(){
	document.querySelector('.h1').classList.add('active')
	document.querySelector('.h3').classList.add('active')
	navbar.classList.remove('inactive')
	document.getElementById('overlay').style.display = "none"

}, 1500)


// AKORIDIONI SEKCIJE PITANJA/ODGOVORI
for (var q = 0; q < document.getElementsByClassName('question').length; q++) {
	document.getElementsByClassName('question')[q].addEventListener('click', function(){
		var question = document.getElementsByClassName('question')[q]
		for ( var z = 0; z < document.getElementsByClassName('answer').length; z++ ) {
			document.getElementsByClassName('answer')[z].classList.remove('active')
		}
		for ( var f = 0; f < document.getElementsByClassName('question').length; f++ ) {
			document.getElementsByClassName('question')[f].classList.remove('active')
		}
		this.classList.add('active')
		this.nextElementSibling.classList.add('active')
	})
}


// KONSTRUISANJE GALERIJE
var string = ""
document.querySelector('.gallery-trigger').addEventListener('click', function(){
	var imageList = document.getElementById('image-list')
	string = "<a data-fancybox='gallery' href='images/img1.jpg'></a><a data-fancybox='gallery' href='images/img2.jpg'></a><a data-fancybox='gallery' href='images/img3.jpg'></a>"
	imageList.innerHTML = string
	imageList.children[0].click()
})


// SVE U VEZI MODALA/OVERLAY
document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        for (var h = 0; h < document.getElementsByClassName('overlay').length; h++) {
        	document.getElementsByClassName('overlay')[h].classList.remove('active')
        }
    }
}
for (var h = 0; h < document.getElementsByClassName('overlay').length; h++) {
	document.getElementsByClassName('overlay')[h].addEventListener('click', function(e){
		if ( e.target != this.children[1] || e.target == this.children[0] ) {
			this.classList.remove('active')
		}
	})
}
for (var r = 0; r < document.getElementsByClassName('map-trigger').length; r++) {
	document.getElementsByClassName('map-trigger')[r].addEventListener('click', function(){
		mapVal = this.getAttribute('data-value')
		document.querySelector("."+ mapVal +"").classList.add('active')
	})
}


// SVI ON SCROLL HANDLERI
window.addEventListener('scroll', function(){
	for ( var i = 0; i < document.getElementsByClassName('section').length; i ++ ) {
		var sec = document.getElementsByClassName('section')[i]
		var pageBottom = window.innerHeight + window.pageYOffset
		var elemHeight = sec.clientHeight / 1.3
		if ( window.innerWidth > 768 ) {
			var siteTop = window.pageYOffset
			if ( siteTop > 30 ) {
				site.classList.add('active')
				navbar.classList.add('scrolled')
			} else {
				navbar.classList.remove('scrolled')
				site.classList.remove('active')
			}
			if ( window.innerWidth < 1366 ) {
				elemHeight = sec.clientHeight / 2
			}
			if ( pageBottom >= sec.offsetTop + elemHeight ) {
				sec.classList.add('active')
				var secVal = sec.children[0].getAttribute('data-value')
				
			} else {
				sec.classList.remove('active')
			}
			if ( document.querySelector('.gallery').classList.contains('active') ) {
				document.querySelector('.gym').classList.add('font-color')
			} else {
				document.querySelector('.gym').classList.remove('font-color')
			}
			for ( var v = 0; v < document.getElementsByClassName('link').length; v++ ) {
				document.getElementsByClassName('link')[v].classList.remove('active')
				if ( secVal == undefined ) {
					document.querySelector('.home-logo').classList.add('active')
				} else {
					document.querySelector('.home-logo').classList.remove('active')
					document.querySelector("."+secVal+"").classList.add('active')
				}
			}
			document.getElementById('progress').style.width = ""+difference * siteTop+"px"
		} else {
			sec.classList.add('active')
			navbar.classList.add('scrolled')
		}
	}
})


// DROPDOWN TRIGGER
document.querySelector('.dropdown-trigger').addEventListener('click', function(){
	if ( this.classList.contains('active') && document.querySelector('.nav').classList.contains('active') ) {
		this.classList.remove('active')
		document.querySelector('.nav').classList.remove('active')
	} else {
		this.classList.add('active')
		document.querySelector('.nav').classList.add('active')
	}
})