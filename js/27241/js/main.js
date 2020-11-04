let paragraf = document.getElementById("tekst");
let add = document.querySelector("#dodaj");

 add.onclick = function() {
     paragraf.textContent = 'Imię ';
}

document.querySelector("#usun").onclick = function() {
    paragraf.textContent = '';
}