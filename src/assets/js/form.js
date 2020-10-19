const form = document.getElementById("jsForm");
const inputs = document.querySelectorAll("#jsForm .input");
const textarea = document.querySelector("#jsForm .textarea");

const handleInput = (e) => {
  const input = e.target;
  const inputValue = input.value;
  const inputContainer = input.parentNode;
  const title = inputContainer.childNodes[0];
  const msg = inputContainer.childNodes[1];

  if (inputValue) {
    input.classList.remove("err");
    msg.classList.add("hidden");
    msg.classList.remove("err");
  } else {
    input.classList.add("err");
    msg.innerHTML = "Required";
    msg.classList.remove("hidden");
    msg.classList.add("err");
  }
};

const handleBlur = (e) => {
  const input = e.target;
  const inputValue = input.value;
  const inputContainer = input.parentNode;
  const title = inputContainer.childNodes[0];
  const msg = inputContainer.childNodes[1];

  if (inputValue) {
    input.classList.remove("err");
    msg.classList.add("hidden");
    msg.classList.remove("err");
  } else {
    input.classList.add("err");
    msg.innerHTML = "Required";
    msg.classList.remove("hidden");
    msg.classList.add("err");
  }
};

const handleFocus = (e) => {
  const input = e.target;
  const inputContainer = input.parentNode;
  const title = inputContainer.childNodes[0];
  const msg = inputContainer.childNodes[1];

  title.classList.remove("large");
};

const init = () => {
  inputs.forEach((input) => {
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
    input.addEventListener("input", handleInput);
  });
  textarea.addEventListener("focus", handleFocus);
  textarea.addEventListener("blur", handleBlur);
  textarea.addEventListener("input", handleInput);
};

if (form) {
  init();
}
