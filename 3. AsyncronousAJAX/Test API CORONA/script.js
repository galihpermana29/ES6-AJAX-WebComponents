const baseURL = 'https://corona.coollabs.work';

const search = document.querySelector('.search');
search.addEventListener('click',getDataCoronaProv)

async function getDataCoronaProv () {
    
    const pilihanProvinsiElement = document.querySelector('.form-control').selectedIndex;
    const provinsiValue = document.getElementsByTagName('option')[pilihanProvinsiElement].value;
    
    const res = await fetch(`${baseURL}/indonesia/provinsi/${provinsiValue}`);
    const resJSON = await res.json();

    let renderDataProvinsi = new RenderData(resJSON.Kasus_Meni, resJSON.Kasus_Posi, resJSON.Kasus_Semb);
    renderDataProvinsi.renderAllDataProv();
}


async function getDataCoronaNas () {
    const ress = await fetch(`${baseURL}/country/indonesia`);
    const ressJSON = await ress.json();

    let renderDataNasional = new RenderData(ressJSON.Deaths, ressJSON.Confirmed, ressJSON.Recovered);
    renderDataNasional.renderAllDataNas();
    
}

getDataCoronaNas();

class RenderData {
    constructor(death, confirmed, recovered) {
        this.death = death;
        this.confirmed = confirmed;
        this.recovered = recovered;
    }

    renderAllDataProv() {
        const dataCovidProv = document.querySelector('.prov-cont');
        dataCovidProv.innerHTML = '';
        dataCovidProv.innerHTML +=
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Death</h5>
            <p class="card-text">${this.death}</p>
            </div>
        </div>
   
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Confirmed</h5>
            <p class="card-text">${this.confirmed}</p>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Recovered</h5>
            <p class="card-text">${this.recovered}</p>
            </div>
        </div>
    `;
    }

    renderAllDataNas() {
        const dataCovidNas = document.querySelector('.nas-cont');
        dataCovidNas.innerHTML = '';
        dataCovidNas.innerHTML +=
        `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Death</h5>
            <p class="card-text">${this.death}</p>
            </div>
        </div>
   
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Confirmed</h5>
            <p class="card-text">${this.confirmed}</p>
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Recovered</h5>
            <p class="card-text">${this.recovered}</p>
            </div>
        </div>
    `;
    }
}












// function renderData(data) {
//     // console.log(data)
//     renderDeath(data.Kasus_Meni);
//     renderPositif(data.Kasus_Posi);
//     renderSembuh(data.Kasus_Semb);
// }

// const renderDeath = kasusMeninggal => {
//     const dataCovid = document.querySelector('.prov-cont');
//     dataCovid.innerHTML = '';
//     dataCovid.innerHTML +=
//     `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">Death</h5>
//         <p class="card-text">${kasusMeninggal}</p>
//         </div>
//     </div>
// `;
// }

// const renderPositif = kasusPositif => {
//     const dataCovid = document.querySelector('.prov-cont');
    
//     dataCovid.innerHTML +=
//     `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">Positive</h5>
//         <p class="card-text">${kasusPositif}</p>
//         </div>
//     </div>
// `;
// }

// const renderSembuh = kasusSembuh => {
//     const dataCovid = document.querySelector('.prov-cont');
    
//     dataCovid.innerHTML +=
//     `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">Recovered</h5>
//         <p class="card-text">${kasusSembuh}</p>
//         </div>
//     </div>
// `;
// }



// function renderDataNas(data) {
//     // console.log(data)
//     renderDeathNas(data.Active);
//     renderPositifNas(data.Deaths);
//     renderSembuhNas(data.Recovered);
// }

// const renderDeathNas = kasusMeninggal => {
//     const dataCovid = document.querySelector('.nas-cont');
//     dataCovid.innerHTML = '';
//     dataCovid.innerHTML +=
//     `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">Death</h5>
//         <p class="card-text">${kasusMeninggal}</p>
//         </div>
//     </div>
// `;
// }

// const renderPositifNas = kasusPositif => {
//     const dataCovid = document.querySelector('.nas-cont');
    
//     dataCovid.innerHTML +=
//     `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">Positive</h5>
//         <p class="card-text">${kasusPositif}</p>
//         </div>
//     </div>
// `;
// }

// const renderSembuhNas = kasusSembuh => {
//     const dataCovid = document.querySelector('.nas-cont');
    
//     dataCovid.innerHTML +=
//     `<div class="card" style="width: 18rem;">
//         <div class="card-body">
//         <h5 class="card-title">Recovered</h5>
//         <p class="card-text">${kasusSembuh}</p>
//         </div>
//     </div>
// `;
// }