const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#password");
const errorcontainer = document.querySelector("#error");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkLength(8);
});

function checkLength(len) {
  if (passwordInput.value.trim().length < len) {
    return (errorcontainer.innerHTML =
      "Your password needs to be at least 8 characters");
  } else {
    errorcontainer.innerHTML = "";
  }
}
