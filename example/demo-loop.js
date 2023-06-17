// const users = ["datlt", "thienth", "sontv"];
// // for (let i in users) {// index trong mang tu 0 tro di
// //     console.log(users[i]);
// // }

// // for (let item of users) { //gia tri trong mang
// //     console.log(item);
// // }
// /*
//     v1: item - datlt
//     v2: item - thienth
//     v3: item - sontv
// */
// // gia tri luon dau , index o sau ( gia tri, so)
// users.forEach((index, item) => {
//     console.log(index);
// })
//buoi6
const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
]
// // map : tao 1 mang moi dua tren dkien(return) -- giu nguyen phan tu, gtri thay doi--
// const result = products.map(function (item) {
//     //  console.log(item);
//     return `
//   <div>${item.name}</div>
//   <div>${item.price}</div>
//   `
// })
// console.log(result);
// const app=document.querySelector('#app');
// app.innerHTML = result.join("");//join de xoa dau phay di 

//find: dkien tim kiem
// const result = products.find( (item)=> {
//     // console.log(item.id);
//     return item.id == 3
// })
// console.log(result);

// filter : tao mang moi tuy vao dieu kien de thay doi so luong 
const result = products.filter(item => {// arowfunction
    return item.id != 1
})
console.log(result);
