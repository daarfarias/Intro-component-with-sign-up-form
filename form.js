function form() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", function (e) {
    const firstValue = firstName.value;
    const lastValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const regexEmail = /^\w*[@]\w*[.]\w*$/gi;

    if (!firstValue) {
      firstName.classList.add("error");
      document.querySelector(".firstName-error").style.display = "block";
      e.preventDefault();
    } else {
      firstName.classList.remove("error");
      document.querySelector(".firstName-error").style.display = "none";
    }

    if (!lastValue) {
      lastName.classList.add("error");
      document.querySelector(".lastName-error").style.display = "block";
      e.preventDefault();
    } else {
      lastName.classList.remove("error");
      document.querySelector(".lastName-error").style.display = "none";
    }

    if (!passwordValue) {
      password.classList.add("error");
      document.querySelector(".password-error").style.display = "block";
      e.preventDefault();
    } else {
      password.classList.remove("error");
      document.querySelector(".password-error").style.display = "none";
    }

    if (!regexEmail.test(emailValue)) {
      email.classList.add("error");
      document.querySelector(".email-error").style.display = "block";
      e.preventDefault();
    } else {
      email.classList.remove("error");
      document.querySelector(".email-error").style.display = "none";
    }
  });
}

window.addEventListener("DOMContentLoaded", form);
