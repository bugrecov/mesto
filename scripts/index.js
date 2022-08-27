const editPopup = document.querySelector('#edit-popup');
const openEditButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.popup__close');
let editForm = editPopup.querySelector('.popup__form');
let nameInput = editForm.querySelector('.popup__input_type_name');
let jobInput = editForm.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__description');

const addPopup = document.querySelector('#add-card-popup');
const openAddButton = document.querySelector('.profile__add-button');
const addForm = addPopup.querySelector('.popup__form');
const placeInput = addForm.querySelector('.popup__input_type_name');
const linkInput = addForm.querySelector('.popup__input_type_job');

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

const toggleEditPopup = function () {
  editPopup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopups() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
}

openEditButton.addEventListener('click', toggleEditPopup);
closeButtons.forEach((closeButton)=>{
  closeButton.addEventListener('click', closePopups);
})

const toggleAddPopup = function () {
  addPopup.classList.toggle('popup_opened');
}
openAddButton.addEventListener('click', toggleAddPopup);

// Форма

function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInputValue = editPopup.querySelector('.popup__input_type_name').value;
  const jobInputValue = editPopup.querySelector('.popup__input_type_job').value;

  profileName.textContent = nameInputValue
  profileJob.textContent = jobInputValue

  editPopup.classList.toggle('popup_opened');
}

editForm.addEventListener('submit', formSubmitHandler);



function addFormSubmitHandler (evt) {
  evt.preventDefault();

  const placeInputValue = addPopup.querySelector('.popup__input_type_name').value;
  const linkInputValue = addPopup.querySelector('.popup__input_type_job').value;
  printCard(placeInputValue, linkInputValue);

  addPopup.classList.toggle('popup_opened');
}

addForm.addEventListener('submit', addFormSubmitHandler);


// 1 Клонирование карточки
// 2 Клонирование всех нужных элементов
// 3 Изменение ссылки и текста
// 4 Добавить карточку в ul
// 5 Написать функцию для добавления карточки в ul
// 6 Пройтись по массиву и вызвать функцию (к каждому элементу)

function printCard(text, link) {
  const placeCard = document.querySelector('#place-card');
  const cardHTML = placeCard.content.cloneNode(true);
  const img = cardHTML.querySelector('.item__image');
  const cloneText = cardHTML.querySelector('.item__title');
  const like = cardHTML.querySelector('.item__like');

  console.log('like', like)
  
  img.src = link;
  cloneText.textContent = text;
  document.querySelector('.grid-elements').append(cardHTML)

  like.addEventListener('click', (evt) => 
  like.classList.toggle('item__ike_active')
  );

  return printCard;
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