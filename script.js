"use strict"

const $pageWrapper = document.querySelector('.wrapper')
let $modalWindow

document.addEventListener('click', (event) => {
	$modalWindow = document.querySelector('.modal-wrapper')

	if (event.target.classList.contains('modal-page__button_1')) {
		notificationWindow.createModal().renderModal()
		setTimeout(() => {
			notificationWindow.linkAtSelf.classList.add('opened')
		}, 200);
	} else if (event.target.classList.contains('modal-page__button_2')) {
		greetingsWindow.createModal().renderModal()
		setTimeout(() => {
			greetingsWindow.linkAtSelf.classList.add('opened')
		}, 200);
	} else if (event.target.classList.contains('modal-page__button_3')) {
		byeWindow.createModal().renderModal()
		setTimeout(() => {
			byeWindow.linkAtSelf.classList.add('opened')
		}, 200);
	}
	if ($modalWindow) {
		if (event.target.classList.contains('modal-wrapper') || event.target.classList.contains('modal__close')) {
			$modalWindow.classList.remove('opened')
			setTimeout(() => {
				$modalWindow.remove()
			}, 300);
		}
	}

})

document.addEventListener('keydown', function (event) {
	$modalWindow = document.querySelector('.modal-wrapper')
	if ($modalWindow) {
		if ((event.key === 'Escape' || event.code === 'Escape') && $modalWindow.classList.contains('opened')) {
			$modalWindow.classList.remove('opened')
			setTimeout(() => {
				$modalWindow.remove()
			}, 300);
		}
	}

})

class MyModal {
	constructor(title = 'Модальное окно', text = 'Контент') {
		this.title = title
		this.text = text
	}

	createModal() {
		this.modalHtml = `
			<div class="modal-wrapper">
				<div class="modal__window">
					<div class="modal__title">${this.title}<span class="modal__close"></span></div>
					<div class="modal__text">${this.text}</div>
				</div>
			</div>
		`

		return this
	}

	renderModal() {
		document.body.insertAdjacentHTML('beforeend', `${this.modalHtml}`)
		this.linkAtSelf = document.querySelector('.modal-wrapper')
	}

	destroyModal() {
		this.linkAtSelf.remove()
		this.modalHtml = ''
	}
}

const MyModalProxy = new Proxy(MyModal, {
	construct(target, args) {
		console.log('Модальное окно создано');
		return new target(...args)
	}
})

const notificationWindow = new MyModalProxy('Я модалка', 'У меня для вас уведомление!')
const greetingsWindow = new MyModalProxy('Поздравляю', 'Только что вы оформили у нас курс, удачи в учебе!')
const byeWindow = new MyModalProxy('Спасибо, что заглянули', 'Возвращайтесь еще!!')
console.log(notificationWindow);