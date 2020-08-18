



class ProvinsIndonesia extends HTMLElement {
    constructor(){
        super();
        
    }

    connectedCallback() {
        this.render();
        console.log('connected');
    }

    render() {

    }
}

customElements.define('provinsi-indonesia', ProvinsIndonesia);


const Opt = document.createElement('provinsi-indonesia');
console.log(Opt)

const select = document.querySelector('.form-control')

console.log(select)

select.appendChild(Opt)

let i;
for(i = 0; i < provinsi.length; i++){
    console.log(provinsi[i])
}