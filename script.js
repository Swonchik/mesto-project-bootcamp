// Открытие и закрытие профиля редактирование

// PopUp
const editPopup = document.querySelector('.popup');

// Btn
const editButton = document.querySelector('.profile__button-edit');
const closeButtons = document.querySelector('.popup__button-close');

// открытие профиля
function openedPopup(element) {
  element.classList.add('popup_opened');
}
editButton.addEventListener('click', function () {
  openedPopup(editPopup);
});

// закрытие профиля
function closePopup(element) {
  element.classList.remove('popup_opened');
}
closeButtons.addEventListener('click', function () {
  closePopup(editPopup);
});

// Редактирование имени и информации о себе

// Форма
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const professionInput = formElement.querySelector('.popup__input_type_profession');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');
// Обработка формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = professionInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', function () {
  closePopup(editPopup);
});

// Карточки из коробки 

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
const newCard = function (card) {
  const elementTemplate = document.getElementById('element-template').content;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementPhoto = element.querySelector('.element__photo');
  element.querySelector('.element__title').textContent = card.name;
  elementPhoto.src = card.link;
  elements.prepend(element)
  // 6 лайк карточки
  element.querySelector('.element__button-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button-like_active');
  });
  // 7 удаление карточки
  element.querySelector('.element__button-delete').addEventListener('click', function () {
    element.remove()
  })
  
  elementPhoto.addEventListener('click', () => clickImage(card))

  return element;
}
initialCards.forEach((data) => elements.prepend(newCard(data)));

//  Открытие и закрытие формы добавления

// PopUp
const addPopup = document.querySelector('#popup-add')

// Btn
const addButton = document.querySelector('.profile__button-add');
const closeAddButton = addPopup.querySelector('.popup__button-close')

// открытие формы
function openedPopupAdd(element) {
  element.classList.add('popup_opened');
}
addButton.addEventListener('click', function () {
  openedPopupAdd(addPopup);
});

// закрытие формы
function closePopupAdd(element) {
  element.classList.remove('popup_opened');
}
closeAddButton.addEventListener('click', function () {
  closePopupAdd(addPopup);
});

// 5 Добавление карточки
const postFormSubmit = e => {
  e.preventDefault();
  const name = document.querySelector('.form__input_type_name').value;
  const link = document.querySelector('.form__input_type_photo').value;
  newCard({ name, link });
  closePopupAdd(addPopup);
};

const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', postFormSubmit);

//  Открытие и закрытие полной картинки

//PopUp
const bigPopup = document.querySelector('#popup-big')

// Btn
const closeBigButton = bigPopup.querySelector('.popup__button-close')
const test = document.querySelector('.element')

// открытие
function openedBigPopup(element) {
  element.classList.add('popup_opened');
}
const bigPopupImg = bigPopup.querySelector('.popup__photo')
const bigPopupTitle = bigPopup.querySelector('.popup__title-big')
function clickImage(data) {
  bigPopupImg.src = data.link;
  bigPopupImg.alt = data.name;
  bigPopupTitle.textContent = data.name;
  openedBigPopup(bigPopup);
}

// закрытие 
function closeBigPopup(element) {
  element.classList.remove('popup_opened');
}
closeBigButton.addEventListener('click', function () {
  closeBigPopup(bigPopup);
});



