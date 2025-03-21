const form = document.querySelector("form");
const fullName = document.querySelector("name");
const email = document.querySelector("email");
const subject = document.querySelector("subject");
const message = document.querySelector("message");



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