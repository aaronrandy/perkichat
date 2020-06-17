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
                document.getElementById('showname').innerHTML = Kunde.Name;
            }
            else
                console.log(data.Information);
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
                //console.log(Vorbestellung.bis);
                //document.getElementById('showname').innerHTML = Kunde.Name;
                if(data.length > 0){
                    var temp = ";"
                    data.forEach(u){
                        temp+="<tr>";
                        temp+="<td>"+u.nummer+"</td>";
                        temp+="<td>"+u.Von+"</td>";
                        temp+="<td>"+u.Bis+"</td></tr>";
                    }
                    document.getElementById("vorbestellungfuellen").innerHTML = temp;
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

window.onbeforeunload = function() { return "Your work will be lost."; };
