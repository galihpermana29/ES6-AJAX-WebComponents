let dipenuhi = true;
const functionExecutor = (resolve, reject) => {
    if( dipenuhi ){
        setTimeout(() => {
            resolve(`Ditepati setelah menunggu 3 detik`)
        },3000)
    }else{
        setTimeout(() => {
            reject(`Tidak ditepati setelah menunggu 3 detik`)
        },3000)
    }
}


const janji = new Promise(functionExecutor);

console.log(`Memulai janji ...`)

janji
 // .finally() = akan selalu dieksekusi sebelum .then dan .catch
 .finally(() => console.log(`Selesai Menunggu!`)) 
 .then((resolve) => console.log(`OK! ${resolve}`))
 .catch((reject) => console.log(`NOT OK! ${reject}`));

 console.log(`Janji selesai ...`)