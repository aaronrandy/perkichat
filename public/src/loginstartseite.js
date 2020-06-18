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
                document.getElementById('showname').innerHTML = Kunde.Vorname + " " + Kunde.Name;;
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

function loadVorbestellung() {
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                var Vorbestellung = JSON.parse(data.Information);
                console.log(Vorbestellung);
                var von = data.split(",")[0];
                console.log(von);
                //document.getElementById('showname').innerHTML = Kunde.Name;
                if(data.length > 0){
                    var temp = ""
                    for(var i=0; i<Vorbestellung.length;i++){
                        var tr = "<tr>";
                        tr += "<td>"+Vorbestellung[i][0]+"</td>";
                        tr += "<td>"+Vorbestellung[i][1]+"</td>";
                        tr += "<td>"+Vorbestellung[i][2]+"</td>";
                        tr += "<td>"+Vorbestellung[i][3]+"</td>";
                        tr += "</tr>";
                        temp += tr;
                    }
                    document.getElementById("vorbestellungfuellen").innerHTML += temp;
                }
            }
            else
                console.log(data.Information);
        }
    };

    console.log("Username: " +username + "Passwort: "+password);
    xhttp.open("POST", "https://parkouni.tk/api/Vorbestellungen?apikey=101", true);
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
loadVorbestellung();


