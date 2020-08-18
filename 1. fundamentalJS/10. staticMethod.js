//* adalah sebuah cara menggunakan method, tanpa perlu membuat instance baru dari object

//*pewarisan class menggunakan teknik inheritance 'extends'

//parent class
class Kendaraan {
    constructor ( plat, merk) {
        this.plat = plat;
        this.merk = merk;
    }

    //method
    info () {
        console.log(`Nomor Plat: ${this.plat}, Merk Kendaraan: ${this.merk}`);
    }

    parkir () {
        console.log(`Kendaraan bernomor plat ${this.plat} parkir!`);
    }
}

// child class

class Motor extends Kendaraan {
    constructor( plat, merk, type ) {
        super( plat, merk );
        this.type = type;
    }

    // method overriding
    info () {
        super.info();
        console.log(`Motor ini bertipe : ${this.type}`);
    }
}

// new class bengkel

class Bengkel {
    
    //method
    static perbaiki (kendaraan) {
        console.log(`Kendaraan ${kendaraan.plat} sedang diperbaiki, silahkan menunggu!`);
    }
}

//* instance baru dari Motor
let beat = new Motor('BP 2664 EM', 'Beat', 'Matic');

//* Menggunakan method .perbaiki() tanpa membuat instance dari bengkel terlebih dahulu
Bengkel.perbaiki(beat);
