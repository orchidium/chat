"use strict";

function profile(id) {
  var dialog = document.getElementById("profile");
  var closeButton = document.getElementById("profile-close");
  var frame = document.getElementById("profile-frame");

  dialog.classList.add("visible");
  frame.src = 'https://orchidfoss.github.io/profile/?user_id=' + id;

  closeButton.onclick = function () {
    dialog.classList.remove("visible");
  };
}
