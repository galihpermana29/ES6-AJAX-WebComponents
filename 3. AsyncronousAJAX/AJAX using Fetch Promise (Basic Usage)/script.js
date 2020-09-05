// AJAX Using Fetch with Promise Teknik

//! untuk membuat sebuah httprequest pada fetch kita jalankan fungsi fetch('url')

//! fungsi fetch ini mengembalikan promise resolve dan membawa response object didalamanya. tapi isi dari response object yang dibawa promise resolve hanya berupa informasi mengenai response object itu sendiri, seperti status code,target url, header dsb

//! nah untuk mendapatkan data JSON yang kita butuhkan, kita perlu memberikan method .json()

//! nah method .json() itu juga mengembalikan promise tapi promisenya sudah berupa data JSON yang kita inginkan. jadi, kita hanya perlu menchaining .then() untuk menangkap resolve dari method .json()

// hasil fetch berupa promise resolve dan isinya response object 
fetch('https://web-server-book-dicoding.appspot.com/list')
 // menangkap resolve lalu memberikan method .json() 
 .then(responses => {
     return responses.json()
 })
 // menangkap lagi hasil resolve dari method .json() dan mengconsole hasilnya yang sudah berupa data JSON
 .then(responseJSON => {
     console.log(responseJSON)
 })
 .catch(error => console.log(error))