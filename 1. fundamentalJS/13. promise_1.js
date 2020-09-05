//* Sebuah object yang merepresentasikan berhasil/gagal nya suatu event atau kejadian yang asynchronous yang terjadi di masa depan(janji).

//? memiliki 3 kondisi atau states
//* fulfilled = janji sudah terpenuhi atau di tepati
//* pending = janji sedang dalam proses
//* rejected = janji tidak di terpenuhi atau di tepati

//? 3 fungsi callback pada promise
//* resolve() yang akan terpanggil ketika janji fulfilled
//* reject() yang akan terpanggil ketika janji rejected
//* finally() ketika janji selesai, terpenuhi atau tidak terpenuhi

//? pada object Promise ini terdapat method, yang menghandle fungsi callback diatas
//* method .then() = menghandle resolve()
//* method .catch() = menghandle reject()

//! contoh 1
let dipenuhi = true;
const janji1 = new Promise((resolve, reject) => {
	if (dipenuhi) {
		resolve('Janji sudah dipenuhi');
	} else {
		reject('Janji tidak dipenuhi');
	}
});

//* jika kita melakukan eksekusi console.log() langsung maka bentuknya masih berupa object Promise
// console.log(janji1);

//* jika kita ingin menangkap callback funtion resolve() dan reject() dan tidak ingin bentuknya berupa object Promise kita bisa gunakan method yang ada pada object Promise
janji1
	.then((resolve) => console.log(`OK! ${resolve}`))
	.catch((reject) => console.log(`NOT OK! ${reject}`));

//* perhatikan pada method .then() kita isikan sebuah parameter bebas namanya, yang akan menangkap isi dari callback funtion resolve('Janji sudah dipenuhi'), dan pada method .catch() menangkap callback function reject('janji tidak dipenuhi').
