const body = document.querySelector(".body");
const btn = document.querySelector(".js-btn");
const outputText = document.querySelector(".js-output");
const title = document.querySelector(".js-title");

const SERVER_SUCCESS_RESPONSE_CLASS = "body-response";

btn.addEventListener("click", () => {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((data) => {
      outputText.innerHTML = data.activity;
      title.innerHTML = "Hooray, it's not boring now 🔥";
      body.classList.add(SERVER_SUCCESS_RESPONSE_CLASS);
    });
});
