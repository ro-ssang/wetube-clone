const commentGenerator = document.getElementById("commentGenerator");
const commentGeneratorBtns = document.querySelector("#commentGenerator .btns");
const cancelBtn = document.querySelector("#commentGenerator .btns .cancel-btn");
const submitBtn = document.querySelector("#commentGenerator .btns .submit-btn");

const hideBtns = (e) => {
    e.preventDefault();
    e.stopPropagation();
    commentGeneratorBtns.classList.add("hidden");
    cancelBtn.removeEventListener("click", hideBtns);
}

const showBtns = () => {
    commentGeneratorBtns.classList.remove("hidden");
    cancelBtn.addEventListener("click", hideBtns);
    submitBtn.addEventListener("click", hideBtns);
}

const init = () => {
    commentGenerator.addEventListener("click", showBtns);
}

if(commentGenerator){
    init();
}

