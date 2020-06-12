function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  //document.getElementById("info").innerHTML = this.responseText;
  }
  };
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value
    var name = document.getElementById("lastname").value;
    var vorname = document.getElementById("name").value;
    var adresse = document.getElementById("adresse").value;
  
  
    var zahlungsart = document.querySelector('input[name ="zahlungsart"]:checked').value;
  
  
  
    xhttp.open("POST", "http://parkouni.tk/api/Register?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password+"&name="+name+"&vorname="+vorname+"&adresse="+adresse+"&zahlungsart="+zahlungsart);
  
    console.log("shit");
  }
  
  function signup(){
      var p1 = document.getElementById("password").value;
      var p2 = document.getElementById("password1").value;
      if (p1 != p2 )
          document.getElementById("info").innerHTML="Passwort stimmt nicht überein" ;
        else
        loadDoc();
      
  }
  