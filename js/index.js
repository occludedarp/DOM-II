//* Assignment: Create Unique Event Listeners

//* Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use;

	//* `mouseover`  'Funbus' h1 bounces up and down 
	//* `keydown` p blurs when keydown is used
	//* `wheel`  h2 slightly drifts up when wheel is used
	//* `drag//*//*drop`
	//* `load` 
	//* `focus` 
	//* `resize` 
	//* `scroll` */
	//* `select` 
	//* `dblclick`

//* Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

const logoHeading = document.querySelector('.nav-container .logo-heading');

logoHeading.addEventListener('mouseover', (e) => {
	TweenMax.to(e.target, 3, {
		x:200, 
		ease: Bounce.easeOut, 
		onComplete: () => {
			TweenMax.to(e.target, 3, {
				x:0, 
				ease: Bounce.easeOut
			})
		}
	});
})


const headingImage = document.querySelector('.intro img');
const headingImageContainer = document.querySelector('.intro')

headingImage.addEventListener('dblclick', (e) => {
	TweenMax.from(e.target, 1.5, {
		x:700,
		ease: Elastic.easeOut
	})
})


const imageContainers = document.querySelectorAll('.img-content')
let imageContainersArray = Array.from(imageContainers)

// document.addEventListener('scroll', () => {
// 	TweenMax.to(image, .25, { 
// 		scale: 1.15, 
// 		ease: Power4.easeOut, 
// 		onComplete: () => {
// 			TweenMax.to(image, .5, { 
// 				scale:1, 
// 				ease: Power1.easeOut
// 			})
// 		}
// 	});
// })

imageContainers.forEach( image => {
	document.addEventListener('scroll', () => {
		TweenMax.to(image, .25, { 
			scale: 1.15, 
			ease: Power4.easeOut, 
			onComplete: () => {
				TweenMax.to(image, .5, { 
					scale:1, 
					ease: Power1.easeOut
				})
			}
		});
	})

})

const paragraphText = document.querySelectorAll('h2')

paragraphText.forEach( paragraphTextItem => {
	paragraphTextItem.addEventListener("mouseenter", () => {
	paragraphTextItem.style.transform = "scale(1.2)";
	paragraphTextitem.style.transition = "all 1s"
	})
})

paragraphText.forEach( paragraphTextItem => {
	paragraphTextItem.addEventListener("mouseleave", () => {
	paragraphTextItem.style.transform = "scale(1.0)";
	paragraphTextitem.style.transition = "all 1s"
	})
})


// * Nest two similar events somewhere in the site and prevent the event propagation properly

// * Stop the navigation items from refreshing the page by using `preventDefault()`




