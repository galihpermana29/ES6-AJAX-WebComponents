//* pada elemen html biasa, ketika nilai attributenya diubah, maka perubahan akan langsung tampak pada dom, nah pada custom element kita perlu menambahkan 2 fungsi, yaitu attributeChangedCallback() dan static get observedAttributes()
class ImageFigure extends HTMLElement {

    connectedCallback() {
        console.log('connected');
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this.caption = this.getAttribute('caption');
        this.render(); //! jangan lupa ketika connected kita jalankan dahulu innerHTML nya
        
    }

    //! kita memisahkan innerHTML nya dalam fungsi render() agar ketika perubahan attribut terjadi, fungsi ini bisa dijalankan lagi
    render() {
        this.innerHTML = 
        `<figure>
            <img src="${this.src}" alt="${this.alt}">
            <figcaption> ${this.caption} </figcaption>
        </figure>`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //! contoh jika kita mengubah attribut 'src' maka name diisi this[src] = newValue;
        // console.log(`name: ${name}`) //? nama attribut
        // console.log(`old: ${oldValue}`) //? nilai lama attribut
        // console.log(`new: ${newValue}`) //? nilai baru attribut

        //! important!
        this[name] = newValue; //? this[caption] = isi caption yang baru
        this.render(); //! jalankan lagi render() agar perubahan bisa nampak
    }

    //! fungsi yang melakukan pengawasan terhadap attribut yang berubah, contoh kita mengubah nilai attribut caption maka return nya adalah [caption] lalu ditangkap oleh attributChangedCallback oleh variabel name ^
    static get observedAttributes() {
        return ["caption", "src", "alt"];
    }
}


// console.log(ImageFigure.observedAttributes)
customElements.define('image-figure', ImageFigure);

//* mengubah nilai attribut caption. 
let imageFigure = document.querySelector('image-figure');
imageFigure.setAttribute('caption', 'Captionnya sudah diubah melalui javascript');




