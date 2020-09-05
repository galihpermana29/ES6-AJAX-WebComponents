//! Dom Manipulation atau memanipulasi sebuah dom dengan properti properti yang ada

//! 1. .innerHtml = mengubah isi dari elemen yang kita seleksi, isinya itu bisa berupa teks atau juga elemen html. contoh

// TODO: mengubah tulisan hello world, menjadi hello galih
const judul = document.getElementById('judul');
judul.innerHTML = 'Hello Galih';

//! 2. .style.<properticss>

//! 3. .setAttribute(), .getAttribute(), .removeAttribute()
//* Attribut adalah sesuatu yang menempel pada tag html, seperi href, class, id.

//* .setAttribute('nama atribut', 'isi atributnya') mengeset atribut pada sebuah elemen html

// TODO: memberikan attribut name="paragraf1" pada tag<p> yang mempunyai class .p1
const p1 = document.querySelector('.p1');
p1.setAttribute('name', 'paragraf1');

//* .getAttribute() menampilkan isi dari atribut yang ingin kita ketahui

// TODO: kalau kita tulis di console maka akan menampilkan isi dari atribute href pada tag a 
/*  const a = document.getElementsByTagName('a');
a[0].getAttribute('href'); */

//* .removeAttribute() menghapus atribut


//! 4. Mengelola class menggunakan.classList

//* .classList.add() = menambahkan class baru. contoh kita akan menambahkan satu class lagi pada paragraf 1 yang sudah mempunyai class .p1

// TODO: maksudnya adalah kita tambahkan class label pada elemen p yang sudah punya class sebelumnya yaitu .p1 jadi sekarang classnya ada .p1 dan label1
const tambahP1 = document.querySelector('.p1');
tambahP1.classList.add('label1');

//* .classList.remove() = menghapus class yang sudah ada

//TODO: maksudnya adalah kita menghapus kelas .p2 dan menambahkan kelass label2, jadi paragraf 2 punya class label2
const hapusP2 = document.querySelector('.p2');
hapusP2.classList.remove('p2');
hapusP2.classList.add('label2');

//* .classList.toggle() = method ini berfungsi untuk menambah dan menghapus sebuah class. biasanya digunakan bersama dengan click button pada mouse jadi ketika di click misal muncul dashboard ketika di click lagi dashboardnya hilang.

//TODO: menambahkan class biru-muda pada elemen a dan cara kerjanya itu dia mengembalikan true jika class biru-muda belum ada, mengembalikan false jika class biru-muda ada.
const toggle = document.querySelector('a');
toggle.classList.toggle('biru-muda');

//* .classList.item() = mengetahui ada atau tidak sebuah class.

//TODO menambahkan class lagi di paragraf 3
const add = document.querySelector('.p3');
add.classList.add('label3', 'info', 'headline');

//TODO cek menggunakan .classList.item() dimulai dari 0 seperti array. ketika kita isi (2) maka akan memunculkan class yang indexnya 2 yaitu class dengan nama info.
add.classList.item(2); //? info

//* .classList.contains() = kebalikan dari item, fungsinya sama sama mengetahui ada atau tidak sebuah class.

//TODO kita cek ada gak class info pada paragraf 3. kalau ada true kalau tidak false
add.classList.contains('info'); // true

//* .classList.replace('classLama', 'baru') = mereplace sebuah class dengan class yang baru

//TODO: mengganti atau replace class headline dengan class baru yaitu info2.
add.classList.replace('headline', 'info2');




//! 4. Manipulasi Node
//! - Menambahkan elemen baru atau node baru

//TODO: Kita akan menambahkan elemen p baru dibawah paragraf 3.

//? buat elemen p terlebih dahulu dengan method document.createElement('namaElement');
const pBaru = document.createElement('p');

//? buat isi untuk elemen p tersebut atau tulisan dalam p nya dengan method document.createTextNode('isi text nya');
const textPBaru = document.createTextNode('Paragraf Baru');

//TODO : node.appendChild() cara bacanya adalah tambahkan child baru ke akhir dari sebuah parent

//? node.appendChild(nodeTextnya). menambahkan child atau anak (textPBaru) ke parent pBaru
pBaru.appendChild(textPBaru);

//? seleksi section dengan id a yang mana dia adalah parent tempat kita ingin menambahkan elemen pBaru itu.
const sectionA = document.querySelector('#a');

//? masukkan child(pBaru) ke parent sectionA
sectionA.appendChild(pBaru);



//TODO: menambahkan elemen baru menggunakan node.insertBefore(). ketika menggunakan method tersebut, kita harus menangkap dua hal yaitu elemen parent tempat kita ingin menambahkan elemen baru, dan elemen setelah elemen yang akan kita sisipkan

//? buat elemen li baru, dan buat isi untuk elemen li baru itu
const liBaru = document.createElement('li');
const isiLi = document.createTextNode('Item baru');
//? masukkan isiLi ke parent atau ke elemen liBaru
liBaru.appendChild(isiLi);

//?tangkap atau seleksi ul sebagai parent, dan li ke 2 sebagai elemen setelah elemen baru yang akan kita sisipkan
const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');

//? gunakan node.inserBefore(elemenBaru, elemen setelahnya);
ul.insertBefore(liBaru, li);


//! .removeChild() dan .replaceChild()

// TODO: Menghapus tag a yang berisi link instagram. kita harus menangkap dua elemen yaitu parent tag a yaitu section id a, dan elemen tag a itu sendiri. karena sectionA sudah kita tangkap diatas, kita tangkap tag a saja.
const a = document.getElementsByTagName('a')[0];
sectionA.removeChild(a);

// TODO: Mengganti elemen p pada section b dengan elemen h2 baru.

//?buat elemen dan isinya lalu masukkan ke elemennya
const h2 = document.createElement('h2');
const isiH2 = document.createTextNode('Judul baru');
h2.appendChild(isiH2);

// TODO: untuk mereplace kita harus tangkap dua hal yaitu parent tempat elemen itu ingin di ganti dan elemen yang di ganti
const sectionB = document.getElementById('b');
const pLama = sectionB.getElementsByTagName('p')[0];

//? gunakan parentNode.replaceChild(cBaru, cLama)
sectionB.replaceChild(h2,pLama);
