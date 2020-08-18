//* regular function
function salam(dari, ucapan) {
	console.log(`Dari: ${dari}, ${ucapan}`);
}

salam('Galih', 'Selamat Pagi');
// ouutput : Dari: Galih, Selamat Pagi

//* arrow function
let isiBensin = (tipe, bensin) => {
	let liter = 10000;
	bensin /= liter;
	console.log(`Tipe: ${tipe}, Jumlah Bensin: ${bensin} liter`);
};

isiBensin('mobil', 80000);
