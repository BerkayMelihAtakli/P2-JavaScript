function kleur_aanpassen() {
    const titel = document.getElementById("h1");
    titel.style.color = 'red';
    titel.textContent = "Inhoud aangepast!";
    console.log(titel)
}


document.getElementById("kleur_aanpassen()").onclick = function() {kleur_aanpassen()};