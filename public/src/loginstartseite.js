function loadDoc() {
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                var Kunde = JSON.parse(data.Information)[0];
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
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {
            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                var Vorbestellung = JSON.parse(data.Information);
                     console.log(Vorbestellung);
                     console.log(Vorbestellung);
                var tabele  = document.getElementById('vorbestellungfuellen');
                    for(let x of Vorbestellung) {
                    tabele.innerHTML += '  <tr> \n'+
                    ' <td>'+x.von+'</td> \n'+
                    ' <td>'+x.bis+'</td> \n'+
                    ' <td>'+x.Kennzeichen+'</td> \n'+
                    ' <td>'+x.Bemerkung+'</td> \n'+
                        '<td><button type="button" class="btn btn-primary">Bearbeiten</button><button type="button" onclick="deleteVorbestellung('+x.von+', '+x.bis+', '+x.Kennzeichen+')" class="btn btn-danger">Stornieren</button></td>'+
                    '</tr> \n' ;
                     }
            }
            else if(xhttp.readyState == 4 && xhttp.status != 200)
             window.location.replace("https://parkouni.tk/404");
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

function deleteVorbestellung(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                location.reload();
            }
            else
                window.location.replace("https://parkouni.tk/404");
        }
    };

    console.log("von="+von+"&bis="+bis+"&Kennzeichen="+Kennzeichen);
    xhttp.open("POST", "https://parkouni.tk/api/Vorbestellung?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("von="+von+"&bis="+bis+"&Kennzeichen="+Kennzeichen);
}

function logout() {
    document.cookie = name+'=; Max-Age=-99999999;';
    window.location.replace("https://parkouni.tk/");
}


loadDoc();
loadVorbestellung();


