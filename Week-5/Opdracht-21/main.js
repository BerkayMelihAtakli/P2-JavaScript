const activiteiten = ["wandelen", "mediteren", "een dutje doen"];
const themas = ["een kop thee", "je favoriete boek", "je telefoon uitzetten"];
let activieitdiv = document.getElementById("activiteitdiv");
let index = document.getElementById("index");

button.addEventListener("click", activiteit);


function activiteit() {

    const randomIndex = Math.floor(Math.random() * activiteiten.length);
    activieitdiv.textContent = activiteiten[randomIndex]; 
}