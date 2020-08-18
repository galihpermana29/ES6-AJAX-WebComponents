//* shadow dom atau dom dalam dom

//* membuat elemen/node pada dom nyata yang bertindak sebagai host
const divElement = document.createElement('div');
document.body.appendChild(divElement);

//* membuat elemenn/node yang akan di masukkan ke dom shadow
const h1Element1 = document.createElement('h1');
const h1Element2 = document.createElement('h1');
h1Element1.innerText = 'Teks ini dibuat di shadow DOM';
h1Element2.innerText = 'Teks 2 ini dibuat di shadow DOM';

//* melampirkan shadow rootnya ke shadow host karena keduanya berhubungan dan mengatur modenya menjadi open.
const shadowRoot = divElement.attachShadow({mode: 'open'})

//* memasukkan h1 ke shadow root/dom
shadowRoot.appendChild(h1Element1);
shadowRoot.appendChild(h1Element2);

//* selector elemen pada shadow DOM
const h1S = shadowRoot.querySelector('h1');

//! styling pada shadow dom

//* jika kita melakukan styling dengan cara biasa, maka hal itu tidak akan ber efek pada elemen yang ada pada shadow dom. nah caranya adalah dengan begini

shadowRoot.innerHTML += 
`<style>

    h1 {
        color: red;
    }




</style>`

