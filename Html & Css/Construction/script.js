
console.log('hello');

const form = document.querySelector("form");
console.log(form);
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const number = document.getElementById("number");


function sendMail() {
  const body =` Name: ${name.value} <br> Email: ${email.value} <br> Phone Number: ${number.value} <br> Message : ${message.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "prasanthramamoorthy7@gmail.com",
    Password: "529F0845F35247E745378C060CDB266AB06B",
    To: email.value,
    From: "prasanthramamoorthy7@gmail.com",
    Subject: "Contacting Graha builders",
    Body: body,
  }).then((message) => alert(message));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMail();
});
