import axios from "axios";

const commentGenerator = document.getElementById("commentGenerator");
const commentGeneratorBtns = document.querySelector("#commentGenerator .btns");
const cancelBtn = document.querySelector("#commentGenerator .btns .cancel-btn");
const submitBtn = document.querySelector("#commentGenerator .btns .submit-btn");
const commentorList = document.querySelector("#commentorList");
const commentorData = document.querySelector("#commentorData");

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

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/video/")[1];
  const response = await axios({
    method: "POST",
    url: `/api/${videoId}/comment`,
    data: { comment },
  });
  if (response.status === 200) {
    paintComment(comment);
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
};

if (commentGenerator) {
  init();
}
