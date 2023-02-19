import { addPopup, getCardElement,} from './components/card.js';
import {handleFormSubmit, profileName, profileProfession,profileFormElement, inputFullName, 
inputProfession,editPopup,postForm,avatarForm, avatarPopup, postFormSubmit} from './components/modal.js';
import { openedPopup, closePopup,} from './components/utils.js';
import {} from './components/validate.js';
import {getProfileInfo, getAllCards, postCard} from './components/api.js'
import './styles/index.css';

const editProfileAvatar = document.querySelector('.profile__button-avatar')
const profileAvatar = document.querySelector('.profile__avatar')
const elements = document.querySelector('.elements');

const avatarClose = avatarPopup.querySelector('.popup__button-close')

const editButton = document.querySelector('.profile__button-edit');
const closeButtons = document.querySelector('.popup__button-close');
const bigPopup = document.querySelector('#popup-big')
const closeBigButton = bigPopup.querySelector('.popup__button-close')
const addButton = document.querySelector('.profile__button-add');
const closeAddButton = addPopup.querySelector('.popup__button-close')

export let userID = null;


// открытие профиля
editButton.addEventListener('click', () => {
  openedPopup(editPopup);
  inputFullName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
});
// открытие формы
addButton.addEventListener('click', function () {
  openedPopup(addPopup);
});
editProfileAvatar.addEventListener('click', function() {
  openedPopup(avatarPopup)
})

// avatarForm.addEventListener('submit',)
profileFormElement.addEventListener('submit', handleFormSubmit);
postForm.addEventListener('submit', postFormSubmit);

// закрытие профиля
closeButtons.addEventListener('click', function () {
  closePopup(editPopup);
});
avatarClose.addEventListener('click', function () {
  closePopup(avatarPopup);
});
// закрытие
closeAddButton.addEventListener('click', function () {
  closePopup(addPopup);
});
closeBigButton.addEventListener('click', function () {
  closePopup(bigPopup);
});
// закрытие овер
bigPopup.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup_opened')) {
    closePopup(bigPopup);
  }
});


export function renderCards (data){
  data.forEach(function(dataCard){
      const arrayCardImg = getCardElement(dataCard, userID);
      elements.append(arrayCardImg);
  })
}



Promise.all([getProfileInfo (), getAllCards ()])
  .then(function([userData, cardsData]) {
    userID = userData._id;

    profileName.textContent = userData.name;
    profileProfession.textContent = userData.about;

    profileAvatar.src = userData.avatar;

    renderCards(cardsData)

  })
  .catch((err) => {
    console.log(err);
  });

