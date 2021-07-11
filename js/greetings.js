const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const greeting = document.querySelector('#greeting');
const hiddenContents = document.querySelector('.main.hidden');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}


function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Have a Good Day, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    hiddenContents.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings();
}
