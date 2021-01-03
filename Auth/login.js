  // Set the configuration for your app
  // TODO: Replace with your project's config object
  var config = {
    apiKey: "AIzaSyA9PSOmJuJIh7k_ZBl6HjVyCpuWv9QLZwE",
    authDomain: "test-4189f.firebaseapp.com",
    databaseURL: "https://.firebaseio.com",
    storageBucket: "test-4189f.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();
  
  function createacc() {
    var email = document.getElementById('SignEmail').value
    var password = document.getElementById('SignPassword').value
    var username = document.getElementById('username').value
    //create the account on Auth
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    
    //create database
    var email = document.getElementById('SignEmail')
    var ID2 = email.toString().replace('@', '')
   var ID = email.toString().replace('.', '')
  firebase.database().ref('users/'+ID).set({
    username: username
  });
  var message = document.getElementById('createAccMessage')
    message.innerHTML = " your account have been created, wait until we create all the databases and log in into your account!"
    message.style.opacity = 1;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
      var message = document.getElementById('createAccMessage')
    message.innerHTML = " something went wrong, "+errorMessage
    message.style.opacity = 1;
     message.style.backgroundColor = "#EF8787";
    message.style.color = "#EEEEEE";
  });

  }

function createDatabase(username) {
  var email = document.getElementById('SignPassword');
  var ID1 = email.replace("@", "")
  var ID = ID2.replace(".", "")
  firebase.database().ref('users/'+ID).set({
    username: username
  });
    var message = document.getElementById('logInMessage')
    message.innerHTML = " user authenticated, loggin in"
    message.style.opacity = 1;
}

function login() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => {
      var message = document.getElementById('logInMessage')
    message.innerHTML = " user authenticated, loggin in"
    message.style.opacity = 1;
    console.warn('signed in ')
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.warn(errorCode)
      var message = document.getElementById('logInMessage')
    message.innerHTML = " an error ocurred,"+errorMessage;
    message.style.opacity = 1;
    message.style.backgroundColor = "#EF8787";
    message.style.color = "#EEEEEE";
  });
  //TODO redirection or action when logged in
}
function writeUserData() {
  firebase.database().ref('users/test').set({
    username: ' email',
    email: '@.com',
    profile_picture : 'image'
  });
}