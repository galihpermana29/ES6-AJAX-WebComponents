//* Menggunakan Getter dan Setter pada Class
class Mahasiswa {
    constructor ( nama, energi ) {
        this.nama = nama;
        this.energi = energi;
    }

    // method
    main ( jam ) {
        this.energi -= jam;
        return `Kamu bermain selama ${jam} jam, energi kamu sekarang ${this.energi}`;
    }

    get tambahEnergi() {
        return this.energi;
    }

    set tambahEnergi(energi) {
        this.energi += energi;
    }
}

let galih = new Mahasiswa('Galih permana', 10);
galih.tambahEnergi = 10;
console.log(galih.energi); //20