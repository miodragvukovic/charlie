// $(document).ready(function(){
	// var controller = new ScrollMagic.Controller()
// 	// $('.container').each(function(){
// 	// 	new ScrollMagic.Scene({
// 	// 		triggerElement: this,
// 	// 		triggerHook: 0.4,
// 	// 		duration: 250,
// 	// 	})
// 	// 	.setPin(this)
// 	// 	.setTween(this, {opacity: 1})
// 	// 	// .addIndicators()
// 	// 	.addTo(controller)
// 	// 	new ScrollMagic.Scene({
// 	// 		triggerElement: this,
// 	// 		triggerHook: 0.4,
// 	// 		duration: 250,
// 	// 		offset: 250
// 	// 	})
// 	// 	.setPin(this)
// 	// 	.setTween(this, {opacity: 0})
// 	// 	// .addIndicators()
// 	// 	.addTo(controller)
// 	// })
// var tlMain = new TimelineMax()
// 	tlMain
// 	.fromTo('.container-nav', .5, {y: -120, ease: Power1.easeOut}, {y: 0})
// 	tlMain.delay(0.3)

var introStructure = new TimelineMax()
	introStructure
	// .to('.topline-1', .1, {width: "100%"})
	// .to('.topline-2', .1, {width: "100%"})
	// .to('.topline-3', .1, {width: "100%"})
	// .to('.topline-4', .1, {width: "100%"})

	.staggerTo('.topline', 0.2, {width: "100%"}, .15, "stagger")
	.to('.bottomline-2', .1, {width: "100%"})
	.to('.bottomline-1', .1, {width: "100%"})
	introStructure.delay(0.3)
var introStructureText = new TimelineMax()
	introStructureText
	.to('.link-1', .3, {opacity: 1}, 0.2)
	.to('.menu', .3, {opacity: 1}, 0.2)
	.to('.link-2', .3, {opacity: 1}, 0.2)
	// .to('#title', .3, {scale: 1, top: "100%"})
	// .to('#title', .3, {})
	// .to('.topline-1', .1, {width: "100%"})
	// .to('.topline-2', .1, {width: "100%"})
	// .to('.topline-3', .1, {width: "100%"})
	// .staggerTo('.structure-top a', 0.8, {opacity: 1}, 0.2, "stagger")
	// introStructureText.delay(0.1)
	
// 	.to('.menu', .1, {opacity: 1}, '-=0.8')
// 	// introStructure.delay(0.38





	// tl.pause()
// $(window).scroll(function(){
// 	if ( $(window).scrollTop() > 50 ) {
// 		$('.container-nav').addClass('navbar-active')
// 	} else {
// 		$('.container-nav').removeClass('navbar-active')
// 	}
// })
// document.getElementById('carret').addEventListener('click', function(){
// 	if (this.classList.contains('active')) {
// 		tl.reverse()
// 		this.classList.remove('active')
// 	} else {
// 		tl.play()
// 		this.classList.add('active')
// 	}
// })
	// new ScrollMagic.Scene({
	// 	triggerElement: ".container-nav",
	// 	triggerHook: 0,
	// 	duration: 250,
	// 	// offset: 90
	// })
	// .setPin(".container-nav")
	// .setTween(".navbar", {padding: "10px 0"})
	// .addIndicators()
	// .addTo(controller)
// var cursorMovement = document.querySelector(".bg-filter");
// function onMouseMove(event) {
//   cursorMovement.style.backgroundImage = 'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, transparent 0, rgba(0,0,0,.97) 5%)'; }
// document.addEventListener("mousemove", onMouseMove);