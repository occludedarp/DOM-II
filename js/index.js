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

const logoHeadingContainer = document.querySelector('.container .nav-container'); 

// logoHeading.style.position = 'absolute';
// logoHeadingContainer.style.position = 'relative';

logoHeading.addEventListener('mouseover', () => {
	var horPos = 0;
	var pos = 0;
	var intervalId = setInterval(frame, 5); //* run(this function, every 5 ms)
	function frame() {
	  if (pos == 300 ){
		logoHeading.style.paddingTop = pos + 'px';
		logoHeading.style.paddingLeft = pos + 'px';
		// clearInterval(intervalId);
		// pos--;
		// logoHeading.style.paddingTop = pos + 'px';  //* set this style prop to pos
		// logoHeading.style.paddingLeft = pos + 'px';
	  } else {
		pos++; 	
		horPos+2.3;							 //* add 1 to pos
		logoHeading.style.paddingTop = pos + 'px';  //* set this style prop to pos
		logoHeading.style.paddingLeft = pos + 'px'; //* set this style prop to pos
	  }
	}

})


// const paragraphs = document.querySelectorAll(' mouseover')
