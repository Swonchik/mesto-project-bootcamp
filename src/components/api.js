const config = {
    url: 'https://mesto.nomoreparties.co/v1/wbf-cohort-5',
    headers: {
        "Content-Type": 'application/json',
        authorization: "55bce47d-4934-432d-b120-81a3b18983fa",
    },
};

function onResponse (res) {
    return res.ok ? res.json() : res.json().then((data) => Promise.reject(data));
}

// Загрузка информации о пользователе
export function getProfileInfo (){
    return fetch(`${config.url}/users/me`, {
        method: 'GET',
        headers: config.headers
    })
    .then(onResponse);
}

// Загрузка карточек с сервера
export function getAllCards () {
    return fetch (`${config.url}/cards`, {
        method: 'GET',
        headers: config.headers
    })
    .then(onResponse);
}

// Редактирование профиля
export function editProfile (name, profession){
    return fetch (`${config.url}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            "name": name,
            "about": profession
        })
    })
    .then(onResponse);     
}

// Добавление новой карточки
export function postCard(cardName, cardLink) {
    return fetch (`${config.url}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify ({
            "name": cardName,
            "link": cardLink
        })
    })
    .then(onResponse);
}

//удаление карточки
export function deleteCard(cardID){
    return fetch (`${config.url}/cards/${cardID}`, {
        method: 'DELETE',
        headers: config.headers,
        body: JSON.stringify({
            "_id": cardID
        })
    })
    .then(onResponse);    
}

//постановка и удаление лайка карточки
export function updateLike(cardID, isLiked){
    return fetch (`${config.url}/cards/likes/${cardID}`, {
        method: isLiked? 'DELETE' : 'PUT',
        headers: config.headers,
    })
    .then(onResponse);    
}

//редактирование аватара пользователя
export function editAvatar(avatarLink){
    return fetch (`${config.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            "avatar": avatarLink
        })
    })
    .then(onResponse);    
}