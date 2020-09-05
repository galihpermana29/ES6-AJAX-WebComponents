fetch("https://web-server-book-dicoding.appspot.com/add", {
 method: "POST",
 headers: {
   "Content-Type": "application/json",
   "X-Auth-Token": "12345"
 },
 body: JSON.stringify({
   id: 110,
   title: "Edensofffffr",
   author: "Andrea Hirfffffata"
 })
})
