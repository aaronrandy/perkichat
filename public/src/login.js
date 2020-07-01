function login() {
    var xhttp = new XMLHttpRequest();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!username|| username.trim().length === 0 && !password|| password.trim().length === 0  ){
        document.getElementById("info").innerHTML =  "Empty Username or Password";
    }else {
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true)
            {
                setCookie(data.Hash,document.getElementById("username").value);
                console.log("angemeldet");
                window.location.replace("https://parkouni.tk/LoginStartseite");;
            }
            else
                document.getElementById("info").innerHTML =  data.Information;
        }
    };




    xhttp.open("POST", "https://parkouni.tk/api/Login?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password);

    }


}
function setCookie(p,u) {
    document.cookie = "logindaten="+p+"&"+u+"; expires=Fri, 31 Dec 2038 23:59:59 UTC";

}


try{
    if (getCookie() != ""){
        console.log(getCookie());
    } else {
        console.log("nicht angemeldet");
    }
}catch(e){

}


