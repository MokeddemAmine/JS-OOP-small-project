
let user = document.getElementById('user');
let noUser = document.getElementById('no_user');
let imageUser = document.getElementById('image_user');
let userName = document.querySelector('#user_name span');
let logout = document.getElementById('logout');

if(localStorage.getItem('username')){
    user.style.display = 'flex';
    noUser.style.display = 'none';
    imageUser.setAttribute('src',localStorage.getItem('UserImage'));
    userName.innerHTML = localStorage.getItem('username');
}
else{
    user.style.display = 'none';
    noUser.style.display = 'flex';
}

logout.addEventListener('click',logoutUser);

function logoutUser(e){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    localStorage.removeItem('UserImage');
    setTimeout(()=> window.location = 'index.html',1000);
}




// the Sous Menu of the user login
let userMenu = document.getElementById('user_menu');
let userSousMenu = document.getElementById('user_sous_menu');

userMenu.addEventListener('click',showSousMenu);

function showSousMenu(e){
    if(userSousMenu.style.display === 'block')
        userSousMenu.style.display = 'none';
    else
        userSousMenu.style.display = 'block';
}


