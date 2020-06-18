function showCalendar1() {
    var x = document.getElementById("calendarID");
    console.log("element " + x);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
