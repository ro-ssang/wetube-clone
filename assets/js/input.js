const form = document.querySelector(".form-container");
const input = document.querySelectorAll("input");

function handleInput(e) {
  const targetInput = e.target;
  const parent = targetInput.parentNode;
  const inputValue = targetInput.value;
  const inputName = parent.childNodes[0];
  const inputMsg = parent.childNodes[1];
  if (!inputValue) {
    inputName.classList.remove("focus");
    inputMsg.classList.add("required");
    targetInput.classList.add("required");
  } else {
    inputMsg.classList.remove("required");
    targetInput.classList.remove("required");
  }
}

function handleBlur(e) {
  const targetInput = e.target;
  const parent = targetInput.parentNode;
  const inputValue = targetInput.value;
  const inputName = parent.childNodes[0];
  const inputMsg = parent.childNodes[1];
  if (!inputValue) {
    inputName.classList.remove("focus");
    inputMsg.classList.add("required");
    targetInput.classList.add("required");
  } else {
    inputMsg.classList.remove("required");
    targetInput.classList.remove("required");
  }
}

function handleFocus(e) {
  const parent = e.target.parentNode;
  const inputName = parent.childNodes[0];
  const inputMsg = parent.childNodes[1];
  inputName.classList.add("focus");
}

function init() {
  input.forEach((item) => {
    item.addEventListener("focus", handleFocus);
    item.addEventListener("blur", handleBlur);
    item.addEventListener("input", handleInput);
  });
}

if (form) {
  init();
}
