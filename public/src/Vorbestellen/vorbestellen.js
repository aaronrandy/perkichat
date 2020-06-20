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
                document.getElementById('showname').innerHTML = Kunde.Vorname + " " + Kunde.Name;
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
                        y.innerHTML +="<option value=\""+x.Kennzeichen+"\">"+x.Kennzeichen+"</option>";
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
function getCookie() {
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];
    console.log(whole_cookie);
    return whole_cookie;
}



function vorbestellen(id){

    var carselections =document.getElementsByClassName("car-select")[id-1];
    var ken =  carselections.options[carselections.selectedIndex].value;
    var pkselections =document.getElementsByClassName("pk-select")[id-1];
    var pid =  pkselections.options[pkselections.selectedIndex].value;
    var start = document.getElementById("start"+id).value;
    var end = document.getElementById("end"+id).value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        var data = JSON.parse(xhttp.responseText);
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

           
      
              console.log(data.Status);
            if(data.Status == true ){
                    console.log(data);

            }
           
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200)
            console.log(data);
    };


    xhttp.open("POST", "https://parkouni.tk/api/AddVorbestellung?apikey=101", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("kennzeichen="+ken+"&date1="+start+"&date2="+end+"&phid="+id+"&pnr="+pid); 
    
}

function getPK(x) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            var data = JSON.parse(xhttp.responseText);
          var d =document-getElementById(x);
              console.log(data.Status);
            if(data.Status == true ){
                var Kunde = JSON.parse(data.Information);
              
                    for(let f of Kunde) 
                        d.innerHTML +="<option value=\""+f.PNr+"\">"+f.Pnr+"</option>";
                    

            }
            else
                 d.innerHTML="<option value=\""+"Empty"+"\">"+"No Parkingspots avaible"+"</option>";
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200)
            window.location.replace("https://parkouni.tk/404");
    };


    xhttp.open("GET", "https://parkouni.tk/api/Parkplaetze/"+(x+1)+"?apikey=101", true); 
    xhttp.send();

}
for(let a = 1 ; a <= 3 ; a++){
    getPK("pk-select"+a);
    console.log(a);
}
loadDoc();
getcars();