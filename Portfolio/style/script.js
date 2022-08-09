var uemail = document.querySelector("#uemail");
var Name = document.querySelector("#uName");
var data = document.querySelector("#umessage");
var subject = document.querySelector("#usubject");
var number = document.querySelector("#Number");

function send() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "rachitsharma3642@gmail.com",
    Password: "D4C92304C51B30816966FFE4A7007596256E",
    To: "rachitsharma3642@gmail.com",
    From: `${uemail.value}`,
    Subject: `${subject.value}`,
    Body: `${data.value} Mail Sender ${uemail.value} Number ${number.value}
      Sent BY ${Name.value}`,
  }).then((message) => alert(`Your Email Is sent ${message}`));
  uemail.value = "";
  Name.value = "";
  data.value = "";
  subject.value = "";
  number.value = "";
}

var bttn = document.querySelector("#submission");
bttn.addEventListener("click", function (e) {
  e.preventDefault();
  send();
});
