const form = document.querySelector(".login-form");
form.addEventListener("submit", onclick);

function onclick(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    const data = {
      email: email.value,
      password: password.value,
    };
    form.reset();
    console.log(data);
  }
}
