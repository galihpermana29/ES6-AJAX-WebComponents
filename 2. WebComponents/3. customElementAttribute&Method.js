class ImageFigure extends HTMLElement {
    constructor(){
        super();
        console.log('constructed')
    }

    //* pada connectedCallback kita menetapkan nilai atau data yang akan ditambahkan. seperti attribute dll
    connectedCallback() {
        console.log('connected');
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this.caption = this.getAttribute('caption');

        this.innerHTML = 
        `<figure>
            <img src="${this.src}" alt="${this.alt}">
            <figcaption> ${this.caption} </figcaption>
        </figure>`;
    }
}

//* untuk set attribut pada tag html <image-figure> kita bisa lakukan langsung pada berkas html <image-figure src="www.conding.com" alt="gambar" caption="gambarku"> atau menggunakan javascript

//* kasih nama tagnya
customElements.define('image-figure', ImageFigure)

//* tangkap element <image-figure> menggunakan selector
let imageFigureElement = document.querySelector('image-figure');

//* set attributenya
imageFigureElement.setAttribute('src', 'img/1.jpg');
imageFigureElement.setAttribute('alt', 'gambar kucing');
imageFigureElement.setAttribute('caption', 'gambar kucing');

//! janganlupa di append kembali element yang kita set attributenya
const body = document.querySelector('body');
body.appendChild(imageFigureElement);

