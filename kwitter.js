function AddUser(){
  user_name = document.getElementById("input_1").value;
  localStorage.setItem("user_name_LS" , user_name)  ;
  window.location="kwitter_room.html";
}