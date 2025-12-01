function groet_ochtend() {
const titel = document.getElementById("h1");
titel.style.backgroundColor = 'lightyellow';
titel.textContent = "Goedemorgen!";
titel.style.color = 'black';
}

document.getElementById("groet_ochtend").onclick = function() {groet_ochtend()};

function groet_middag() {
const titel = document.getElementById("h1");
titel.style.backgroundColor = 'gold';
titel.textContent = "Goedemiddag!";
titel.style.color = 'black';
}

document.getElementById("groet_middag").onclick = function() {groet_middag()};

function groet_avond() {
const titel = document.getElementById("h1");
titel.style.backgroundColor = 'darkblue';
titel.textContent = "Goedenavond!";
titel.style.color = 'white';
}

document.getElementById("groet_avond").onclick = function() {groet_avond()};