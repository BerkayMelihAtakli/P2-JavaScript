let snacks = [];

const input = document.getElementById("snackInput");
const toevoegKnop = document.getElementById("toevoegKnop");
const verwijderKnop = document.getElementById("verwijderKnop");
const lijst = document.getElementById("snackLijst");
const totaal = document.getElementById("totaal");

function toonLijst() {
    lijst.innerHTML = "";

    snacks.forEach(function(snack) {
        const li = document.createElement("li");
        li.textContent = snack;
        lijst.appendChild(li);
    });

    totaal.textContent = "Totaal snacks: " + snacks.length;
}

toevoegKnop.addEventListener("click", function() {
    const waarde = input.value.trim();

    if (waarde === "") return;

    snacks.push(waarde);
    input.value = "";
    toonLijst();
});

verwijderKnop.addEventListener("click", function() {
    snacks.pop();
    toonLijst();
});