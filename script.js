function updateClock() {

    var endTime = new Date(2024, 5, 30, 18, 0, 0); 
    
    var now = new Date();
    var timeDiff = endTime - now;
    
    if (timeDiff > 0) {
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        var timeString = 
            (hours > 0 ? hours + "h " : "") + 
            (minutes > 0 ? minutes + "m " : "") + 
            seconds + "s";
            
        document.getElementById("clock").innerHTML = timeString;
    } else {
        document.getElementById("clock").innerHTML = "00h 00m 00s";
    }
}

setInterval(updateClock, 1000);
updateClock();

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("show");
    });
});




  import './pages/detalhesProduto';
import '../pages/score';
