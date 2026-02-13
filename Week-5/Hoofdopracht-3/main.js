const vraagInput = document.getElementById("vraagInput");
const voorspelKnop = document.getElementById("voorspelKnop");
const opnieuwKnop = document.getElementById("opnieuwKnop");

const startScherm = document.getElementById("startScherm");
const antwoordScherm = document.getElementById("antwoordScherm");

const toonVraag = document.getElementById("toonVraag");
const toonAntwoord = document.getElementById("toonAntwoord");
const waarschuwing = document.getElementById("waarschuwing");

let vorigeIndex = -1;

const antwoorden = [
    {tekst:"Ja, absoluut!", type:"positief"},
    {tekst:"Zeker weten.", type:"positief"},
    {tekst:"Grote kans van wel.", type:"positief"},
    {tekst:"Misschien...", type:"neutraal"},
    {tekst:"Vraag later opnieuw.", type:"neutraal"},
    {tekst:"Ik weet het niet.", type:"neutraal"},
    {tekst:"Waarschijnlijk niet.", type:"negatief"},
    {tekst:"Nee.", type:"negatief"},
    {tekst:"Zeker niet.", type:"negatief"},
    {tekst:"Dat ziet er slecht uit.", type:"negatief"}
];

function wisselScherm(naar) {
    startScherm.classList.remove("actief");
    antwoordScherm.classList.remove("actief");

    setTimeout(() => {
        naar.classList.add("actief");
    }, 200);
}

function randomAntwoord() {
    let index;

    do {
        index = Math.floor(Math.random() * antwoorden.length);
    } while (index === vorigeIndex);

    vorigeIndex = index;
    return antwoorden[index];
}

voorspelKnop.addEventListener("click", () => {
    const vraag = vraagInput.value.trim();

    if (vraag === "") {
        waarschuwing.textContent = "Typ eerst een geldige vraag!";
        return;
    }

    waarschuwing.textContent = "";

    const antwoord = randomAntwoord();

    toonVraag.textContent = vraag;
    toonAntwoord.textContent = antwoord.tekst;

    toonAntwoord.className = "";
    toonAntwoord.classList.add(antwoord.type);

    wisselScherm(antwoordScherm);
});

opnieuwKnop.addEventListener("click", () => {
    vraagInput.value = "";
    wisselScherm(startScherm);
});