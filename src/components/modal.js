import { closePopup } from "./utils";

// Обработка формы
export const editPopup = document.querySelector('.popup-profile');
export const profileName = document.querySelector('.profile__title');
export const profileProfession = document.querySelector('.profile__subtitle');
export const profileFormElement = document.querySelector('#profile-form');
export const inputFullName = profileFormElement.querySelector('.popup__input_type_name');
export const inputProfession = profileFormElement.querySelector('.popup__input_type_profession');



export function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputFullName.value;
    profileProfession.textContent = inputProfession.value;
    closePopup(editPopup);
}

