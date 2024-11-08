

const res = require("express/lib/response");

// // 1 - masala

// function juftSonlarYigindisi(sonlar) {
//     let summa = 0;
//     sonlar.forEach(element => {
//         if (element % 2 === 0) {
//             summa += element;
//         }
//     });
//     return `Arraydagi sonlar yig'indisi ${summa}`;
// }


// console.log(juftSonlarYigindisi([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




// // 2 - masala


// function engUzunSoz(matn) {
//     let sozlar = matn.split(' ')
//     let eng_uzun_soz = ''
//     for (let i = 0; i < sozlar.length; i++) {
//         if (sozlar[i].length > eng_uzun_soz.length) {
//             eng_uzun_soz = sozlar[i];
//         }
//     }
//     return eng_uzun_soz;
// }


// console.log(engUzunSoz("JavaScript dasturlash tili juda qiziqarli"));




// // 3 - masala




// function takrorlanmaydigan(massiv) {
//     let NewArr = [];

//     massiv.forEach(element => {
//         if (NewArr[element]) {
//             NewArr[element]++;
//         } else {
//             NewArr[element] = 1;
//         }
//     });


//     let result = [];
//     for (let i in NewArr) {
//         if (NewArr[i]) {
//             result.push(Number(i));
//         }
//     }

//     return result;
// }

// console.log(takrorlanmaydigan([1, 2, 3, 3, 4, 5, 5, 6]));






