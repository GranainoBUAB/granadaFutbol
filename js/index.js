const requestURL = 'https://api-football-standings.azharimm.site/leagues/esp.2/standings?season=2022&sort=asc';


async function fetchFootballTable() {
    const response = await fetch(requestURL);
    const teams = await response.json();
    return teams;
}


fetchFootballTable().then(teams => {
    for (let index = 0; index <= teams.data.standings.length; index++) {

        const tableGranadaSection = document.getElementById('tableGranadaSection');

        let team = teams.data.standings[index].team.name;
        /* let rank = teams.data.standings[index].note.rank; */
        let logo = teams.data.standings[index].team.logos[0].href;

        let wins = teams.data.standings[index].stats[0].value;
        let losses = teams.data.standings[index].stats[1].value;
        let ties = teams.data.standings[index].stats[2].value;
        let gamePlayed = teams.data.standings[index].stats[3].value;
        let points = teams.data.standings[index].stats[6].value;
        let pointDifferential = teams.data.standings[index].stats[9].displayValue;
        let allSplits = teams.data.standings[index].stats[12].displayValue;

        tableGranadaSection.innerHTML += `


            <tr>
                <th>${index + 1}</th>
                <td>
                    
                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                    <img class="object-cover w-full h-full rounded-full" src="${logo}" alt="" loading="lazy" />
                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                </td>
                <td>${team}</td>
                <td>${points}</td>
                <td>${gamePlayed}</td>
                <td>${pointDifferential}</td>
                <td>${allSplits}</td>
            </tr>

        `
    }
})

{/* <h5 >${rank}</h5>
<h5 >${team}</h5>
<h5 >${wins}</h5>
<h5 >${ties}</h5>
<h5 >${losses}</h5>
<h5 >${gamePlayed}</h5>
<h5 >${points}</h5>
<h5 >${pointDifferential}</h5>
<h5 >${allSplits}</h5> */}


/* 
<section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th class="px-4 py-3"></th>
                  <th class="px-4 py-3">Played</th>
                  <th class="px-4 py-3">Points</th>
                  <th class="px-4 py-3">W</th>
                  <th class="px-4 py-3">T</th>
                  <th class="px-4 py-3">L</th>
                  <th class="px-4 py-3">Diff</th>
                  <th class="px-4 py-3">Splits</th>
                </tr>
              </thead>
              <tbody class="bg-white"></tbody>  
                  <tr class="text-gray-700">
                    <td class="px-4 py-3 border">
                      <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img class="object-cover w-full h-full rounded-full" src="" alt="" loading="lazy" />
                          <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                          <div>${index+1}</div>
                        </div>
                        <div>
                          <p class="font-semibold text-black">${team}</p>
                          <p class="text-xs text-gray-600"></p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border">22</td>
                    <td class="px-4 py-3 text-xs border">
                      <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                    </td>
                    <td class="px-4 py-3 text-sm border">${wins}</td>
                    <td class="px-4 py-3 text-sm border">${ties}</td>
                    <td class="px-4 py-3 text-sm border">${losses}</td>
                    <td class="px-4 py-3 text-sm border">${pointDifferential}</td>
                    <td class="px-4 py-3 text-sm border">${allSplits}</td>
                  </tr>
                  </tbody>
          </table>
        </div>
      </div>
    </section> */
