import {openedBigPopup, closePopup} from './utils'

export const addPopup = document.querySelector('#popup-add')

// Массив карточек
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

// отображение карточек
const elements = document.querySelector('.elements');
const elementTemplate = document.getElementById('element-template').content;

export function getCardElement (card) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementPhoto = element.querySelector('.element__photo');
  element.querySelector('.element__title').textContent = card.name;
  elementPhoto.src = card.link;
  elementPhoto.alt = card.link;
  //  лайк карточки
  element.querySelector('.element__button-like').addEventListener('click', function (e) {
    e.target.classList.toggle('element__button-like_active');
  });
  //  удаление карточки
  element.querySelector('.element__button-delete').addEventListener('click', function () {
    element.remove()
  })
  
  elementPhoto.addEventListener('click', () => clickImage(card))

  return element;
}

initialCards.forEach((data) => elements.prepend(getCardElement(data)));
//  Добавление карточки
export const postFormSubmit = e => {
  e.preventDefault();
  const name = document.querySelector('.form__input_type_name').value;
  const link = document.querySelector('.form__input_type_photo').value;
  elements.prepend(getCardElement({ name, link }))
  closePopup(addPopup);
  e.target.reset()
};

const bigPopup = document.querySelector('#popup-big')
const bigPopupTitle = document.querySelector('.popup__title-big')
const bigPopupImg = document.querySelector('.popup__photo')

function clickImage(data) {
  bigPopupImg.src = data.link;
  bigPopupImg.alt = data.name;
  bigPopupTitle.textContent = data.name;
  openedBigPopup(bigPopup);
}

