//* Spreading operator
let angka = [10, 20, 30, 40, 50];
console.log(angka); // menghasilkan output berupa array
console.log(...angka); // dengan menggunakan spreading operator(...) mnghasilkan output 10 20 30 40 50

//* Studi Kasus
let angka1 = [12, 13, 14, 52, 32, 63, 76, 33];
console.log(Math.max(...angka1));

//* Menggabungkan dua array menjadi satu
let motor = ['Supra', 'Beat', 'Vespa', 'Vega'];
let mobil = ['Avanza', 'Brio', 'Agya', 'XPander'];

// gabungkan
let kendaraan = [...motor, ...mobil];
console.log(kendaraan);
// output
// [
//     'Supra',  'Beat',
//     'Vespa',  'Vega',
//     'Avanza', 'Brio',
//     'Agya',   'XPander'
// ]
