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
<<<<<<< HEAD
                document.getElementById('showName').innerHTML = Kunde.Vorname + " " + Kunde.Name ;
=======
                document.getElementById('showName').innerHTML = Kunde.Name;
>>>>>>> 6e501d05646b332e5343276cffd884dff9141068
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
                    "<td> <a class=\"btn btn-danger\" onclick=\"deleteVor('"+x.bis+"','"+x.von+"','"+x.Kennzeichen+"')\" >Stornieren</a></td> \n"+
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



function deleteVor(a, b, c) {
    console.log(a + " " + b + " " + c +" ");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {
            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                location.reload();
            }
                
        }
            else if(xhttp.readyState == 4 && xhttp.status != 200)
                 window.location.replace("https://parkouni.tk/404");
        };
  

    
    xhttp.open("DELETE", "https://parkouni.tk/api/Vorbestellung?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("von="+b+"&bis="+a+"&kenn="+c);

}




function getCookie() {
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];   
    console.log(whole_cookie);
    return whole_cookie;
}



function logout() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.replace("https://parkouni.tk/");
}

loadDoc();
loadVorbestellung();


