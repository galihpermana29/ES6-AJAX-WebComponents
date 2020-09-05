//* untuk membuat custom element, kita perlu membuat nya dalam bentuk class yang mana class tersebut mewarisi sifat dari class 'HTMLElements'

class ImageFigure extends HTMLElement {
    
}


//* memberikan nama pada tag yang dibuat menggunakan variabel global customElements, dan method define()
customElements.define("image-figure", ImageFigure);