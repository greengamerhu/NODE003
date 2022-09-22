import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

import './main.css';

document.getElementById("uzenet").addEventListener("click", nyeremeny)

function nyeremeny() {
    document.getElementById("nyeremenyhelye").style.display = "block";
}

