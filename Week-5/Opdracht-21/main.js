const adviezen = [
    "wandelen met een kop thee",
    "mediteren met je favoriete boek",
    "een dutje doen met je telefoon uitzetten"
];

let overgebleven = [...adviezen];

const button = document.getElementById("button");
const advies = document.getElementById("advies");

button.addEventListener("click", geefAdvies);

function geefAdvies() {

    if (overgebleven.length === 0) {
        overgebleven = [...adviezen]; 
    }

    const randomIndex = Math.floor(Math.random() * overgebleven.length);
    const gekozen = overgebleven.splice(randomIndex, 1);

    advies.textContent = "Vandaag moet jij " + gekozen + ".";
}