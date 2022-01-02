
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBWxk_FwImdYVTxsA1kVm1TcsTPU5_Tqxk",
  authDomain: "kwitter-40582.firebaseapp.com",
  databaseURL: "https://kwitter-40582-default-rtdb.firebaseio.com",
  projectId: "kwitter-40582",
  storageBucket: "kwitter-40582.appspot.com",
  messagingSenderId: "227329587802",
  appId: "1:227329587802:web:89c26f40e62ff52cd43663",
  measurementId: "G-S9DF3SFQ41"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"addingRoomName"
  });         
          localStorage.setItem("room_name",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_name"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
    //Logout Function
    function logout(){
      window.location = "index.html";
    }
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
 
}