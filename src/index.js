import { addPopup, getCardElement,} from './components/card.js';
import {handleFormSubmit, profileName, profileProfession,profileFormElement, inputFullName, 
inputProfession,editPopup,postForm, avatarPopup, avatarForm, postFormSubmit, editProfileAvatar} from './components/modal.js';
import { openedPopup, closePopup,} from './components/utils.js';
import {} from './components/validate.js';
import {getProfileInfo, getAllCards,} from './components/api.js'
import './styles/index.css';

let userID = null;
const editAvatar  = document.querySelector('.profile__button-avatar')
const profileAvatar = document.querySelector('.profile__avatar')
const elements = document.querySelector('.elements');
const avatarClose = avatarPopup.querySelector('.popup__button-close')
const editButton = document.querySelector('.profile__button-edit');
const closeButtons = document.querySelector('.popup__button-close');
const bigPopup = document.querySelector('#popup-big')
const closeBigButton = bigPopup.querySelector('.popup__button-close')
const addButton = document.querySelector('.profile__button-add');
const closeAddButton = addPopup.querySelector('.popup__button-close')

// форма профиля
profileFormElement.addEventListener('submit', handleFormSubmit);
// форма картинки
postForm.addEventListener('submit', (event) =>{
  postFormSubmit(userID, event)
});
// форма аватара
avatarForm.addEventListener('submit', editProfileAvatar)

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
// Открытие аватара
editAvatar.addEventListener('click', function() {
  openedPopup(avatarPopup);

})

// закрытие профиля
closeButtons.addEventListener('click', function () {
  closePopup(editPopup);
});
// закрытие аватара
avatarClose.addEventListener('click', function () {
  closePopup(avatarPopup);
});
// закрытие добавления
closeAddButton.addEventListener('click', function () {
  closePopup(addPopup);
});
// закрытие большой картинки
closeBigButton.addEventListener('click', function () {
  closePopup(bigPopup);
});
// закрытие оверлея
bigPopup.addEventListener('click', function () {
    closePopup(bigPopup);
});


function renderCards (data){
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
  .catch((error) => {
    console.log(error);
  });

