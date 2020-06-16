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


    xhttp.open("POST", "https://parkouni.tk/api/Register?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password+"&name="+name+"&vorname="+vorname+"&adresse="+adresse+"&zahlungsart="+zahlungsart+"&email="+email);

}


function getCookie() {
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];
    console.log(whole_cookie);
    return whole_cookie;
}

function readCookie(cname){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i=0; i < ca.length;i++){
        var c = ca[i];
        while(c.charAt(0) === ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) === 0){
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}



window.onbeforeunload = function() { return "Your work will be lost."; };
