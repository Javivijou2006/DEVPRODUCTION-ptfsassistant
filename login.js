const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyA9PSOmJuJIh7k_ZBl6HjVyCpuWv9QLZwE',
  authDomain: 'test-4189f.firebaseapp.com',
  projectId: 'test-4189f'
});

var db = firebase.firestore();


function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    console.warn('signed in ')
    signin(email)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.warn(errorCode)
  });
  writeUserData(javivijou2006, testemail)
}