/*function loadDoc() {
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


    xhttp.open("GET", "https://parkouni.tk/api/Kunde?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password+"&name="+name+"&vorname="+vorname+"&adresse="+adresse+"&zahlungsart="+zahlungsart+"&email="+email);
   
}
*/


function dosomething(){
 
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    console.log("Username: " +username + "Passwor: "+password);
    

}

function getCookie() {
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];   
    console.log(whole_cookie);
    return whole_cookie;
}

dosomething();

window.onbeforeunload = function() { return "Your work will be lost."; };
