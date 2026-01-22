let favorieten = ["fifa", "GOT", "kapsalon", "turkishpizza", "baklava"];


    const infoDiv = document.getElementById("info");
        infoDiv.innerHTML = `
        <p>Het eerste item: ${favorieten[0]}</p>
        <p>Het laatste item: ${favorieten[favorieten.length - 1]}</p>
        <p>Totaal aantal items: ${favorieten.length}</p>`;

        favorieten[0] = "League Of Legends"; 

      const lijstDiv = document.getElementById("lijst");
        lijstDiv.innerHTML = `
            <h2>Nieuwe lijst:</h2>
            <ul>
                ${favorieten.map(item => `<li>${item}</li>`).join("")}
            </ul>
        `;