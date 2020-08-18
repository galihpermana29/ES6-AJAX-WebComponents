const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
      arabica: 250,
      robusta: 60,
      liberica: 80
    }
   }   
    
   const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
      if(state.seedStocks[type] >= miligrams) {
        state.seedStocks[type] -= miligrams;
        resolve("Biji kopi didapatkan!")
      } else {
        reject("Maaf stock kopi habis!")
      }
    });
    /* return state.seedStocks[type]; */
   }
   
   const makeCoffee = seeds => {
    return new Promise((resolve, reject) => {
      if(state.isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat!")
      } else {
        reject("Maaf mesin tidak dapat digunakan!");
      }
    })
   }
    
   const servingToTable = coffee => {
    return new Promise(resolve => {
      resolve("Pesanan kopi sudah selesai!")
    })
   }
    
   function reserveACoffee(type, miligrams) {
    getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then(resolvedValue => {
      console.log(resolvedValue);
    })
    .catch(rejectedReason => {
      console.log(rejectedReason);
    })
   }
    
   /* Silakan ubah tipe kopi dan kuantitasnya, untuk mendapatkan promise rejection*/
   reserveACoffee('liberica', 80);


   