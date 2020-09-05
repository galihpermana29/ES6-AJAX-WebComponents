//* pada es6 kita bisa melakukan export dengan menggunakan keywords export default jika yang di export satu nilai, dan export {} jika yang di export lebih dari satu nilai

//? jangan lupa tambahkan pada tag <script src="" type="module"></script>

const kopi = {
    robusta: 100,
    arabica: 200
}

const apakahKopiSiap = true;

//! satu nilai
// export default kopi;

//! lebih dari satu nilai
export {kopi, apakahKopiSiap};