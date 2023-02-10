//1//
function clickMe () {
    let button = document.querySelector("button");
    button.innerHTML = "Hooray!";
}
let clickMeButton = document.querySelector("button");
clickMeButton.addEventListener("click", clickMe);

//2//
function showPassword(event) {
    event.preventDefault();
    let passwordInput = document.querySelector("#password-input");
    alert(`Your password is ${passwordInput.value}`);
}
let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showPassword);

//3//
function showSignUpFormValues(event) {
    event.preventDefault();
    let emailInput= document.querySelector("#email-input");
    let usernameInput = document.querySelector("#username-input");
    alert(`Your email is ${emailInput.value}`);
    alert(`Your username is ${usernameInput.value}`);
    }

    let signUpForm = document.querySelector("#signup-form");
    signUpForm.addEventListener("submit", showSignUpFormValues);