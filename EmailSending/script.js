var emails = document.querySelector("#email");
var Name = document.querySelector("#name");
var data = document.querySelector("#text");

function send() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rachitsharma3642@gmail.com",
    Password: "D4C92304C51B30816966FFE4A7007596256E",
    To: "rachitsharmarashr@gmail.com",
    From: "rachitsharmarashr@gmail.com",
    Subject: `Mail From ${Name.value}`,
    Body: `${data.value} Mail Sender ${emails.value}`,
  }).then((message) => alert(`Your Email Is sent ${message}`));
  emails.value = " ";
  Name.value = " ";
  data.value = " ";
}

var bttn = document.querySelector("#submit");
bttn.addEventListener("click", function () {
  console.log(emails.value);
  console.log("Clicked");
  send();
});
