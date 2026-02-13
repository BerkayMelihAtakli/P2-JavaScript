const knop = document.getElementById("begroetKnop");
const input = document.getElementById("naamInput");
const tekst = document.getElementById("begroeting");

knop.addEventListener("click", function () {
    const naam = input.value.trim();

    if (naam === "") {
        tekst.textContent = "Typ eerst je naam!";
        return;
    }

    tekst.textContent = "Hallo, " + naam + "!";
    input.value = ""; 
});