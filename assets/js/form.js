const formContainer = document.querySelector(".form-container");

function checkValue(e) {
  const input = e.target;
  const inputContainer = input.parentNode;
  const label = inputContainer.children[0];
  const errorMsg = inputContainer.children[1];
  if (input.value) {
    errorMsg.classList.remove("active");
    return;
  }
  label.classList.remove("active");
  errorMsg.classList.add("active");
}

function handleFocusIn(e) {
  const input = e.target;
  const inputContainer = input.parentNode;
  const label = inputContainer.children[0];
  label.classList.add("active");
  input.addEventListener("focusout", checkValue);
}

function init() {
  const inputs = formContainer.querySelectorAll(".input");
  inputs.forEach((input) => {
    const inputContainer = input.parentNode;
    const label = inputContainer.children[0];
    if (input.value) {
      label.classList.add("active");
    }
    input.addEventListener("focusin", handleFocusIn);
  });
}

if (formContainer) {
  init();
}
