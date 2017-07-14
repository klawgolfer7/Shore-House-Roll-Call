console.log("lets get this working!")

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA9f9-swbQH2prnoGjWPhhfuhOnVAB5JyE",
  authDomain: "shore-house-roll-call-db-9ffed.firebaseapp.com",
  databaseURL: "https://shore-house-roll-call-db-9ffed.firebaseio.com",
  projectId: "shore-house-roll-call-db-9ffed",
  storageBucket: "",
  messagingSenderId: "359042069125"
};
firebase.initializeApp(config);

var database = firebase.database();




// want to use this to get the following weekend from the date that we are currently on.  Having issues
var d = new Date();

document.getElementById("demo").innerHTML = Date();



