const userpassword = document.getElementById("password");
const userfeedback = document.getElementById("feedback");
let teller = document.getElementById("teller");

userpassword.addEventListener('keyup', function () {

    if (userpassword.value.length < 6) {
        userfeedback.textContent = 'Wachtwoord te kort';
        userfeedback.style.color = 'red';
    }

    else {
        userfeedback.textContent = 'Sterk wachtwoord!';
        userfeedback.style.color = 'green';
    }

    teller.textContent = `Je hebt nu ${userpassword.value.length} tekens ingevoerd.`;
})
