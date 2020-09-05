//! DOM Selection

// TODO : Kali ini kita akan belajar DOM Selection atau bagaimana cara menyeleksi atau mengambil sebuah elemen atau node menggunakan jvascript.

//! 1. document.getElementById('') => mengembalikan element
 /* 
TODO : Cara bacanya adalah, javascript tolong carikan saya elemen html berdasarkan idnya. Setelah kita seleksi dom nya kita harus masukkan ke variabel, nah setelah itu kita bisa melakukan apa saja pada elemen tersebut atau variabel ubahJudul itu. 

*/

const ubahJudul = document.getElementById('judul'); 

//? memberikan variabel ubahJudul properti style untuk mengubah warnanya menjadi merah
ubahJudul.style.color = 'red'; 


//! 2. document.getElementsByTagName('') => mengembalikan HTMLCollection yang berupa array dan mempunyai index
/* 
TODO: Cara bacanya adalah, javscript tolong carikan saya elemen html berdasarkan tag html nya.
*/

//? menyeleksi elemen elemen html yang ber-tag <p>
const ubahParagraf = document.getElementsByTagName('p');

//* Jika di console.log(ubahParagraf) maka akan menghasilkan HTMLCollection[p.p1, p.p2, p.p3, p]; atau elemen html p yang berupa array dan mempunyai index. jadi cara menggunakannya harus menyertakan indeksnya

//? mengubah warna background colour pada setiap tag <p>
for( let i = 0; i < ubahParagraf.length; i++ ){
    ubahParagraf[i].style.backgroundColor = 'grey';
}

//* bahkan ketika sebuah elemen itu hanya ada satu saja tagnya contoh tag <judul>, akan tetap mengembalikan HTMLCollection berupa array,


//! 3. document.getElementsByClassName(''); => mengembalikan HTMLCollection sama seperti bytagname

const ubahParagraf1 = document.getElementsByClassName('p1')[0];
ubahParagraf1.innerHTML = 'Ini diubah dari javascript';


//! 4. document.querySelector('selector css') => mengembalikan sebuah element seperti getElemenById()

//* Melakukan seleksi menggunakan css selector, artinya seleksi pada elemen yang mempunyai id #b
const ubahSection = document.querySelector('#b');
ubahSection.style.backgroundColor = 'orange';

//! 5. document.querySelectorAll('') => mengembalikan array seperti bytagname tapi berupa NodeList

//* Melakukan seleksi menggunakan css selector, tapi dia akan menyeleksi seluruhnya, contoh li yang ada pada ul yang ada pada id #b, maka akan menghasilkan nodeList yang isinya[li,li,li] dan cara mengaksesnya menggunakan index
const ubahUl = document.querySelectorAll('#b ul li');
ubahUl[1].style.backgroundColor = 'skyblue';

//! 6. mengubah node root atau memperkecil scope root

//* kita seleksi terlebih dahulu elemen yang besar nya dalam hal ini section. jadi kita seleksi byId nya yang mana akan mengembalikan sebuah elemen section beserta isi isinya.
const section = document.getElementById('b');

//* setelah itu kita seleksi lagi elemen yang mau kita ubah warnanya, tapi node rootnya tidak document lagi melainkan section.queryselectorall.
const ubahitem1 = section.querySelectorAll('#b ul li');
ubahitem1[0].style.backgroundColor = 'pink';

