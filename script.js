const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#userName");
const errorcontainer = document.querySelector("#error");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!emailInput.value || passwordInput.value.trim().length < 8) {
    return (errorcontainer.innerHTML =
      "You need to have a valid noroff email and a password longer than 8 characters");
  } else {
    location.assign("index.html");
  }
});
