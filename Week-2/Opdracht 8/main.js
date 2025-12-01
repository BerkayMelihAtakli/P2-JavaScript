function kleur_aanpassen() {
    const titel = document.getElementById("h1");
    titel.style.color = 'blue';
    titel.textContent = "tekst aangepast!";
    console.log(titel)
}

document.getElementById("h1").onclick = function() {kleur_aanpassen()};
