const requestURL = 'https://api-football-standings.azharimm.site/leagues/esp.2/standings?season=2022&sort=asc';


async function fetchFootballTable() {
    const response = await fetch(requestURL);
    const teams = await response.json();
    return teams;
}


fetchFootballTable().then(teams => {
    for (let index = 0; index < teams.data.standings.length; index++) {

        const tableGranadaSection = document.getElementById('tableGranadaSection');

        let team = teams.data.standings[index].team.name;
        let rank = teams.data.standings[index].note.rank;
        let wins = teams.data.standings[index].stats[0].value;
        let losses = teams.data.standings[index].stats[1].value;
        let ties = teams.data.standings[index].stats[2].value;
        let gamePlayed = teams.data.standings[index].stats[3].value;
        let points = teams.data.standings[index].stats[6].value;
        let pointDifferential = teams.data.standings[index].stats[9].displayValue;
        let allSplits = teams.data.standings[index].stats[12].displayValue;



        {/* <table class="table table-dark table-striped">
            <tbody>
                <tr>
                    <th scope="row">${id}</th>
                    <td>${title}</td>
                    <td>${director}</td>
                    <td>${gender}</td>
                </tr>
            </tbody>
        </table>    */}

        /* <div class="card" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="Caratula de mi Pelicula">
        <div class="card-body">
            <h5 class="card-title">${id}. ${title}</h5>
            <p class="card-text">${director} - ${gender}</p>
        </div>
        </div>  */
        tableGranadaSection.innerHTML += `
        <h4>Tabla</h4>
        <h5 >${rank}</h5>
        <h5 >${team}</h5>
        <h5 >${wins}</h5>
        <h5 >${ties}</h5>
        <h5 >${losses}</h5>
        <h5 >${gamePlayed}</h5>
        <h5 >${points}</h5>
        <h5 >${pointDifferential}</h5>
        <h5 >${allSplits}</h5>
        `
    }
})