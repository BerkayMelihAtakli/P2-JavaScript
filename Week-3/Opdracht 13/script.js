let leeftijd = prompt("Wat is je leeftijd");
let bla = document.getElementById("h1");

if (leeftijd < 18) {
    bla.textContent = "Je mag hier nog niet naar binnen.";
    bla.style.color = 'red';
}

else if (leeftijd >= 18 && leeftijd <65 ) {
    bla.textContent = "Welkom, volwassen bezoeker!";
    bla.style.color = 'green';
}

else if (leeftijd >= 65) {
    bla.textContent = "Welkom, senioer bezoeker!";
    bla.style.color = 'green';
}

