import axios from "axios";

const commentForm = document.querySelector(".comments form");

const increaseCommentNumber = () => {
  const commentsCounter = document.querySelector(".comments__counter");
  let numberOfComments = parseInt(commentsCounter.innerText.split(" ")[0], 10);
  numberOfComments += 1;
  if (numberOfComments === 1) {
    commentsCounter.innerText = `${numberOfComments} Comment`;
  } else {
    commentsCounter.innerText = `${numberOfComments} Comments`;
  }
};

const addComment = (comment) => {
  const commentsList = document.querySelector(".comments ul");
  const commentorAvatar = commentForm.querySelector("img");
  const li = document.createElement("li");
  const img = document.createElement("img");
  const h4 = document.createElement("h4");
  const span = document.createElement("span");
  img.src = commentorAvatar.src;
  h4.innerText = commentorAvatar.alt;
  span.innerText = comment;
  li.appendChild(img);
  li.appendChild(h4);
  li.appendChild(span);
  commentsList.prepend(li);
  increaseCommentNumber();
};

const postComment = async (e) => {
  e.preventDefault();
  const commentInput = commentForm.querySelector("input");
  const videoId = window.location.href.split("/videos/")[1];
  const comment = commentInput.value;
  await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  addComment(comment);
  commentInput.value = "";
};

function init() {
  commentForm.addEventListener("submit", postComment);
}

init();
