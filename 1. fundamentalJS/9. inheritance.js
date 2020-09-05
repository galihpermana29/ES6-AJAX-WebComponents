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

class Motor extends Kendaraan {
    constructor( plat, merk, type ) {
        super( plat, merk );
        this.type = type;
    }

    //* Method overriding, penimpaan method info. gunakan keyword 'super' jika ingin tetap menggunakan fungsionalitas method info sebeleumnya. jangan gunakan keyword 'super' jika tidak ingin menggunakan fungsionalitas method sebelumnya.
    info () {
        super.info();
        console.log(`Motor ini bertipe : ${this.type}`);
    }
}

//* instance baru
let supra = new Motor( 'BP2664 EM', 'Supra Fit', 'Manual' );
supra.info();
supra.parkir();
