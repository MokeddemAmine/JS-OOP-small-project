// variables of data from localStorage

let usernames = JSON.parse(localStorage.getItem('usernames'));
let emails = JSON.parse(localStorage.getItem('emails'));
let UImages = JSON.parse(localStorage.getItem('UImages'));

// variables of the current page
let userImage = document.getElementById('user_image');
let userImageEdit = document.getElementById('user_image_edit');
let username = document.getElementById('username');
let email = document.getElementById('email');
let editProfileForm = document.getElementById('edit_profile_form');
let myEditImage = localStorage.getItem('UserImage');

userImage.setAttribute('src',localStorage.getItem('UserImage'));
username.value = localStorage.getItem('username');
email.value = localStorage.getItem('email');

// Events :
userImageEdit.addEventListener('change',uploadImage);
editProfileForm.addEventListener('submit',editProfile);


// Functions :

function editProfile(e){
    e.preventDefault()
    if(username.value && email.value){
        let indexOfUser = usernames.indexOf(localStorage.getItem('username'));
        if(usernames.indexOf(username.value) === indexOfUser || usernames.indexOf(username.value) === -1){
            if(emails.indexOf(email.value) === indexOfUser || emails.indexOf(email.value) === -1){
                usernames[indexOfUser]=username.value;
                emails[indexOfUser]=email.value;
                UImages[indexOfUser]=myEditImage;
                localStorage.setItem('usernames',JSON.stringify(usernames));
                localStorage.setItem('emails',JSON.stringify(emails));
                localStorage.setItem('UImages',JSON.stringify(UImages))
                localStorage.setItem('username',username.value);
                localStorage.setItem('email',email.value);
                localStorage.setItem('UserImage',myEditImage);

                setTimeout(()=> window.location = 'profile.html',1000);
            }
            else{
                alert('email has already exist for another user !!!');
            }
            
        }
        else{
            alert('username exist for another user !!!');
        }
        
    }
    else
        alert('please fill data');
}

function uploadImage(){
    let file = this.files[0];
    let format = ['image/jpeg','image/png'];

    if(file){
        if(format.indexOf(file.type) === -1){
            alert('type of image not supported !!!, only png or jpeg');
            this.value='';
            return;
        }
        if(file.size > 0.5* 1024*1024){
            alert('size of this image not supportd (< 512km)');
            this.value='';
            return;
        }
        getImageBase64(file);
    }
    else{
        userImage.setAttribute('src',localStorage.getItem('UserImage'))
    }
}
function getImageBase64(file){
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
        myEditImage = reader.result;
        userImage.setAttribute('src',myEditImage)
    }
    reader.onerror = function(){
        alert('error of upload image !!');
    }
}
