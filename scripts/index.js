const popup = document.querySelector('.popup');
const openEditButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__description');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// console.log('formElement', formElement)
// console.log('nameInput', nameInput)
// console.log('jobInput', jobInput)
// console.log('profileName', profileName)
// console.log('profileJob', profileJob)

// console.log('popup', popup);
// console.log('openEditButton', openEditButton);
// console.log('openEditButton', closeButton);

const togglePopup = function () {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
}

openEditButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

// openAddCardButton.addEventListener('click', togglePopup)

// Форма

function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInputValue = popup.querySelector('.popup__input_type_name').value;
  const jobInputValue = popup.querySelector('.popup__input_type_job').value;

  profileName.textContent = nameInputValue
  profileJob.textContent = jobInputValue

  popup.classList.toggle('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);


// 1 Клонирование карточки
// 2 Клонирование всех нужных элементов
// 3 Изменение ссылки и текста
// 4 Добавить карточку в ul
// 5 Написать функцию для добавления карточки в ul
// 6 Пройтись по массиву и вызвать функцию (к каждому элементу)

function printCard(text, link) {
  const placeCard = document.querySelector('#place-card');
  const cardHTML = placeCard.cloneNode(true);
  const img = cardHTML.querySelector('.item__image');
  const cloneText = cardHTML.querySelector('.item__title');
  
  img.src = link;
  cloneText.textContent = text;
  document.querySelector('.grid-elements').append(cardHTML);
}

function loopCards(){
  initialCards.forEach((el) => {
    printCard(el.name, el.link)
  })
}

loopCards();
initialCards.push({name: 'xxx', link :'xxx'});

printCard('XXX','YYY');

function addCard() {

}

// При добавлении карточки (после сделанного попапа) скопировать значение из полей и добавить их в массив (через пуш) initialCards.push({name: 'xxx', link :'xxx'})