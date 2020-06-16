function login() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true)
            {
                setCookie();
                alert("angemeldet");
            }
            else
                document.getElementById("info").innerHTML =  data.Information;
        }
    };

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    xhttp.open("POST", "http://parkouni.tk/api/Login?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password);




}
function setCookie(p,u) {
    document.cookie = "logindaten="${p}&${u}"; expires=Fri, 31 Dec 2038 23:59:59 UTC";

}
function getCookie() {
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];
    alert("Hallo");
    return whole_cookie;
}
/*const init=function(){
    if (getCookie() != ""){
        alert("Adam stnkt ne luka");
    } else {
        alert("biite anmelden");
    }
}
*/

