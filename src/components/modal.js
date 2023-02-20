import { closePopup, renderButton } from "./utils";
import { editProfile, postCard, editAvatar } from "./api";
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
export const saveButtonProfile = profileFormElement.querySelector('.popup__button-submit')
export const saveButtonAddCard = postForm.querySelector('.popup__button-submit')
export const saveButtonAvatar = avatarForm.querySelector('.popup__button-submit')
const name = postForm.querySelector('.form__input_type_photo');
const link = postForm.querySelector('.form__input_type_url');


export function handleFormSubmit(evt) {
    evt.preventDefault();
    renderButton ({
      button: saveButtonProfile,
      text: 'Сохранение...',
      disabled: true
  })
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
    .finally (function(){
      
      renderButton ({
          button: saveButtonProfile,
          text: 'Сохранить',
          disabled: false
      })
  })
}

const elements = document.querySelector('.elements');
//  Добавление карточки
export function postFormSubmit(userID, event) {
    event.preventDefault();
    renderButton ({
      button: saveButtonAddCard,
      text: 'Сохранение...',
      disabled: true
  })
  postCard(name.value, link.value)
  .then (function(card){

      elements.prepend(getCardElement (card, userID))
      event.target.reset();
  })
  .then(function(){
    closePopup(addPopup);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally (function(){
    renderButton ({
        button: saveButtonAddCard,
        text: 'Сохранить',
        disabled: false
    })
 })
}
// редактор аватара
const avatarProfile = document.querySelector('.profile__avatar')
const avatarLinkInput = avatarForm.querySelector('.popup__input_type_avatar')
export function editProfileAvatar (e) {
  e.preventDefault();
  renderButton ({
    button: saveButtonAvatar,
    text: 'Сохранение...',
    disabled: true
  })
  editAvatar (avatarLinkInput.value, e)
    .then(function(data){
      avatarProfile.src = data.avatar;
        e.target.reset();
        console.log('ok');
    })
    .then(function(){
      
        closePopup(avatarPopup);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally (function(){
      
      renderButton ({
        button: saveButtonAvatar,
        text: 'Сохранить',
        disabled: false
      })
    })

}