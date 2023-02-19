import { closePopup } from "./utils";
import { editProfile, postCard } from "./api";
import { addPopup, getCardElement, } from "./card";
// Обработка формы
export const editPopup = document.querySelector('.popup-profile');
export const profileName = document.querySelector('.profile__title');
export const profileProfession = document.querySelector('.profile__subtitle');
export const profileFormElement = document.querySelector('#profile-form');
export const inputFullName = profileFormElement.querySelector('.popup__input_type_name');
export const inputProfession = profileFormElement.querySelector('.popup__input_type_profession');
export const postForm = document.querySelector('#post-form');
export const avatarForm = document.querySelector('#avatar-form')
export const avatarPopup = document.querySelector('#popup-avatar')


export function handleFormSubmit(evt) {
    evt.preventDefault();
    editProfile (inputFullName.value, inputProfession.value)
    .then(function(){
        profileName.textContent = inputFullName.value;
        profileProfession.textContent = inputProfession.value;
    })
    .then (function(){
        closePopup(editPopup);
    })
    .catch(function(){
        console.log(error);
    })
}



const elements = document.querySelector('.elements');
//  Добавление карточки
export function postFormSubmit(e, userID) {
    e.preventDefault();
    const name = document.querySelector('.form__input_type_photo').value;
    const link = document.querySelector('.form__input_type_url').value;
  postCard(name, link)
  .then (function(card){
    debugger;
      elements.prepend(getCardElement (card, userID))
      e.target.reset();
  })
  .then(function(){
    closePopup(addPopup);
  })
  .catch((error) => {
    console.log(error);
  });
}