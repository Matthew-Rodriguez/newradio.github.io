
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

      // Show alert
  document.querySelector('.alert').style.display = 'unset';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

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

