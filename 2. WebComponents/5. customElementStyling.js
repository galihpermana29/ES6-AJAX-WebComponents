//* styling pada custom elemen bisa dilakukan pada berkas css nya atau saat merender dengan innerHtml menggunakan tag <style>

class ImageFigure extends HTMLElement{
  //* shadow DOM Styling
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');
        this.caption = this.getAttribute('caption');
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
          <style>
            figure {
              border: thin #c0c0c0 solid;
              display: flex;
              flex-flow: column;
              padding: 5px;
              max-width: 220px;
              margin: auto;
            }
     
            figure > img {
              max-width: 220px;
            }
     
            figure > figcaption {
              background-color: #222;
              color: #fff;
              font: italic smaller sans-serif;
              padding: 3px;
              text-align: center;
            }
          </style>
     
          <figure>
            <img src="${this.src}"
                alt="${this.alt}">
            <figcaption>${this.caption}</figcaption>
          </figure>
        `;
     }
}

//* tapi, cara paling efektif sebenarnya menggunakan shadow dom. karena jika kita mengatur atau styling pada elemen <figure> maka bisa jadi elemen <figure> yang ada pada innerHTML image-figure kita berubah juga. Itulah fungsi shadow DOM