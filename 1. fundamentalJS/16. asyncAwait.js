function cobaPromise() {
	return new Promise((resolve, reject) => {
		let waktu = 6000;

		if (waktu < 5000) {
			setTimeout(() => {
				resolve('Berhasil');
			}, waktu);
		} else {
			reject('Kelamaan bos');
		}
	});
}

//* membuat sebuah function async yang didalamnya mengeksekusi function cobaPromise()

//* jika kita melakukan eksekusi seperti code berikut, maka status promise akan tetap pending, karena dalam function tersebut ada function cobaPromise() yang mana itu merupakan async function
// function cobaAsync() {
//     const promise = cobaPromise();
//     console.log(promise);
// }

// cobaAsync();

//* maka kita bisa gunakan keyword async dan await, maksud async adalah kita memberitahukan kepada javascript bahwa pada function ini ada code yang asyncronous, jadi javascript mencari keyword await didalamnya, maksud keyword await adalah menunggu function cobaPromise() selesai dahulu, baru kemudian lanjut eksekusi code berikutnya.

async function cobaAsync() {
	const promise = await cobaPromise();
	console.log(promise);
}

cobaAsync();

//* lalu bagaimana menghandle error pada async await?, kita bisa gunakan block try dan catch

async function cobaAsync() {
	try {
		const promise = await cobaPromise();
		console.log(promise);
	} catch (err) {
		console.log(err); // rejected
	}
}


