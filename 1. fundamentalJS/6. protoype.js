//* constructor function
function Mahasiswa(nama, energi) {
	this.nama = nama;
	this.energi = energi;
}

//* menambahkan method menggunakan prototype
Mahasiswa.prototype.main = function (jam) {
	this.energi -= jam;
	return `Kamu bermain selama ${jam} jam, energi kamu sekarang ${this.energi}`;
};

//* instance bernama galih, dari object Mahasiswa
let galih = new Mahasiswa('Galih permana', 10);

//* instance.method
let galihBermain = galih.main(5);
console.log(galihBermain); // Kamu bermain selama 5 jam, energi kamu sekarang 5
