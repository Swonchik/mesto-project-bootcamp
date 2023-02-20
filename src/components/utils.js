export function openedPopup(element) {
    element.classList.add('popup_opened');
    element.addEventListener('click', closeOverlay)
    document.addEventListener('keydown', closeEscape);
}

export function closePopup(element) {
    element.classList.remove('popup_opened');
    element.removeEventListener('click', closeOverlay)
    document.removeEventListener('keydown', closeEscape);
}

export function closeEscape(evt) {
    if (evt.key === 'Escape') {
        const escClose = document.querySelector('.popup_opened');
        closePopup(escClose);
    }
}

export function closeOverlay (e) {
    if (e.target === e.currentTarget) {
        closePopup(e.currentTarget);
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