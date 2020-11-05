let imie = document.getElementById('imie');
let nazw = document.getElementById('nazw');
let tel = document.getElementById('tel');

let button = document.querySelector('button');

button.onclick = function() {
    document.getElementById('name').textContent = imie.value;
    document.getElementById('surname').textContent = nazw.value;
    document.getElementById('phone').textContent = tel.value;
}