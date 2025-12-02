let budget = 100;
let product = 110;
let Waarde = document.getElementById("Waarde");

if (budget >= product) {
    Waarde.textContent = "Genoeg geld";
    Waarde.style.color = "green";
}
else {
    Waarde.textContent = "Weinig geld";
    Waarde.style.color = "red";
}



