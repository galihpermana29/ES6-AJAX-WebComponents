// POST => AJAX using XHR

//! tidak selalu request kita ke ajax hanya untuk mengambil data, bisa juga kita menambahkan data. nah untuk itu kadang ada api yang ketika kita ingin menambahkan data, kita perlu set Header untuk menunjukkan credentials, saat melakukan request.

//! kita gunakan method setRequestHeader(). ,ethod tersebut menerima dua parameter. Parameter pertama merupakan nama properti dan parameter yang kedua adalah nilai yang akan ditetapkan pada properti tersebut.

const xhr = new XMLHttpRequest();
xhr.onload = function () {
	console.log(this.response);
};

xhr.onerror = function () {
	console.log('aih brou, eror nich!');
};

xhr.open('POST', 'https://web-server-book-dicoding.appspot.com/add');

// set request header
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('X-Auth-Token', '12345');

//! nah, setelah mengisi headernya, barulah kita isi bodynya, menggunakan data yang akan kita kirimkan. ingat ubah dahulu ke bentuk JSON menggunakan method JSON.stringify()

const book = {
	id: 1200,
	title: 'Asiap Brouu',
	author: 'Galih Permana',
};

const sendData = JSON.stringify(book);
xhr.send(sendData);

//! melihat data yang tadi kita kirim
function getBooks(url) {
	const xhr = new XMLHttpRequest();

	xhr.onload = function () {
		console.log(xhr.response);
	};

	xhr.onerror = function () {
		console.log('aih brou, eror nich!');
	};

	xhr.open('GET', url);
	xhr.send();
}

getBooks('https://web-server-book-dicoding.appspot.com/list');
