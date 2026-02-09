const formInput = document.querySelector(".form-input");
const formButton = document.querySelector(".form-button");

const WarnEmptyInputFieldMessage = "Whoops! It looks like you forgot to add your email";
const InvalidEmailMessage = "Please provide a valid email address";

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const showErrorMessage = (message) => {
  // Remove existing error
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

// Clear error message on typing
formInput.addEventListener("input", () => {
  clearErrorMessage();
});

// Form submission
formButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = formInput.value.trim();

  if (email === "") {
    // Empty input
    showErrorMessage(WarnEmptyInputFieldMessage);
  } else if (!validateEmail(email)) {
    // Invalid email format
    showErrorMessage(InvalidEmailMessage);
  } else {
    // Valid email
    clearErrorMessage();
    alert("Email is valid!");
    console.log(email);
  }
});
