function loadDoc() {
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                var Kunde = JSON.parse(data.Information)[0];
                console.log(Kunde.Information);
                document.getElementById('name').innerHTML = "Name: "+ Kunde.Vorname + " " + Kunde.Name;
                document.getElementById('user').innerHTML = "Username: "+ Kunde.username;
                document.getElementById('address').innerHTML = "Adresse: "+Kunde.Adresse;
                document.getElementById('sub').innerHTML = "Subcription: "+ Kunde.Zahlungsart;
                document.getElementById('inf').innerHTML = "Information: "+ Kunde.Information;
                document.getElementById('email').innerHTML = "Email: "+ Kunde.email;
                document.getElementById('pay').innerHTML = "Payment Method: "+ Kunde.KontoTyp;
                
            }
            else if(xhttp.readyState == 4 && xhttp.status != 200)
                window.location.replace("https://parkouni.tk/404");
        }
    };

   
    xhttp.open("POST", "https://parkouni.tk/api/Kunde?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password);
   
}


function getcars() {
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true ){
                var Kunde = JSON.parse(data.Information);
                var inf= "";
                console.log(Kunde);
               
                    for(let x of Kunde) {
                  inf +=  x.Kennzeichen + " , ";
                 }
                
                document.getElementById('vec').innerHTML = "Vehicles: "+ inf;
                
            }
            else
                document.getElementById('vec').innerHTML = "Vehicles: No Vehicles";
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200)
         window.location.replace("https://parkouni.tk/404");
    };

 
    xhttp.open("POST", "https://parkouni.tk/api/Fahrzeuge?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password);
   
}

function addCar(){
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    var Kennzeichen = document.getElementById("ken").value;
    var width =  document.getElementById("width").value;
    var  length  = document.getElementById("length").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                window.location.reload();
  
                
            }
            else if(xhttp.readyState == 4 && xhttp.status != 200)
                alert("Something went wrong please try again.")
        }
    };

   
    xhttp.open("POST", "https://parkouni.tk/api/addFahrzeug?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password+"&kennzeichen="+Kennzeichen+"&laenge="+length+"&breite="+width);
}


function getCookie() {
    try{
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];
    }catch(e){
        window.location.replace("https://parkouni.tk/404");
    }
    return whole_cookie;
}

loadDoc();
getcars();