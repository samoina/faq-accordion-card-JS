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

### Continued development

I am keen to repeat this project using ReactJS.

### Useful resources

- [Center an absolute element with CSS ](https://www.freecodecamp.org/news/how-to-center-an-absolute-positioned-element/) - This helped me to understand positioning and centering of absolute elements
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
