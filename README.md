# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github Link](https://github.com/samoina/faq-accordion-card-JS)
- Live Site URL: [Netlify Link](samoina-faq-card-js.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### Centering an absolute positioned element

This challenge reminded me how to center an absolute position element using CSS, with the knowledge that absolute positioned elements are typically removed from the normal flow of the document. So I added a relative position to the parent container, in this case, the `main` element. I then moved it up from the top border of the parent using the property top, and adjusted the left and right to 0 before adding auto to the left and right margin setting. Here's the CSS code snippet.

```css
.main__image {
	height: 12rem;
	position: absolute;
	top: -25%;
	left: 0;
	right: 0;
	margin: 0 auto;
}
```

#### Using event delegation to flip the arrow and show the answer to the question.

With the way I have structured my code, my initial approach was to loop through the NodeList containing the immeadiate parent, and add an event listener to each at the point of iteration. I would then check if the targetted element has a class that contains the icon, and if so, loop through the Nodelist containing all the icons before toggling the class. This, however, did not work as expected as the click changed ALL of the icons. I then realized i shouldn't loop through the icons.

```js
let faqQues = document.querySelectorAll('.faq__ques'),
	faqIcons = document.querySelectorAll('.faq__icon');

faqQues.forEach((faq) => {
	faq.addEventListener('click', (ev) => {
		if (ev.target.classList.contains('faq__icon')) {
			faqIcons.forEach((faqIcon) => {
				faqIcon.classList.toggle('faq__icon--flip');
			});
		}
	});
});
```

So i adjusted my code and aded a single event listener to the main parent of all the divs (main). When a click event occurs, I use the .closest() method to traverse the element and its parents towards the document root until it finds a node that matches the specified selector. In my case (.faq--ques), and then used the query selector to get the specific icon in that specific element. I then toggle the class for functionality.

```js
let faqQues = document.querySelectorAll('.faq__ques'),
	mainFAQ = document.querySelector('.main__faq');

mainFAQ.addEventListener('click', (event) => {
	const faqIcon = event.target
		.closest('.faq__ques')
		.querySelector('.faq__icon');

	if (faqIcon) {
		faqIcon.classList.toggle('faq__icon--flip');
	}
});
```

### Continued development

I am keen to repeat this project using ReactJS.

### Useful resources

- [Center an absolute element with CSS ](https://www.freecodecamp.org/news/how-to-center-an-absolute-positioned-element/) - This helped me to understand positioning and centering of absolute elements
- [CSS Tricks - Flip an Image](https://css-tricks.com/snippets/css/flip-an-image/)

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
