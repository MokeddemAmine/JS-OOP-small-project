let userName = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let registerForm = document.getElementById('register_form');

registerForm.addEventListener('submit',saveUserData);

function saveUserData(e){
    e.preventDefault();
    if(userName.value && password.value && email.value){
        if(!localStorage.getItem('usernames')){
            localStorage.setItem('usernames',JSON.stringify([userName.value]));
            localStorage.setItem('passwords',JSON.stringify([password.value]));
            localStorage.setItem('emails',JSON.stringify([email.value]));
            localStorage.setItem('UImages',JSON.stringify(['images/user.png']));
            setTimeout(()=> window.location = 'login.html',1000);
        }
        else{
            let currentUserNames = JSON.parse(localStorage.getItem('usernames'))
            let currentPasswords = JSON.parse(localStorage.getItem('passwords'))
            let currentEmails = JSON.parse(localStorage.getItem('emails'));
            let currentUImages = JSON.parse(localStorage.getItem('UImages'));

            if(currentUserNames.indexOf(userName.value) !== -1){
                alert('username has already exists , tape another one please .');
            }
            else if(currentEmails.indexOf(email.value) !== -1){
                alert('email has already exist , tape another one please .');
            }
            else{
                currentUserNames.push(userName.value);
                currentPasswords.push(password.value);
                currentEmails.push(email.value);
                currentUImages.push('images/user.png');
                localStorage.setItem('usernames',JSON.stringify(currentUserNames))
                localStorage.setItem('passwords',JSON.stringify(currentPasswords));
                localStorage.setItem('emails',JSON.stringify(currentEmails));
                localStorage.setItem('UImages',JSON.stringify(currentUImages));
                setTimeout(()=> window.location = 'login.html',1000);
            }
        }

        
    }
    else{
        alert('please fill Data!!');
    }
}