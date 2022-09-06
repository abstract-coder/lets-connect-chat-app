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

function getData() {

  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; 
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key; 
              childData = childSnapshot.val(); 
              if (childKey != "purpose") {
                    firebase_message_id = childKey;
                    message_data = childData;
                    //Start code
                    user_name= message_data['username'];
                    message = message_data['message'];
                    likes = message_data['likes'];

                    name_tag = "<h3> " + user_name + " </h3> <br>";

                    message_tag = "<h4>" + message + "</h4> <br>";

                    like_button = "<button class = 'btn btn-primary'  id = " + firebase_message_id + " value = " + likes + " onclick = 'add_likes(this.id)'><span class = 'glyphicon glyphicon-thumbs-up'> </span> Likes : "+ likes + " </button> <hr>";

                    output_data = name_tag + message_tag + like_button;

                    document.getElementById("output").innerHTML += output_data;

                    //End code
              }
        });
  });
}
getData();

function add_likes(button_id){

  like_count = document.getElementById(button_id).value;

  updated_likes = Number(like_count) + 1;

  firebase.database().ref(room_name).child(button_id).update({

        likes: updated_likes
  });

}
