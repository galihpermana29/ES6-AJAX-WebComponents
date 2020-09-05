//* mengekspor satu nilai variabel
const kopiEkspor = {
    jenis: {
        robusta : 100,
        arabica : 200,
        liberica : 150
    }
}

const kopiSiap = true;

//! satu nilai/satu variabel
//* module.exports = kopiEkspor;

//! lebih dari satu nilai/variabel
module.exports = {kopiEkspor, kopiSiap};