// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//Login popup

const loginBtn = document.getElementById("login-btn")
const loginPopup = document.getElementById("login-popup");

loginBtn.onclick = () => {loginPopup.style.display = "block";}