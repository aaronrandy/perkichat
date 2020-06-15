function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 ) {
   
    var data = JSON.parse(xhttp.responseText);
    console.log(data.Status);
    if(data.Status == true)
       document.getElementById("info").innerHTML = "Erfolgreich Registriert";
    else 
      document.getElementById("info").innerHTML =  data.Information;
  }
  };
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value
    var name = document.getElementById("lastname").value;
    var vorname = document.getElementById("name").value;
    var adresse = document.getElementById("adresse").value;
    var email = document.getElementById("email").value;

    var zahlungsart = document.querySelector('input[name ="zahlungsart"]:checked').value;
  
  
  
    xhttp.open("POST", "http://parkouni.tk/api/Register?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password+"&name="+name+"&vorname="+vorname+"&adresse="+adresse+"&zahlungsart="+zahlungsart+"&email="+email);
 
  }
  
  function signup(){
      var p1 = document.getElementById("password").value;
      var p2 = document.getElementById("password1").value;
      if (p1 != p2 ){
          document.getElementById("info").innerHTML="Passwort stimmt nicht überein" ;
          return false ;
      }else{
        loadDoc();
      }
  }

  function formSubmit(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 ) {
   
    var data = JSON.parse(xhttp.responseText);
    console.log(data.Status);
    if(data.Status == true)
       document.getElementById("info").innerHTML = "Erfolgreich Registriert";
    else {
      document.getElementById("info").innerHTML =  data.Information;
      return false ;
    }
  }
  };
  
  xhttp.open("POST", "http://parkouni.tk/api/Register?apikey=101", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
    request.send(new FormData(event.target)); // create FormData from form that triggered event
    event.preventDefault();
  }
  
  // and you can attach form submit event like this for example
  
  