const popupProfile = document.querySelector('#edit-popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupsClose = document.querySelectorAll('.popup__close');
const popupFormProfile = popupProfile.querySelector('.popup__form');
const nameInput = popupFormProfile.querySelector('.popup__input_type_name');
const jobInput = popupFormProfile.querySelector('.popup__input_type_job');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const profilePopupClose = popupProfile.querySelector('.popup__close');


const cardAddPopup = document.querySelector('#add-card-popup');
const profileAddPlaceButton = document.querySelector('.profile__add-button');
const placePopupFormProfile = cardAddPopup.querySelector('.popup__form');
const placeInput = placePopupFormProfile.querySelector('.popup__input_type_name');
const linkInput = placePopupFormProfile.querySelector('.popup__input_type_job');
const cardAddPopupClose = cardAddPopup.querySelector('.popup__close')
const popupAddForm = cardAddPopup.querySelector(".popup__form");

const viewPopup = document.querySelector('#popup-image');
const viewPopupImg = viewPopup.querySelector('.popup__image');
const viewPopupText = viewPopup.querySelector('.popup__image-caption');
const viewPopupClose = viewPopup.querySelector('.popup__close')


const placeCardTemplate = document.querySelector('#place-card');

const container = document.querySelector('.grid-elements');

const allPopups = document.querySelectorAll('.popup')


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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  popup.addEventListener("click", closePopupOverlay);
  enableValidation(validationConfig);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  popup.removeEventListener("click", closePopupOverlay);
}

const handleOpenEditProfilePopup = function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  profileName.textContent = nameInputValue
  profileJob.textContent = jobInputValue

  closePopup(popupProfile);
}

const clickOpenAddPlacePopupHandler = function () {
  popupAddForm.reset();
  openPopup(cardAddPopup);
}

const handleOpenImagePopup = function (src, text) {
  openPopup(viewPopup);
  viewPopupImg.src = src;
  viewPopupImg.alt = text;
  viewPopupText.textContent = text;
}

// Форма



function handleCardFormSubmit (evt) {
  evt.preventDefault();

  const placeInputValue = placeInput.value;
  const linkInputValue = linkInput.value;
  renderCard(placeInputValue, linkInputValue);

  closePopup(cardAddPopup);
  
}

// 1 Клонирование карточки
// 2 Клонирование всех нужных элементов
// 3 Изменение ссылки и текста
// 4 Добавить карточку в ul
// 5 Написать функцию для добавления карточки в ul
// 6 Пройтись по массиву и вызвать функцию (к каждому элементу)

// создает разметку новой карточки
function printCard(text, link) {
  const cardHTML = placeCardTemplate.content.cloneNode(true);
  const img = cardHTML.querySelector('.item__image');
  const cloneText = cardHTML.querySelector('.item__title');
  const like = cardHTML.querySelector('.item__like');
  const trash = cardHTML.querySelector('.item__trash');
  
  img.src = link;
  img.alt = text;
  cloneText.textContent = text;

  like.addEventListener('click', () => 
    like.classList.toggle('item__like_active')
  );

  trash.addEventListener('click', () => 
    trash.closest('.item').remove()
  );

  img.addEventListener('click', () =>
    handleOpenImagePopup(img.src, cloneText.textContent)
  )

  


  return cardHTML;
} 

// добавляет новую карточку в html
function renderCard(text, link) {
  const newCard = printCard(text, link);
  container.prepend(newCard);
}


// создает карточки из данных массива
function renderInitialCards(){
  initialCards.forEach((cardData) => {
    renderCard(cardData.name, cardData.link)
  })
}

renderInitialCards();

profileEditButton.addEventListener('click', handleOpenEditProfilePopup);
profileAddPlaceButton.addEventListener('click', clickOpenAddPlacePopupHandler);

placePopupFormProfile.addEventListener('submit', handleCardFormSubmit);
popupFormProfile.addEventListener('submit', handleProfileFormSubmit);

profilePopupClose.addEventListener('click', () => closePopup(popupProfile));
cardAddPopupClose.addEventListener('click', () => closePopup(cardAddPopup));
viewPopupClose.addEventListener('click', () => closePopup(viewPopup));


function closePopupOverlay(evt) {
  if (
    !evt.target.closest(".popup__image") &&
    !evt.target.closest(".popup__container")
  ) {
    closePopup(evt.target.closest(".popup"));
  }
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}