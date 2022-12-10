const loginBtn = document.querySelector(".login-tab");
const signupBtn = document.querySelector(".signup-tab");

const loginSection = document.querySelector("#login-tab-content");
const signupSection = document.querySelector("#signup-tab-content");

signupBtn.addEventListener("click", function () {
  loginSection.classList.remove("active");
  signupSection.classList.add("active");
  document.getElementById("active1").className = "active3";
  document.getElementById("inactive1").className = "inactive4";
});

loginBtn.addEventListener("click", function () {
  signupSection.classList.remove("active");
  loginSection.classList.add("active");
  document.getElementById("inactive1").className = "active3";
  document.getElementById("active1").className = "inactive4";
});
