(async () => {
    let response = await fetch("https://kulti22.azurewebsites.net/api/GetSpikeBallInfos");
    let data = await response.json();
    document.getElementById("teamsCount").innerHTML = `Angemeldete Teams: ${data}/50`;
    if (data >= 50) document.getElementById("spikeball-form").style.display = "none";
    if (data >= 50) document.getElementById("full-message").style.display = "block";
})();