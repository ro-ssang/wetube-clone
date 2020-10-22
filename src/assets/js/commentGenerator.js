import axios from "axios";

const commentGenerator = document.getElementById("commentGenerator");
const commentGeneratorBtns = document.querySelector("#commentGenerator .btns");
const cancelBtn = document.querySelector("#commentGenerator .btns .cancel-btn");
const submitBtn = document.querySelector("#commentGenerator .btns .submit-btn");
const commentorList = document.querySelector("#commentorList");
const commentorData = document.querySelector("#commentorData");
const deleteBtns = document.querySelectorAll(".deleteBtn");
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseNumber = () => {
  const number = parseInt(commentNumber.innerHTML, 10) - 1;
  if (number === 1) {
    commentNumber.innerHTML = `${number} Comment`;
    return;
  }
  commentNumber.innerHTML = `${number} Comments`;
};

const sendCommentId = async (commentId, element) => {
  const videoId = window.location.href.split("/video/")[1];
  console.log(videoId);
  const response = await axios({
    url: `/api/${videoId}/delete-comment`,
    method: "POST",
    data: { commentId },
  });
  if (response.status === 200) {
    element.remove();
    decreaseNumber();
  }
};

const clickDeleteBtn = (e) => {
  const icon = e.target;
  const delBtn = icon.parentNode;
  const actions = delBtn.parentNode;
  const metadataAndActions = actions.parentNode;
  const commentorInfo = metadataAndActions.parentNode;
  const li = commentorInfo.parentNode;
  const commentId = li.dataset.commentId;
  sendCommentId(commentId, li);
};

const paintComment = (comment) => {
  const li = document.createElement("li");
  const commentorInfo = document.createElement("div");
  const imageAnChor = document.createElement("a");
  const img = document.createElement("img");
  const metadataAndActions = document.createElement("div");
  const metadata = document.createElement("div");
  const nameAndCreatedDate = document.createElement("div");
  const nameAnchor = document.createElement("a");
  const name = document.createElement("span");
  const createdDate = document.createElement("span");
  const text = document.createElement("span");
  li.className = "commentor";
  commentorInfo.className = "commentor-info";
  imageAnChor.href = commentorData.dataset.link;
  img.src = commentorData.src;
  metadataAndActions.className = "metadata-and-actions";
  metadata.className = "metadata";
  nameAndCreatedDate.className = "name-and-created-date";
  nameAnchor.href = commentorData.dataset.link;
  name.className = "name";
  name.innerHTML = commentorData.dataset.commentorName;
  createdDate.className = "created-date";
  createdDate.innerHTML = "1 second ago";
  text.className = "comment";
  text.innerHTML = comment;
  nameAnchor.appendChild(name);
  nameAndCreatedDate.appendChild(nameAnchor);
  nameAndCreatedDate.appendChild(createdDate);
  metadata.appendChild(nameAndCreatedDate);
  metadata.appendChild(text);
  metadataAndActions.appendChild(metadata);
  imageAnChor.appendChild(img);
  commentorInfo.appendChild(imageAnChor);
  commentorInfo.appendChild(metadataAndActions);
  li.appendChild(commentorInfo);
  commentorList.prepend(li);
};

const increaseNumber = () => {
  const number = parseInt(commentNumber.innerHTML, 10) + 1;
  if (number === 1) {
    commentNumber.innerHTML = `${number} Comment`;
    return;
  }
  commentNumber.innerHTML = `${number} Comments`;
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/video/")[1];
  const response = await axios({
    method: "POST",
    url: `/api/${videoId}/comment`,
    data: { comment },
  });
  if (response.status === 200) {
    paintComment(comment);
    increaseNumber();
  }
};

const handleCommentSubmit = (e) => {
  e.preventDefault();
  const commentInput = commentGenerator.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const init = () => {
  commentGenerator.addEventListener("submit", handleCommentSubmit);
  deleteBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", clickDeleteBtn);
  });
};

if (commentGenerator) {
  init();
}
