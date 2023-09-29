let fullName;
let email;
let phoneNumber;
let dob;
let gender;

function onFullNameChangeHandler(event) {
    console.log(event.target.value);
}
function emailChangeHandler(event) {
    console.log(event.target.value);
    email = event.target.value;
}
function phoneNumberChangeHandler(event) {
    console.log(event.target.value);
    phoneNumber = event.target.value;
}
function dobChangeHandler(event) {
    console.log(event.target.value);
    dob = event.target.value;
}
function maleFemaleOthersChangeHandler(event) {
    gender = event.target.value;
    console.log(event.target.value);
}
function onSummitHandler(event) {
    console.log(event.target.value);
    event.preventDefault();
}
console.log(fullName,email,phoneNumber,dob,gender)