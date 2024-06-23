// /*!
// =========================================================
// * Meyawo Landing page
// =========================================================

// * Copyright: 2019 DevCRUD (https://devcrud.com)
// * Licensed: (https://devcrud.com/licenses)
// * Coded by www.devcrud.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // smooth scroll
// $(document).ready(function(){
//     $(".navbar .nav-link").on('click', function(event) {

//         if (this.hash !== "") {

//             event.preventDefault();

//             var hash = this.hash;

//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 700, function(){
//                 window.location.hash = hash;
//             });
//         } 
//     });
// });

// // navbar toggle
// $('#nav-toggle').click(function(){
//     $(this).toggleClass('is-active')
//     $('ul.nav').toggleClass('show');
// });


// var nameError = document.getElementById('nameError')
// var emailError = document.getElementById('emailError')
// var commentError = document.getElementById('commentError')
// var submitError = document.getElementById('submit-form')
// function validateName(){
//     var nameField = document.getElementById("name").value

//     if(!nameField.trim()){

//         nameError.innerHTML="Name is required";
  
//         return false;
  
//     }
  
//     if(!nameField.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/) ){
//         nameError.innerHTML="Write fullname";
  
//         return false;
//     }else{
//         nameError.innerHTML='<i class="fa-solid fa-check"></i>';
//         return true; 
//     }
// }

  
// function validateEmail(){

//     var emailField = document.getElementById('email').value;
    
//     if(emailField.length==0)
//     {
//         emailError.innerHTML="Email is required";
//         return false;
//     }
  
//    if(!emailField.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
//     emailError.innerHTML="invalid email";
//     return false;
//   }else{
//     emailError.innerHTML='<i class="fa-solid fa-check"></i>';
//     return true;
//   }
//   }

//   function validateComment(){

//     var comment = document.getElementById('comment').value;
  
//     var required =50;
  
//     var left = required- comment.length;
  
//     if(left > 0){
//         commentError.innerHTML = left + 'more characters required';
//     return false;
//     }else{
//         commentError.innerHTML ='<i class="fa-solid fa-check"></i>';
//         return true;
//     }
    
  
//   }

//   function handleSubmit()
// {
// if(!validateName()  || !validateEmail()||!validateComment()){
    
//     submitError.innerHTML="Please  fill all the fields ";
//     return false;    
// }

// }


var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var commentError = document.getElementById('commentError');
var submitError = document.getElementById('submitError');

function validateName() {
    var nameField = document.getElementById("name").value.trim();

    if (!nameField) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!nameField.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-check success"></i>';
        return true;
    }
}

function validateEmail() {
    var emailField = document.getElementById('email').value.trim();

    if (emailField.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if (!emailField.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    } else {
        emailError.innerHTML = '<i class="fa-solid fa-check success"></i>';
        return true;
    }
}

function validateComment() {
    var comment = document.getElementById('comment').value.trim();
    var required = 50;
    var left = required - comment.length;

    if (left > 0) {
        commentError.innerHTML = left + ' more characters required';
        return false;
    } else {
        commentError.innerHTML = '<i class="fa-solid fa-check success"></i>';
        return true;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    if (!validateName() || !validateEmail() || !validateComment()) {
        submitError.innerHTML = "Please fill all the fields correctly";
        return false;
    }

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzYe65GztHLiJTcmtrD-Mo5XvqdXgAkqH8m3m-xlsHvK42rE7kL_w-BiqGBfbS9N_FYlg/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function(response) {
            alert("Form submitted successfully");
            window.location.reload();
        },
        error: function(err) {
            alert("Something went wrong");
        }
    });
    return true;
}
