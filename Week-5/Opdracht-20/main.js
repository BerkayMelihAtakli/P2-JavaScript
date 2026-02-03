const emojis = ["😏", "😘", "😎", "😊", "🤣", "⚽️"];
let emojidiv = document.getElementById("h1");
const button = document.getElementById("button");
let indexP = document.getElementById("index");

button.addEventListener("click", emojifunction);



function emojifunction() {

    const randomIndex = Math.floor(Math.random() * emojis.length);
    emojidiv.textContent = emojis[randomIndex]; 
    indexP.textContent = "Index: " + randomIndex;

    

}



