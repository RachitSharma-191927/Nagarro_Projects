var emails=document.querySelector("#email");
var Name=document.querySelector("#name");
var data=document.querySelector("#text");



function send(){Email.send({
    Host : "smtp.elasticemail.com",
    Username : "rachitsharma3642@gmail.com",
    Password : "B92B2925FB99D37BDE914A374E1D517F8EEA",
    To : 'rachitsharma3642@gmail.com',
    From : 'rachitsharma3642@gmail.com',
    Subject : `Mail From ${Name.value}`,
    Body : `${data.value}`
}).then(
  (message) => alert(`Your Email Is sent ${message}`)
)
emails.value=" ";
Name.value=" ";
data.value=" ";
}


var bttn = document.querySelector("#submit")
bttn.addEventListener('click',function(){
    console.log(emails.value)
    console.log("Clicked");
    send();
});

