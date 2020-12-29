


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
  
  //TEST API POST
 const data = { 'testusgmilcom': {'name': 9}};

fetch('https://test-4189f.firebaseio.com/users.json', {
  method: 'POST', // or 'PUT' or 'POST'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
}