const loggedUser = document.getElementById("jsLoggedUser");
const dropDownBtn = document.querySelector("#jsLoggedUser .dropdown-btn");
const dropDownIcon = document.querySelector("#jsLoggedUser .dropdown-btn i");
const dropDownMenu = document.querySelector("#jsLoggedUser .dropdown");
const main = document.querySelector("main")

const hideMenu = () => {
    dropDownIcon.classList.add("fa-sort-down");
    dropDownIcon.classList.remove("fa-sort-up");
    dropDownMenu.classList.add("hidden");
    dropDownBtn.addEventListener("click", showMenu);
    dropDownBtn.removeEventListener("click", hideMenu);
    main.removeEventListener("click", hideMenu);
}

const showMenu = () => {
    dropDownIcon.classList.remove("fa-sort-down");
    dropDownIcon.classList.add("fa-sort-up");
    dropDownMenu.classList.remove("hidden");
    dropDownBtn.addEventListener("click", hideMenu);
    dropDownBtn.removeEventListener("click", showMenu);
    main.addEventListener("click", hideMenu);
}

const init = () => {
    dropDownBtn.addEventListener("click", showMenu);
}

if (loggedUser) {
    init();
}