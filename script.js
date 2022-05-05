"use strict"

const $modalWindow = document.querySelector('.modal-wrapper')
const $buttons = document.querySelectorAll('.modal-page__button')
const $closeButton = document.querySelector('.modal__close')

document.addEventListener('click', (event) => {
	console.log(event.target);
	if (event.target.classList.contains('modal-page__button')) {
		$modalWindow.classList.toggle('opened')
	}
	if (event.target.classList.contains('modal-wrapper') || event.target.classList.contains('modal__close')) {
		$modalWindow.classList.remove('opened')
	}
})

document.addEventListener('keydown', function (event) {
	if ((event.key === 'Escape' || event.code === 'Escape') && $modalWindow.classList.contains('opened')) {
		$modalWindow.classList.remove('opened')
	}
})