//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBWxk_FwImdYVTxsA1kVm1TcsTPU5_Tqxk",
    authDomain: "kwitter-40582.firebaseapp.com",
    projectId: "kwitter-40582",
    storageBucket: "kwitter-40582.appspot.com",
    messagingSenderId: "227329587802",
    appId: "1:227329587802:web:89c26f40e62ff52cd43663",
    measurementId: "G-S9DF3SFQ41"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";
}