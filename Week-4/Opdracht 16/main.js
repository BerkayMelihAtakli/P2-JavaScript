let tekst = document.getElementById('knop');
tekst.addEventListener("click", verandertekst);
   tekst.style.color = "red";

function verandertekst() {
    tekst.textContent = "Doeg";
    tekst.style.color = "red";
    if(document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        tekst.innerHTML = "Hallo";
    } else{
        document.body.style.backgroundColor = "black";
        tekst.innerHTML = "Doeg";
    }
}
