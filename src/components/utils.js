export function openedPopup(element) {
    element.classList.add('popup_opened');
}

export function closePopup(element) {
    document.removeEventListener('keydown', closeByEscape);
    element.classList.remove('popup_opened');
}

export function openBigPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
}

export function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const escClose = document.querySelector('.popup_opened');
        closePopup(escClose);
    }
}

export function renderButton ({button, text, disabled}){
    if (!disabled){
        button.disabled = false;
    }
    else {
        button.disabled = 'disabled';
    }
    button.textContent = text;
}