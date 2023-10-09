//I discarded this initial approach because it caused the page to span downwards when I clicked the downward arrow by expanding multiple answer questions at the same time. I needed to find a way to deactivate the classes if there was another active class hence the second approach.

// let mainFAQ = document.querySelector('.main__faq'),
// 	faqAnswers = document.querySelectorAll('.faq__answer'),
// 	faqIcons = document.querySelectorAll('.faq__icon');

// mainFAQ.addEventListener('click', (event) => {
// 	const faqIcon = event.target
// 		.closest('.faq__ques')
// 		.querySelector('.faq__icon');

// 	if (faqIcon) {
// 		faqIcon.classList.toggle('faq__icon--flip');
// 		const faqAnswer =
// 			faqIcon.parentElement.parentElement.querySelector('.faq__answer');

// 		faqAnswer.classList.toggle('faq__answer--hide');
// 	}
// });

let mainFAQ = document.querySelector('.main__faq'),
	faqQues = document.querySelector('.faq__ques');

mainFAQ.addEventListener('click', (event) => {
	const clickedIcon = event.target.closest('.faq__ques');
	const faqIcons = document.querySelectorAll('.faq__icon');
	const faqAnswers = document.querySelectorAll('.faq__answer');

	if (clickedIcon) {
		//this is for toggling the icon class for the clicked question
		const clickedIconElement = clickedIcon.querySelector('.faq__icon');
		clickedIconElement.classList.toggle('faq__icon--flip');

		//toggle the answer for visibility for the clicked question by getting the parent element two levels up
		const clickedAnswer =
			clickedIconElement.parentElement.parentElement.querySelector(
				'.faq__answer'
			);
		clickedAnswer.classList.toggle('faq__answer--show');

		// Remove the active status from the other answers and icons
		faqAnswers.forEach((answer) => {
			if (answer !== clickedAnswer) {
				answer.classList.remove('faq__answer--show');
			}
		});

		faqIcons.forEach((icon) => {
			if (icon !== clickedIconElement) {
				icon.classList.remove('faq__icon--flip');
			}
		});
	}
});
