const popup = document.querySelector('.popup_type_edit-profile');
const openEditButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
const saveButton = popup.querySelector('.popup__save-button');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('popup__input_type_name');
let jobInput = formElement.querySelector('popup__input_type_job');
let profileName = document.querySelector('.profile__title')
let profileJob = document.querySelector('.profile__description')

console.log('popup', popup);
console.log('openEditButton', openEditButton);
console.log('openEditButton', closeButton);

const togglePopup = function () {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
}

openEditButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)

// Форма

function formSubmitHandler (evt) {
  evt.preventDefault();

  const nameInput = popup.querySelector('.popup__input_type_name').value;
  const jobInput = popup.querySelector('.popup__input_type_job').value;

  // profileName.getAttribute('value');
  // profileJob.getAttribute('value');

  profileName.textContent = nameInput
  profileJob.textContent = jobInput
}

formElement.addEventListener('submit', formSubmitHandler);


// Кнопка лайка

// const like = document.querySelector('.item__like');

// console.log('like', like);

// const toggleLike = function () {
//   like.classList.toggle('.item__like_active');
// }

// like.addEventListener('click', toggleLike)