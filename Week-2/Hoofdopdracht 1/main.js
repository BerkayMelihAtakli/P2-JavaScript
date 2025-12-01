function LightMode() {
const titel = document.getElementById("h1");
const LightMode = document.getElementById("LightMode");
const DarkMode = document.getElementById("DarkMode");
document.body.style.backgroundColor = 'orange';
titel.textContent = "Good Morningg ☀️!";
titel.style.color = 'black';
LightMode.style.backgroundColor = "orange";
LightMode.style.color = "black";
DarkMode.style.backgroundColor = "";
DarkMode.style.color = "";

}


function DarkMode() {
const titel = document.getElementById("h1");
const LightMode = document.getElementById("LightMode");
const DarkMode = document.getElementById("DarkMode");
document.body.style.backgroundColor = 'black';
titel.textContent = "Good Night 🌙!";
titel.style.color = 'white';
DarkMode.style.backgroundColor = "red";
DarkMode.style.color = "white";
LightMode.style.backgroundColor = "";
LightMode.style.color = "";
}



