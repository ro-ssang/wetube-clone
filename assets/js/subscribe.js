const subscribeBtn = document.querySelector(".user-block__btns button");

function subscribe() {
  const videoId = window.location.href.split("/videos/")[1];
  if (subscribeBtn.classList.contains("active")) {
    fetch(`/api/${videoId}/cancel`, {
      method: "POST",
    });
    subscribeBtn.innerText = "Subscribe";
    subscribeBtn.classList.remove("active");
  } else {
    fetch(`/api/${videoId}/subscribe`, {
      method: "POST",
    });
    subscribeBtn.innerText = "Subscribing";
    subscribeBtn.classList.add("active");
  }
}

function init() {
  subscribeBtn.addEventListener("click", subscribe);
}

init();
