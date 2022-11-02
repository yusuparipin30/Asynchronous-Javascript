/*1.Synchronous adalah setiap perintah di eksekusi satu persatu sesuai urutan kode
 yang di tuliskan dari atas ke bawah*/

 /*Dalam dunia nyata ini mirip seperti antrian di BANK. Jika anda berada antrian nomor 4,
  maka anda akan dilayani setelah antrian 1–3 sampai selesai.*/

 console.log('Hello!');
 console.log('Javascript ')
 console.log('Coder');

 //outputnya adalah :
 //Hello!
 //Javascript
 //Coder



/*2.  Konsep ansynchoronous adalah kode akan di eksekusi tampa menunggu eksekusi kode lain selesain
      sehingga seakan2 akan di eksekusi secara bersamaan hasil eksekusi atau output tidak selalu 
      berdasarkan urutan kode, tetapi berdasarkan waktu proses.
      Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu perintah sampai selesai.*/

//. EXAMPLE 1.ansynchoronous menggunakan kode biasa

console.log('Hi Yusuf'); 

setTimeout(function () {
  console.log('the time has come');
}, 3000);

console.log('to learn how to code');

/*setTimeout pada code di atas membuat kata the time has come akan ditampilkan setelah 3 detik.

Namun JavaScript tidak akan menunggu selama 3 detik tapi akan segera menampilkan kata to learn how to code.*/

// outputnya adalah:

// Hi Yusuf
// to learn how to code
// the time has come 

//EXAMPLE 2. menggunakan arrow function

console.log('Hello!');

setTimeout(() => {
  console.log('Java Script')
},100);

console.log('Coder');

/*Pada baris ke 47-49 setTimeout digunakan untuk menunda eksekusi dalam satuan
 milisecond dalam hal ini untuk simulasi prosess async.*/

//output adalah :

// Hello!
// Coder
// Java Script
