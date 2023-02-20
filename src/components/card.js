import {openedPopup, closePopup} from './utils'
import { deleteCard, updateLike } from './api';
export const addPopup = document.querySelector('#popup-add')



const elementTemplate = document.getElementById('element-template').content;

function isLiked (card, userID){
  return card.likes.some(function(object){
       return object._id === userID   
   })
}

function updateLikeView(card, userID, buttonLike, scoreLike){
  if(isLiked(card, userID)){
    buttonLike.classList.add('element__button-like_active');
  } else {
    buttonLike.classList.remove('element__button-like_active');
  }
  scoreLike.textContent = card.likes.length;
}

export function getCardElement (card, userID) {
console.log(card.likes);
const  cardID = card._id;
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const elementPhoto = element.querySelector('.element__photo');
  const buttonDelete = element.querySelector('.element__button-delete');
  const buttonLike = element.querySelector('.element__button-like')
  const scoreLike = element.querySelector('.element__like-score')
  element.querySelector('.element__title').textContent = card.name;
  elementPhoto.src = card.link;
  elementPhoto.alt = card.name;
 
  updateLikeView(card, userID, buttonLike, scoreLike)

  //  лайк карточки
  buttonLike.addEventListener('click', function(){
    updateLike(cardID, isLiked(card, userID))
        .then(function(data){  
            card.likes = data.likes;
            updateLikeView(card, userID, buttonLike, scoreLike)
        })
        .catch ((error) => {
          console.log(error);
        }) 
  })


  
  //  удаление карточки
  if (card.owner._id === userID) {
    buttonDelete.addEventListener('click', function () {
      deleteCard (card._id)
        .then(function(){
          element.remove();
          console.log(`Карточка с id ${card._id} удалена`)
        })
        .catch ((error) => {
          console.log(error);
        })         
    })
  } else {
    buttonDelete.remove()
  }

  elementPhoto.addEventListener('click', () => clickImage(card))

  return element;
}

const bigPopup = document.querySelector('#popup-big')
const bigPopupTitle = document.querySelector('.popup__title-big')
const bigPopupImg = document.querySelector('.popup__photo')

function clickImage(data) {
  bigPopupImg.src = data.link;
  bigPopupImg.alt = data.name;
  bigPopupTitle.textContent = data.name;
  openedPopup(bigPopup);
}


