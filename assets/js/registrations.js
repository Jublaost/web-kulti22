(async () => {
    let response = await fetch("https://kulti22.azurewebsites.net/api/GetRegistrations");
    let data = await response.json();
    console.log(data)
    for (let player of data.spikeball) {
        let container = document.getElementById(player.field);
        let element = document.createElement("p");
        element.innerHTML = `${player.name}`;
        container.appendChild(element);
    }

    let spikes = document.getElementById("spikeball");
    for (let spike of data.gl) {
        let element = document.createElement("p")
        element.innerHTML = `<strong>${spike.name}</strong> - ${spike.player1}, ${spike.player2}`
        spikes.append(element)
    }
})();