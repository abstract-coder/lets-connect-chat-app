// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyDwe0EFhcNSLSnjqxNJEX_OKLNoUr-g5kU",
    authDomain: "let-s-connect-80b80.firebaseapp.com",
    databaseURL: "https://let-s-connect-80b80-default-rtdb.firebaseio.com",
    projectId: "let-s-connect-80b80",
    storageBucket: "let-s-connect-80b80.appspot.com",
    messagingSenderId: "392083234969",
    appId: "1:392083234969:web:48c9a031ba735c12a65808"
  };

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



