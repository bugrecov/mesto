# Проект: Место

### Обзор

* Figma
* Картинки

**Figma**

* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

**Картинки**

Доставать картинки предстоит из Фигмы. Это расхожая практика, поэтому полезно потренироваться.
Не забудьте [оптимизировать картинки](https://tinypng.com/), чтобы ваш сайт загружался быстрее.

Удачи!

const popup = document.querySelector('.popup_type_edit-profile');
const openEditButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');

console.log('popup', popup);
console.log('openEditButton', openEditButton);
console.log('openEditButton', closeButton);

const togglePopup = function () {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent
  jobInput.value = profileJ.textContent
}

openEditButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

// Форма
const saveButton = popup.querySelector('.popup__save-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('popup__input_type_name');
let jobInput = formElement.querySelector('popup__input_type_job');

function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInput = popup.querySelector('.popup__input_type_name').value;
  const jobInput = popup.querySelector('.popup__input_type_job').value;

  let profileName = document.querySelector('.profile__title')
  let profileJob = document.querySelector('.profile__description')

  // profileName.getAttribute('value');
  // profileJob.getAttribute('value');

  profileName.textContent = nameInput
  profileJob.textContent = jobInput
}

formElement.addEventListener('submit', formSubmitHandler);