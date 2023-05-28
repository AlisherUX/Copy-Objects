"use strict";

//OBYEKTLARNI NUSXALASH USULLARI



//1 - usul " Object.assign() "
let a = { 
    name: "John",
    age: 18,            // <-- Birinchi obyekt yaratiladi (1)
    lastName: "Doe", 
};


//
// Yana bir bo'sh obyekt yaratiladi (2)
//    ||
//    \/
let b = {};

//Keyin " Object.assign()" bilan user qiymatlari user2ga kopiya qilinadi. Quyidagi tarzda. 

//    Qiymat berilishi      |  Qiymat kopiyalash kerak
//    kerak bo'lgan obyekt  |      bo'lgan obyekt
//            ||                        ||
//            \/                        \/
Object.assign(b,                        a);

// Eslatib o'tamiz agar siz user2ni ichida Object.assign bilan userni qiymatlarini
// ko'piyalamoqchi bo'lsangiz o'zini ichida yana o'zini ismini yozmay " {} " qo'yishingiz kerak.

// Example: let user2 = Object.assign({}, user); <-- shu tarzda

// Agar "user2"ni qiymatini o'zgartirmoqchi bo'lsangiz
// unga "user"ni qiymatlari qo'piyalangandan so'ng o'zgartiring
// aks holda qiymat o'zgarmaydi !!! it's important !!!
b.name = "Alisher";

console.log(b, a);

// Eslatma: Siz bu yo'l bilan obyektning sayoz nusxasini ko'chirishingiz mumkin.






// 2 - usul " Spread "
let a = {
    name: "John",
    sureName: "Doe",   // <-- Birinchi obyekt yaratiladi (1)
    age: 18,
};


// Qiymatlar qo'piyalanishi kerak   |   Qiymatlari ko'piyalanishi kerak bo'lgan 
// bo'lgan obyekt yaratiladi.       |   obyekt nomi 3 ta nuqta qo'yib yoziladi.
//      ||                                       ||
//      \/                                       \/
let b = {                           ...a};

// Qiymatlarni ko'piyalangandan so'ng
// o'zgartirish mumkin aks holda console.logda
// error chiqadi.
b.name = "Alisher";

console.log(b, a);

// Eslatma: Siz bu yo'l bilan obyektning sayoz nusxasini ko'chirishingiz mumkin.







//3 - usul " JSON.parse() "
let a = { 
    name: "John",
    age: 18,            // <-- Birinchi obyekt yaratiladi (1)
    lastName: "Doe", 
};


//
// Yana bir bo'sh obyekt yaratiladi (2)
// Keyin " JSON.parse() " bilan user qiymatlari user2ga kopiya qilinadi. Quyidagi tarzda. 
// Qavslarga e'tibor bering !!!
//    ||
//    \/
let b = JSON.parse(JSON.stringify(a));


// Agar "user2"ni qiymatini o'zgartirmoqchi bo'lsangiz
// unga "user"ni qiymatlari qo'piyalangandan so'ng o'zgartiring
// aks holda error !!!
b.name = "Alisher";

console.log(b, a);
// Eslatma: Bu yo'l obyektning chuqur nusxasini olishda ishlatiladi.