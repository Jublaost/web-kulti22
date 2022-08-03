(async () => {
    let response = await fetch("https://kulti22.azurewebsites.net/api/GetGameInfos");
    let data = await response.json();
    let slots = Object.keys(data);
    slots.forEach(s => {
        document.getElementById(s).innerHTML += ` - angemeldet:  ${data[s]}/50`
        if (data[s] >= 50) { document.getElementById(s).disabled = true }
    })
})();