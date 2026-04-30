(function () {
  const form = document.getElementById("loginForm");
  const loginId = document.getElementById("loginId");
  const password = document.getElementById("password");
  const rememberMe = document.getElementById("rememberMe");
  const forgotPassword = document.getElementById("forgotPassword");
  const popup = document.getElementById("popup");
  const popupTitle = document.getElementById("popupTitle");
  const popupMessage = document.getElementById("popupMessage");
  const popupClose = document.getElementById("popupClose");

  const savedLoginId = localStorage.getItem("rav_login_id");
  if (savedLoginId) {
    loginId.value = savedLoginId;
  }

  function showPopup(title, message) {
    popupTitle.textContent = title;
    popupMessage.textContent = message;
    popup.hidden = false;
    popupClose.focus();
  }

  function closePopup() {
    popup.hidden = true;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (rememberMe.checked && loginId.value.trim()) {
      localStorage.setItem("rav_login_id", loginId.value.trim());
    } else {
      localStorage.removeItem("rav_login_id");
    }

    password.value = "";
    showPopup("Login Failed", "Invalid ID or password.");
  });

  forgotPassword.addEventListener("click", function () {
    showPopup("Forgot Password", "Please contact your admin to reset your password.");
  });

  popupClose.addEventListener("click", closePopup);

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      closePopup();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !popup.hidden) {
      closePopup();
    }
  });
})();
