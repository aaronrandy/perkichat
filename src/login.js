function login() {
    var xhttp = new XMLHttpRequest();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true)
            {
                setCookie(data.Hash,document.getElementById("username").value);
                console.log("angemeldet");
                window.open("parkouni.tk/public/LoginStartseite.html",_self);
            }
            else
                document.getElementById("info").innerHTML =  data.Information;
        }
    };




    xhttp.open("POST", "http://parkouni.tk/api/Login?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password);




}
function setCookie(p,u) {
    document.cookie = "logindaten="+p+"&"+u+"; expires=Fri, 31 Dec 2038 23:59:59 UTC";

}
function getCookie() {
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];   
    console.log(whole_cookie);
    return whole_cookie;
}

try{
    if (getCookie() != ""){
        console.log(getCookie());
    } else {
        console.log("nicht angemeldet");
    }
}catch(e){

}

window.onbeforeunload = function() { return "Your work will be lost."; };
