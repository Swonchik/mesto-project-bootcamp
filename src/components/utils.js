export function openedPopup(element) {
    element.classList.add('popup_opened');
}

export function closePopup(element) {
    document.removeEventListener('keydown', closebByEscape);
    element.classList.remove('popup_opened');
}

export function openedBigPopup(element) {
    element.classList.add('popup_opened');
    document.addEventListener('keydown', closebByEscape);
}

export function closebByEscape(evt) {
    if (evt.key === 'Escape') {
        const escClose = document.querySelector('.popup_opened');
        closePopup(escClose);
    }
}

