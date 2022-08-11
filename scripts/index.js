const popup = document.querySelector('.popup_type_edit-profile');
const openEditButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');

console.log('popup', popup);
console.log('openEditButton', openEditButton);
console.log('openEditButton', closeButton);

const togglePopup = function () {
  popup.classList.toggle('popup_opened');
}

openEditButton.addEventListener('click', togglePopup)
closeButton.addEventListener('click', togglePopup)