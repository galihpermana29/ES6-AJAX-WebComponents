//* Destructuring Object
let mahasiswa = {
	nama: 'Galih Permana',
	prodi: 'Teknik Komputer',
	nim: 088565662,
};

// Proses destructuring
let { nama, prodi, nim } = mahasiswa;

console.log(nama); // Galih Permana
console.log(prodi); // Teknik Komputer

//* Assigning with different local variabel

let Hewan = {
	nama: 'Kucing',
	jenis: 'Mamalia',
};

//* setelah di destructuring, lalu di assign ke local variabel baru namaHewan dan jenisHewan
let { nama: namaHewan, jenis: jenisHewan } = Hewan;
console.log(namaHewan);

let newObj = {
   univ: 'Universitas Gajah Duduk',
   provinsi: 'Jogja'
}

//* tidak bisa mengubah apapun kalau objecnya kita freeze
Object.freeze(newObj)

//* destructuring object in a function parameter
let tes = ({univ,provinsi}) => {
   console.log(univ)
   console.log(provinsi)
}

tes(newObj)

//* return an object in arrow function 
//! non using es6
// const uji = (x,y) => ({
//    x:x,
//    y:y
// })

// let a = uji('galih', 'ub')
// console.log(a)

//! using es6
// pada es6 untung mengindari pengulangan penamaan pada properties, dapat langsung saja ditulis contoh {x,y} maka otomatis akan mereturn object yang {x: x, y: y}
const uji = (nama,univ) => ({nama,univ})

let a = uji('galih', 'ub')
console.log(a)