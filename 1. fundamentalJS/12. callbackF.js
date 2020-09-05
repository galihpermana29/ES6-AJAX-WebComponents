//* synchronous callback

/* function halo (nama) {
    console.log(`Hallo ${nama}`);
} */

function tampilkanPesan(callback) {
	let nama = 'Galih Permana';
	callback(nama);
}

tampilkanPesan((nama) => {
	console.log(`Hello ${nama}`);
});

// Asynchronous Callback

function getCake(callback) {
	console.log('Sedang membuat kue, silahkan tunggu ..');

	setTimeout(() => {
		let cake = 'Kue Selesai';
		callback(cake);
	}, 3000);
}

function statCake(cake) {
	console.log(cake);
}

getCake(statCake);

function bengkel(panggil) {
	let plat = '2664 EM';
	console.log(`Mobil dengan plat ${plat}, sedang melakukan perbaikan ...`);

	setTimeout(() => {
		panggil(plat);
	}, 3000);
}

bengkel((bp) => console.log(`Mobil ${bp} sudah selesai di perbaiki`));
