//* Assignment: Create Unique Event Listeners

//* Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use;

	//* `mouseover`  'Funbus' h1 bounces up and down 
	//* `keydown` p blurs when keydown is used
	//* `wheel`  h2 slightly drifts up when wheel is used
	//* `drag//*//*drop`
	//* `load` 
	//* `focus` 
	//* `resize` 
	//* `scroll` 
	//* `select` 
	//* `dblclick`

//* Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * Nest two similar events somewhere in the site and prevent the event propagation properly

// * Stop the navigation items from refreshing the page by using `preventDefault()`

const logoHeading = document.querySelector('.nav-container .logo-heading');

logoHeading.addEventListener('mouseover', (e) => {
	console.log('it\'s working')
})