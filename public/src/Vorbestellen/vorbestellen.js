function ShowKalender(p) {
    var x = document.getElementById("calendarID"+p);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
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
function getcars() {
    var username = getCookie().split("&")[1];
    var password = getCookie().split("&")[0];
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            var data = JSON.parse(xhttp.responseText);
          var carselections =document.getElementsByClassName("car-select");
              console.log(data.Status);
            if(data.Status == true ){
                var Kunde = JSON.parse(data.Information);
                var inf= "";
                console.log(Kunde);
                for(let y of carselections)
                    for(let x of Kunde) {
                        y.innerHTML ="<option value=\""+x.Kennzeichen+"\">"+x.Kennzeichen+"</option>";
                    }

            }
            else
                for(let y of carselections)
                    y.innerHTML="<option value=\""+"Empty"+"\">"+"Carlos"+"</option>";
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200)
            window.location.replace("https://parkouni.tk/404");
    };


    xhttp.open("POST", "https://parkouni.tk/api/Fahrzeuge?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username="+username+"&password="+password);

}

loadDoc();
getcars();