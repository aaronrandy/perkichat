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
                setCookie(document.getElementById("password").value,document.getElementById("username").value);
                alert("angemeldet");
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
    alert(whole_cookie);
    return whole_cookie;
}

    if (getCookie() != ""){
        alert("Adam stnkt ne luka");
    } else {
        alert("biite anmelden");
    }



