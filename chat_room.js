var firebaseConfig = {
    apiKey: "AIzaSyDwe0EFhcNSLSnjqxNJEX_OKLNoUr-g5kU",
    authDomain: "let-s-connect-80b80.firebaseapp.com",
    databaseURL: "https://let-s-connect-80b80-default-rtdb.firebaseio.com",
    projectId: "let-s-connect-80b80",
    storageBucket: "let-s-connect-80b80.appspot.com",
    messagingSenderId: "392083234969",
    appId: "1:392083234969:web:48c9a031ba735c12a65808"
  };
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("trending_rooms").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                row = "<div class= 'room_name' id= " + Room_names + " onclick = 'redirect_room(this.id)' >" + Room_names + "</div><hr>"
                document.getElementById("trending_rooms").innerHTML += row;
          });
    });
}
getData();

function redirect_room(rname){
    localStorage.setItem("new_room", rname);
    window.location= "chat_page.html";
}

function add_room() {
    new_room_name = document.getElementById("new_room").value;
    localStorage.setItem("new_room", new_room_name);
    firebase.database().ref("/").child(new_room_name).update({
          purpose: "adding new room"
    });
    window.location.replace("chat_page.html");
}

username = localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML = "Welcome " + username + "!";

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("new_room");
    window.location= "index.html";
}