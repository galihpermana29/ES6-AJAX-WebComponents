const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([{
            judul: 'avengers end game',
            sutradara: 'russo bersaudara',
            pemeran: {
                captainA : 'chris evans',
                iron: 'robet downey jr'
            }
        }])
    },2000)
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'batam',
            suhu: 30,
            cuaca: 'cerah berawan'
        }])
    }, 1000)
});


//* cara biasa untuk mengeksekusi kedua promise diatas adalah
/* film
 .then((resolve) => console.log(resolve));

cuaca
 .then((resolve) => console.log(resolve)); */


//* cara paling sederhana adalah memanfaatkan promise.All

Promise.all([film, cuaca])
//*  .then((resolve) => console.log(resolve))
         //* menghasilkan output [[cuaca], [film]] berupa array dalam array, jika kita tidak ingin, kita bisa lakukan destructuring seperti dibawah ini:

 .then((resolve) => {
     const [film, cuaca] = resolve; //destructuring terhadap array resolve
     console.log(film);
     console.log(cuaca);
 })