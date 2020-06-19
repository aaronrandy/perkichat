function ShowKalender(p) {
    var x = document.getElementById("calendarID"+p);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}