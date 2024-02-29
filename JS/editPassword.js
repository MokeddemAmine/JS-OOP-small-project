
// variables from the local Storage :

let usernames = JSON.parse(localStorage.getItem('usernames'));
let username = localStorage.getItem('username');
let indexOfUser = usernames.indexOf(username);

let passwords = JSON.parse(localStorage.getItem('passwords'));

// variables of the page html :

let password = document.getElementById('password');
let newPassword = document.getElementById('new_password');
let confirmNewPassword = document.getElementById('confirm_new_password');

let editPasswordForm = document.getElementById('edit_password_form');

// events :

editPasswordForm.addEventListener('submit',changePassword);

// functions :

function changePassword(e){
    e.preventDefault()
    if(password.value && newPassword.value && confirmNewPassword){
        if(passwords[indexOfUser] === password.value){
            if(newPassword.value === confirmNewPassword.value){
                passwords[indexOfUser] = newPassword.value;
                localStorage.setItem('passwords',JSON.stringify(passwords));
                localStorage.setItem('password',newPassword.value);

                setTimeout(()=> window.location = 'profile.html',1000);
            }
            else{
                alert('please enter the same password in new and confirm passsword')
            }
        }
        else{
            alert('your current password is wrong!!');
        }
    }
    else{
        alert('please fill Data !!');
    }
}


