var d = true ;
  window.onbeforeunload = function() { 
    if(d)
      return "Your work will be lost."; 
    else 
      return null;
    };
  
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 ) {
   
    var data = JSON.parse(xhttp.responseText);
    console.log(data.Status);
    if(data.Status == true){
        d = false;
       document.getElementById("info").innerHTML = "Erfolgreich Registriert";
       window.location.replace("https://parkouni.tk");
    }
    else 
      document.getElementById("info").innerHTML =  data.Information;
  }
  };
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("lastname").value;
    var vorname = document.getElementById("name").value;
    var adresse = document.getElementById("adresse").value;
    var email = document.getElementById("email").value;

    var zahlungsart = document.querySelector('input[name ="zahlungsart"]:checked').value;
  
  
  
    xhttp.open("POST", "https://parkouni.tk/api/Register?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password+"&name="+name+"&vorname="+vorname+"&adresse="+adresse+"&zahlungsart="+zahlungsart+"&email="+email);
 
  }
  
  function signup(){
      var p1 = document.getElementById("password").value;
      var p2 = document.getElementById("password2").value;
      if (p1 != p2 ){
          document.getElementById("info").innerHTML="Passwort stimmt nicht überein" ;
          return false ;
      }else{
        loadDoc();
      }
  }


  
  