let drinkje = prompt("wat iemand wil drinken: cola, water of koffie)");
let icecek =  document.getElementById("boodschap");


if (drinkje === "cola") {
    icecek.textContent = "Je krijgt een blikje cola 🥤";
    icecek.style.color = "red";
}

else if (drinkje === "water") {
    icecek.textContent = "Goed bezig, lekker gezond 💧";
    icecek.style.color = "blue";
}

else if (drinkje === "koffie") {
    icecek.textContent = "Energie incoming ☕";
    icecek.style.color = "brown";
}

else {
    icecek.textContent = "Dat drankje is helaas op";
}