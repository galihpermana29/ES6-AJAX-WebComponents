//! dengan menggunakan teknik async await, kita bisa melakukan fetch dengan konsep function seperti biasa, yang jelas jangan lupa menambahkan keyword async dan await pada promise yang asynchronous.

async function getBooks() {
    try {
        const response = await fetch('https://web-server-book-dicoding.appspot.com/list');
        const responseJSON = await response.json();
        // const dataBuku = JSON.parse(responseJSON);
        console.log(responseJSON);
    }catch(err) {
        console.log(err);
    }
}

getBooks();