function verberg_titel() {
const titel = document.getElementById("h1");
titel.style.display = 'none';
}

document.getElementById("verberg_titel").onclick = function() {verberg_titel()};

function toon_tekst() {
const tekst = document.getElementById("h1");
tekst.style.display = 'block';
tekst.style.backgroundColor = 'yellow';
}

document.getElementById("toon_tekst").onclick = function() {toon_tekst()};