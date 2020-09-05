//* Merubah coding pada protoype.js menggunakan konsep class
class Mahasiswa {
	constructor(nama, energi) {
		this.nama = nama;
		this.energi = energi;
	}

	// method
	main(jam) {
		this.energi -= jam;
		return `Kamu bermain selama ${jam} jam, energi kamu sekarang ${this.energi}`;
	}
}

//* instance
let Galih = new Mahasiswa('Galih Permana', 10);

//* Menggunakan method
let galihBermain = Galih.main(3);
console.log(galihBermain); //Kamu bermain selama 3 jam, energi kamu sekarang 7
