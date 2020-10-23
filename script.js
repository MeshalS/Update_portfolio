const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('TextName');
const email = urlParams.get('email');

document.getElementById("namediv").innerHTML = `Name :${userName}`;
document.getElementById("emaildiv").innerHTML = `email :${email}`;