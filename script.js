const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");

const ShowErrorMessage = "Please provide a valid email address";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showErrorMessage = (message) => {
  const existingError = document.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }

  const errorElement = document.createElement("p");
  errorElement.classList.add("error-message");
  errorElement.textContent = message;

  formInput.parentNode.insertBefore(errorElement, formInput.nextSibling);
  formInput.classList.add("error-message-input-border");
};

const clearErrorMessage = () => {
  const existingError = document.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }
  formInput.classList.remove("error-message-input-border");
};

formInput.addEventListener("input", () => {
  clearErrorMessage();
});

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = formInput.value.trim();

  if (validateEmail(email)) {
    clearErrorMessage();
    alert("Email is valid!");
    console.log(email);
  } else {
    showErrorMessage(ShowErrorMessage);
  }
});
