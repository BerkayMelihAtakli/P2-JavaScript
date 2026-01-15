let button = document.getElementById("button");
let resetbutton = document.getElementById("reset");
let min = document.getElementById("min");
let pizza = document.getElementById("h1");
let pizzacount = 0;

button.addEventListener("click", givepizza);
resetbutton.addEventListener("click", resetgame);
min.addEventListener("click", minpizzas);

function update() {
   pizza.innerHTML = pizzacount + " 🍕";
   document.body.style.backgroundColor = "white";
   pizza.style.color = 'black';
}


function givepizza() {
    pizzacount++;
    
   

    if (pizzacount >=10) {
    pizza.textContent = `${pizzacount} YOU WON!🍕 `;
    pizza.style.color = "white";
    document.body.style.backgroundColor = 'black';
    overlay.style.display = "flex"; 
    update();
    
    return;
    }

    else if (pizzacount >=20) {
        pizza.textContent = `${pizzacount}  Klasse-traktatie!🍕 `;
        pizza.style.color = 'white';
    }

    else if (pizzacount >= 5 && pizzacount < 10) {
        pizza.textContent = `${pizzacount} Dat begint ergens op te lijken 😋 `;
        document.body.style.backgroundColor = 'red';
        pizza.style.color = 'white';
    }
    
    else {
        update();
        document.body.style.backgroundColor = "white";
        
        
    }
}

function resetgame() {
    pizzacount = 0;
    pizza.innerHTML = "0 🍕";
    update();
    overlay.style.display = "none";

}

function minpizzas() {
    if (pizzacount > 0) {
        pizzacount--;
    }
        update();
}

let overlay = document.getElementById("overlay");

function closeOverlay() {
    overlay.style.display = "none";
}


