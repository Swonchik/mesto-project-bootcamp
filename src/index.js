import {postFormSubmit, addPopup} from './components/card.js';
import {handleFormSubmit, profileName, profileProfession,profileFormElement, inputFullName, inputProfession,editPopup } from './components/modal.js';
import { openedPopup, closePopup,} from './components/utils.js';
import {} from './components/validate.js';
import './styles/index.css';


// Открытие и закрытие профиля редактирование
// PopUp

const editButton = document.querySelector('.profile__button-edit');


const closeButtons = document.querySelector('.popup__button-close');


const bigPopup = document.querySelector('#popup-big')
const closeBigButton = bigPopup.querySelector('.popup__button-close')
const addButton = document.querySelector('.profile__button-add');
const closeAddButton = addPopup.querySelector('.popup__button-close')



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

profileFormElement.addEventListener('submit', handleFormSubmit);
const postForm = document.querySelector('#post-form');
postForm.addEventListener('submit', postFormSubmit);



// закрытие профиля
closeButtons.addEventListener('click', function () {
  closePopup(editPopup);
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



