//* Destructuring Array
let buah = ['Apel', 'Mangga', 'Jeruk', 'Pepaya'];

//* Proses destructuring Array. penamaan bergantung pada posisi atau index arraynya
const [buahPertama, buahKedua, buahKetiga, buahKeempat] = buah;

console.log(buahPertama); //Apel
console.log(buahKedua); //Mangga

//* Destructuring Array pada nilai tertentu saja
let hewan = ['Kucing', 'Singa', 'Harimau'];

//* Proses destructuring 'Singa'. Tidak perlu menulis destruc untuk kucing, tapi diganti tanda (,)
const [, rajaHutan] = hewan;
console.log(rajaHutan); //Singa

//* Pemberian nilai default
let mantan = ['Raisa', 'Isyana'];

//* Destructuring dan pemberian nilai default pada mantanIndomie
const [mantanTerIndah, mantanTerUhuy, mantanIndomie = 'Dinda Hauw'] = mantan;

console.log(mantanIndomie); // Dinda Hauw
