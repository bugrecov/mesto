const popupProfile = document.querySelector('#edit-popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupsClose = document.querySelectorAll('.popup__close');
const popupForm = popupProfile.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__input_type_name');
const jobInput = popupForm.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');

const cardAddPopup = document.querySelector('#add-card-popup');
const profileAddButton = document.querySelector('.profile__add-button');
const placePopupForm = cardAddPopup.querySelector('.popup__form');
const placeInput = placePopupForm.querySelector('.popup__input_type_name');
const linkInput = placePopupForm.querySelector('.popup__input_type_job');

const viewPopup = document.querySelector('#popup-image');
const viewPopupImg = viewPopup.querySelector('.popup__image');
const viewPopupText = viewPopup.querySelector('.popup__image-caption');

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


const togglepopupProfile = function () {
  popupProfile.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

const toggleViewPopup = function (src, text) {
  viewPopup.classList.toggle('popup_opened');
  viewPopupImg.src = src;
  viewPopupImg.alt = text;
  viewPopupText.textContent = text;
}

function closePopups() {
  document.querySelector('.popup_opened').classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', togglepopupProfile);
popupsClose.forEach((closeButton)=>{
  closeButton.addEventListener('click', closePopups);
})

const togglecardAddPopup = function () {
  cardAddPopup.classList.toggle('popup_opened');
}
profileAddButton.addEventListener('click', togglecardAddPopup);

// Форма

function submitProfileForm (evt) {
  evt.preventDefault();

  const nameInputValue = popupProfile.querySelector('.popup__input_type_name').value;
  const jobInputValue = popupProfile.querySelector('.popup__input_type_job').value;

  profileName.textContent = nameInputValue
  profileJob.textContent = jobInputValue

  popupProfile.classList.toggle('popup_opened');
}

popupForm.addEventListener('submit', submitProfileForm);



function placePopupsubmitProfileForm (evt) {
  evt.preventDefault();

  const placeInputValue = cardAddPopup.querySelector('.popup__input_type_name').value;
  const linkInputValue = cardAddPopup.querySelector('.popup__input_type_job').value;
  printCard(placeInputValue, linkInputValue);

  cardAddPopup.classList.toggle('popup_opened');
  placeInput.value = '';
  linkInput.value = '';
  
}

placePopupForm.addEventListener('submit', placePopupsubmitProfileForm);


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
  const trash = cardHTML.querySelector('.item__trash');
  
  img.src = link;
  cloneText.textContent = text;
  document.querySelector('.grid-elements').prepend(cardHTML)

  like.addEventListener('click', () => 
    like.classList.toggle('item__like_active')
  );

  trash.addEventListener('click', () => 
    trash.closest('.item').remove()
  );

  img.addEventListener('click', () =>
    toggleViewPopup(img.src, cloneText.textContent)
  )


  return printCard;
} 


function loopCards(){
  initialCards.forEach((el) => {
    printCard(el.name, el.link)
  })
}

loopCards();
