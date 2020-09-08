function mainFunction() {
    var x = document.getElementById("topnav");
    if(x.classname === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}