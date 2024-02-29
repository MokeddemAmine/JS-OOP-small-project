
// User Image
let userImage = document.getElementById('user_image');

userImage.setAttribute('src',localStorage.getItem('UserImage'));

// user information 
let username = document.querySelector('#username');
let email = document.querySelector('#email');

let get_username = localStorage.getItem('username');
let get_email = localStorage.getItem('email');

username.innerHTML = get_username;
email.innerHTML = get_email;

// button edit profile and password 

let editProfileBtn = document.getElementById('edit_profile');
let editPasswordBtn = document.getElementById('edit_password');

editProfileBtn.addEventListener('click',function(){
    window.location = 'editProfile.html';
})
editPasswordBtn.addEventListener('click',function(){
    window.location = 'editPassword.html';
})