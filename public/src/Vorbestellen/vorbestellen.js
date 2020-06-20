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
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            var data = JSON.parse(xhttp.responseText);
            console.log(data.Status);
            if(data.Status == true){
                var Kunde = JSON.parse(data.Information)[0];
                console.log(Kunde.Name);
                document.getElementById('showname').innerHTML = Kunde.Vorname + " " + Kunde.Name;
            }
          
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200) 
         window.location.replace("https://parkouni.tk/404");
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
    try{
    var nameEquals ="logindaten=";
    var whole_cookie=document.cookie.split(nameEquals)[1].split(";")[0];
    }catch(e){
        window.location.replace("https://parkouni.tk/404");
    }
    return whole_cookie;
}



function vorbestellen(id){

    var carselections =document.getElementsByClassName("car-select")[id-1];
    var ken =  carselections.options[carselections.selectedIndex].value;
    var pkselections =document.getElementById("pk-select"+id);
    var pid =  pkselections.options[pkselections.selectedIndex].value;
    var start = document.getElementById("start"+id).value;
    var end = document.getElementById("end"+id).value;
    let xhttp5 = new XMLHttpRequest();
    xhttp5.onreadystatechange = function() {
        
        if (xhttp5.readyState == 4 && xhttp5.status == 200 ) {

            var data5 = JSON.parse(xhttp5.responseText);
      
              console.log(data5.Status);
            if(data5.Status == true ){
                window.location.replace("https://parkouni.tk/LoginStartseite");

            }
           
        }
        else if(xhttp5.readyState == 4 && xhttp5.status != 200){
            var info = "";
            if(info.includes("20001"))
                info = "Sie haben Hausverbot";
            else if (info.includes("20002"))
                    info = "Sie haben ein falsches von Datum eingegeben \n Sie Können nicht mehr als 30 TAge im voraus bestellen.";
            else if (info.includes("20003"))
                    info = "Man kan nicht länger als 31 Tage Vorbestellen ";
            else 
                window.location.replace("https://parkouni.tk/404");
           document.getElementById("warning"+id).innerHTML = info;
        }
            console.log(data5);
    };


    xhttp5.open("POST", "https://parkouni.tk/api/AddVorbestellung?apikey=101", true);
    xhttp5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp5.send("kennzeichen="+ken+"&date1="+start+"&date2="+end+"&phid="+id+"&pnr="+pid); 
    
}




function getPK1() {

    let xhttp = new XMLHttpRequest();
    var carselections =document.getElementsByClassName("car-select")[0];
    var ken =  carselections.options[carselections.selectedIndex].value;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            let data = JSON.parse(xhttp.responseText);
        
          var carselections1 =document.getElementById("pk-select1");
          document.getElementById("info1").innerHTML = data.Best;
              console.log(data.Status);
            if(data.Status == true ){
                let Kunde = JSON.parse(data.Information);

            
          //      console.log("AFFE::: " +carselections.id);
                    for(let x of Kunde) 
                        carselections1.innerHTML += "<option value=\""+x.Pnr+"\">"+x.Pnr+"</option> ";
                    

            }
            else
                 carselections1.innerHTML="<option value=\""+"Empty"+"\">"+"No Parkingspots avaible"+"</option>";
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200)
            window.location.replace("https://parkouni.tk/404");
    };


    xhttp.open("POST", "https://parkouni.tk/api/Parkplaetze"+"?apikey=101",true); 
    xhttp5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp5.send("kennzeichen="+ken+"&id="+1); 

}


function getPK2() {

    let xhttp = new XMLHttpRequest();
    var carselections =document.getElementsByClassName("car-select")[0];
    var ken =  carselections.options[carselections.selectedIndex].value;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            let data = JSON.parse(xhttp.responseText);
          var carselections2 =document.getElementById("pk-select2");
          document.getElementById("info2").innerHTML = data.Best;
              console.log(data.Status);
            if(data.Status == true ){
                let Kunde = JSON.parse(data.Information);

            
            //    console.log("AFFE::: " +carselections.id);
                    for(let x of Kunde) 
                        carselections2.innerHTML += "<option value=\""+x.Pnr+"\">"+x.Pnr+"</option> ";
                    

            }
            else
                 carselections2.innerHTML="<option value=\""+"Empty"+"\">"+"No Parkingspots avaible"+"</option>";
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200)
            window.location.replace("https://parkouni.tk/404");
    };


    xhttp.open("POST", "https://parkouni.tk/api/Parkplaetze"+"?apikey=101",true); 
    xhttp5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp5.send("kennzeichen="+ken+"&id="+1); 

}

function getPK3() {

    let xhttp = new XMLHttpRequest();
    var carselections =document.getElementsByClassName("car-select")[0];
    var ken =  carselections.options[carselections.selectedIndex].value;
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200 ) {

            let data = JSON.parse(xhttp.responseText);
          var carselections3 =document.getElementById("pk-select3");
            document.getElementById("info3").innerHTML = data.Best;
              console.log(data.Status);
            if(data.Status == true ){
                let Kunde = JSON.parse(data.Information);

            
           //     console.log("AFFE::: " +carselections.id);
                    for(let x of Kunde) 
                        carselections3.innerHTML += "<option value=\""+x.Pnr+"\">"+x.Pnr+"</option> ";
                    

            }
            else
                 carselections3.innerHTML="<option value=\""+"Empty"+"\">"+"No Parkingspots avaible"+"</option>";
        }
        else if(xhttp.readyState == 4 && xhttp.status != 200)
            window.location.replace("https://parkouni.tk/404");
    };


    xhttp.open("POST", "https://parkouni.tk/api/Parkplaetze"+"?apikey=101",true); 
    xhttp5.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp5.send("kennzeichen="+ken+"&id="+1); 

}


loadDoc();
getcars();


getPK1();
getPK2();
getPK3();


