var hamburgerIcon = document.querySelector("#hamburger-icon");
var mobile = document.querySelector(".mobile");
var closeBtn = document.querySelector(".close-btn");

hamburgerIcon.addEventListener("click", function () {
  mobile.classList.toggle("mobile--active");
});
closeBtn.addEventListener("click", function () {
  mobile.classList.toggle("mobile--active");
});
