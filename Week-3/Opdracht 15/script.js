let redbull = 0;


function update() {
    document.getElementById("bla").innerHTML = redbull;


if (redbull >=5) {
    message.textContent = "Pauze? Water is ook lekker";
    message.style.color = 'red';
}

else if (redbull >=3) {
    message.textContent = "Dat zijn er best veel...";
    message.style.color = 'orange';
}

else  {
    message.textContent = "netjes";
    message.style.color = 'green';
}

}

function plus() {
    redbull++;
    update();   
}

function reset() {
    redbull = 0;
    update();
}

function min() {
    if (redbull > 0) {
        redbull--;
    }
        update();
}

