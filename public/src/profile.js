function loadDoc() {
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                var Kunde = JSON.parse(data.Information);
                console.log(Kunde.Name);
                document.getElementById('namedata').innerHTML = Kunde.Vorname + " " + Kunde.Name;
                document.getElementById('userdata').innerHTML = Kunde.username;
                document.getElementById('adressdata').innerHTML = Kunde.Adresse;
                document.getElementById('subdata').innerHTML = Kunde.Zahlungsart;
                document.getElementById('infdata').innerHTML = Kunde.Information;
                document.getElementById('emaildata').innerHTML = Kunde.email;
                document.getElementById('paydata').innerHTML = "Empty";
            }
            else
                window.location.replace("https://parkouni.tk/404");
        }
    };

    console.log("Username: " +username + "Passwort: "+password);
    xhttp.open("POST", "https://parkouni.tk/api/Kunde?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password);
   
}


function getCookie() {
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];   
    console.log(whole_cookie);
    return whole_cookie;
}

loadDoc();