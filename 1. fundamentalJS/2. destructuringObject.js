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
