const likeBtn = document.querySelector(".action-btns button");

function registerLike() {
  const videoId = window.location.href.split("/videos/")[1];
  const likeIcon = likeBtn.childNodes[0];
  const likeNumber = likeBtn.childNodes[1];

  if (likeIcon.classList.contains("fas")) {
    fetch(`/api/${videoId}/like-down`, {
      method: "POST",
    });
    likeIcon.classList.add("far");
    likeIcon.classList.remove("fas");
    likeNumber.innerText = parseInt(likeNumber.innerText, 10) - 1;
  } else {
    fetch(`/api/${videoId}/like-up`, {
      method: "POST",
    });
    likeIcon.classList.add("fas");
    likeIcon.classList.remove("far");
    likeNumber.innerText = parseInt(likeNumber.innerText, 10) + 1;
  }
}

function init() {
  likeBtn.addEventListener("click", registerLike);
}

init();
