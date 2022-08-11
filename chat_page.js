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

user_name= localStorage.getItem("user_name");
room_name = localStorage.getItem("new_room");


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("new_room");
    window.location= "index.html";
}

function send(){
  msg= document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    username: user_name,
    message: msg,
    likes: 0
  });
  document.getElementById("msg").value= "";
}