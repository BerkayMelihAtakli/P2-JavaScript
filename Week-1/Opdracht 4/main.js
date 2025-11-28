let geboortejaar = prompt("In welke jaar ben je geboren?");
let leeftijd = 2025 - parseInt(geboortejaar);
document.getElementById("p").innerHTML = `Je bent ongeveer ${leeftijd} jaar oud.`;
console.log("Leeftijd:", leeftijd);
