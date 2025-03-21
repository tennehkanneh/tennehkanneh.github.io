const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");



function sendEmail() {
    const bodyMessage = ``;

    Email.send({
        Host : "s1.maildns.net",
        Username : "tennehkannehofficial@gmail.com",
        Password : "732FCF3EEBA08FB95AFC229AB866A6A19483",
        To : 'tennehkannehofficial@gmail.com',
        From : "tennehkannehofficial@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});