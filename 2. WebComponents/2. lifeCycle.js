class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log('constructed');
    }

    connectedCallback() {
        console.log('connected');
    }

    disconnectedCallback() {
        console.log('disconnected');
    }

    adoptedCallback() {
        console.log('adopted')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute : ${name} changed!`)
    }

    //! digunakan untuk mengamati perubahan nilai attribute caption
    /*! kita bisa menetapkan lebih dari satu atribut yang diamati.
        dengan memisahkan nama atribut menggunakan koma. Contoh: */
    //! return ["caption", "title", "src", ...]
    static get observedAttributes() {
        return ["caption"];
    }

}


//* instance dari class tersebut, alias memberikan nama tag
customElements.define('image-figure', ImageFigure);


//* select atau tangkap elemen tag <image-figure>
let imageFigureElement = document.querySelector('image-figure');

//* buat secara otomatis jika tag <image-figure> belum dibuat di html scriptnya
if(!imageFigureElement) {
    let imageFigureElement = document.createElement('image-figure');
    document.body.appendChild(imageFigureElement);
}

//* setelah 1 detik, tambahkan attribut caption="" pada tag image-figure
setTimeout(() => {
    imageFigureElement.setAttribute('caption', 'gambar1');
}, 1000);

//* setelah 3 detik, hapus elemennya
setTimeout(() => {
    imageFigureElement.remove();
}, 3000);
