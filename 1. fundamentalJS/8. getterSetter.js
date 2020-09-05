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


class Thermostat {
   constructor(fahrenheit){
     this.fahrenheit = fahrenheit
   }
 
   

   get temperature(){
     return this.fahrenheit
   }
 
   set temperature(celcius){
     return this.fahrenheit = celcius * 9.0 / 5 + 32 
   }
 }


 const thermos = new Thermostat(76); // Setting in Fahrenheit scale
 let temp = thermos.temperature; // 24.44 in Celsius
 thermos.temperature = 26;
 temp = thermos.temperature; // 26 in Celsius
 console.log(temp)