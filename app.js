let mainFAQ = document.querySelector('.main__faq'),
	faqAnswers = document.querySelectorAll('.faq__answer');

mainFAQ.addEventListener('click', (event) => {
	const faqIcon = event.target
		.closest('.faq__ques')
		.querySelector('.faq__icon');

	if (faqIcon) {
		faqIcon.classList.toggle('faq__icon--flip');
		const faqAnswer =
			faqIcon.parentElement.parentElement.querySelector('.faq__answer');

		faqAnswer.classList.toggle('faq__answer--hide');
	}
});
