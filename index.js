;(function() {

    'use strict';
  
    var element, string, length;
  
    element = document.querySelector('.errorcode');
    string  = element.innerText;
    length  = string.length;
  setTimeout(timer, 5000);
    function timer(delay, repetitions) {
      var n, i;
      
      n = 0;
      i = window.setInterval(function () {
        element.innerText = string.substring(0, n);
        if (n++ === repetitions) {
          window.clearInterval(i);
        }
      }, delay+100);
    }
    timer(300, length);
  
  })();


  var firebaseConfig = {
    apiKey: "AIzaSyC3H8-RMCyw7LHZOLCsFxJE1zVKUzSPAI8",
    authDomain: "contact-form-416fb.firebaseapp.com",
    databaseURL: "https://contact-form-416fb.firebaseio.com",
    projectId: "contact-form-416fb",
    storageBucket: "contact-form-416fb.appspot.com",
    messagingSenderId: "658258587156",
    appId: "1:658258587156:web:1ce0dec57891c723678101",
    measurementId: "G-5RDMS3PGFH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messageRef = firebase.database().ref('messages');

//Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);


  function submitForm(e) {
    e.preventDefault();

    console.log(123)

    //Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, email, message);
  }

  //Function get get from values
function getInputVal(id) {
  return document.getElementById(id).value
}

function saveMessage(name, email, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message:message
  })
}


$(function(){

  $('#show').on('click',function(){        
      $('.card-reveal').slideToggle('slow');
  });
  
  $('.card-reveal .close').on('click',function(){
      $('.card-reveal').slideToggle('slow');
  });
});