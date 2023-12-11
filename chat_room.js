// Your web app's Firebase configuration

var firebaseConfig = {

  apiKey: "AIzaSyA_daDRxHPtT-mYrecyTiXx4irR3QmyTCc",

  authDomain: "lets-chat-2d0af.firebaseapp.com",

  databaseURL: "https://lets-chat-2d0af-default-rtdb.firebaseio.com",

  projectId: "lets-chat-2d0af",

  storageBucket: "lets-chat-2d0af.appspot.com",

  messagingSenderId: "629656865733",

  appId: "1:629656865733:web:7e3d8526c4d1e612a7d9ac"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat3.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat3.html";
}


function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
  

