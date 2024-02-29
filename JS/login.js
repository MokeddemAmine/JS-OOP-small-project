 let loginForm = document.getElementById('login_form');
 let username = document.getElementById('username');
 let password = document.getElementById('password');

 loginForm.addEventListener('submit',checkUserLoged);

 function checkUserLoged(e){
    e.preventDefault();
    let usernames = JSON.parse(localStorage.getItem('usernames'));
    let passwords = JSON.parse(localStorage.getItem('passwords'));
    let emails = JSON.parse(localStorage.getItem('emails'));
    let UImages = JSON.parse(localStorage.getItem('UImages'));

    if(username.value && password.value){
        if(usernames && usernames.indexOf(username.value) !== -1){
            let indexOfUser = usernames.indexOf(username.value);
            if(passwords[indexOfUser] === password.value){
                localStorage.setItem('username',username.value);
                localStorage.setItem('password',password.value);
                localStorage.setItem('email',emails[indexOfUser]);
                localStorage.setItem('UserImage',UImages[indexOfUser]);
                setTimeout(()=> window.location = 'index.html',1000);
            }
            else{
                alert('password is wrong!!');
            }
        }
        else{
            alert('username not exist ?!');
        }
    }
    else{
        alert('please fill data !!');
    }
 }
