
let get_userName = localStorage.getItem('username');
let userInfo = document.querySelector('#user_login p:first-child span');
let userLogin = document.getElementById('user_login');
let userNoLogin = document.getElementById('user_no_login');
if(get_userName){
    userInfo.innerHTML = get_userName.toUpperCase();
    userLogin.style.display = 'flex';
    userNoLogin.style.display = 'none';
}
else{
    userLogin.style.display = 'none';
    userNoLogin.style.display = 'flex';
}