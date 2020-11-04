let paragraf = document.getElementById("opis");
let guzik = document.querySelector("button");

guzik.onclick = function() {
    paragraf.textContent= 'brakuje znacznika </h1> ';
}