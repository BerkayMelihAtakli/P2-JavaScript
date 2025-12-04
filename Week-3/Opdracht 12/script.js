let product = prompt("Hoeveel kost het product dat je wilt kopen");
let budget = 50;
let Waarde = document.getElementById("h1");

if (budget >= product) {
    Waarde.textContent = "Genoeg geld";
    Waarde.style.color = "green";
}

else {
    Waarde.textContent = "Weinig geld";
    Waarde.style.color = "red";
}
