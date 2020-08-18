// GET() => AJAX Using XHR/ XMLHttpRequest

//! membuat sebuah object baru dari object XMLHttpRequest. XHR merupakan sebuah object yang didalamnya terdapat banyak sekali properti atau method.
const xhr = new XMLHttpRequest();
console.log(xhr);

//! membuat callbackFunction yang mengconsole this.responseText yang artinya this merujuk pada object xhr dan responseText adalah properti pada object yang menghasilkan output berupa data yang didapat dari api
xhr.onload = function () {
	//! data yang didapat berupa JSON String, lalu kita parsing agar menjadi object
	const hasil = JSON.parse(this.response);
	console.log(hasil);

	//! menampilkan semua judul buku pada data yang kita dapat
	hasil.books.forEach((book) => {
		console.log(book.title);
	});
};

//! membuat callback fcuntion untuk menghandel eror
xhr.onerror = function () {
	console.log('gak iya ini');
};

//! menggunakan method open() untuk melakukan http request yang parameter pertamanya, disisi method requestnya menggunakan GET dan yang kedua url api nya
xhr.open('GET', 'https://web-server-book-dicoding.appspot.com/list');

//! menggunakan method send() untuk mengirim http requestnya
xhr.send();

//? CARA LAIN MENGGUNAKAN FUNCTION
// function getBooks (url) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if(xhr.readyState === 4) {
//             if(xhr.status === 200) {
//                 console.log(this.response)
//             }else if(xhr.status !== 4){
//                 console.log('eror brou')
//             }
//         }
//     }

//     xhr.open('GET', url);
//     xhr.send();
// }

// getBooks('https://web-server-book-dicoding.appspot.com/list',)
