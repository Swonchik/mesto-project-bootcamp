
function showError(inputElement, errorElement, object) {
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement, object) {
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.textContent = "";
}

function toggleButton(buttonElement, isActive, object) {
  if(isActive) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(object.inactiveButtonClass)
  } else {
    buttonElement.disabled = 'disabled';
    buttonElement.classList.add(object.inactiveButtonClass)
  }

}

function checkValidity(inputElement, formElement, object) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

    if (!isInputValid) {
      showError(inputElement, errorElement, object)
    } else {
      hideError(inputElement, errorElement, object)
    }
}

function setEventListener(formElement, object) {
  const inputList = formElement.querySelectorAll(object.inputSelector);
  const submitButtonElement = formElement.querySelector(object.submitButtonSelector);
  
  toggleButton(submitButtonElement, formElement.checkValidity(), object);

  formElement.addEventListener('submit', (e) => {
    e.preventDefault()
  });

  [...inputList].forEach((inputItem) => {
    inputItem.addEventListener('input', () => {
      toggleButton(submitButtonElement, formElement.checkValidity(), object);
      checkValidity(inputItem, formElement, object)
      
    })
  })
} 

export function enableValidation(object) {
  const forms = document.querySelectorAll(object.formSelector);

  [...forms].forEach((formItem) => {
    setEventListener(formItem, object);
  })
}

export const objectValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_invalid',
  inputErrorClass: 'popup__input_invalid',
};

enableValidation(objectValidation)