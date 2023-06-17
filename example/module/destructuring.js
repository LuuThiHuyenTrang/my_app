/**
 * Destructuring -phan ra
 -array
 -object
 */
// const users = ["datlt", "thienth", "sontv"]
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// const [user1, , user3] = users; // neu muon lay 1 voi 3 thi bo trong o thu 2
// console.log(user1, user3);



//desstructuring object({}- la object, []-la mang)
// const product = {
//     id: 1,
//     prdName: "Product 1",
//     price: 500,
//     description: "Main content" 

// }
// const id=product.id
// const prdName=product.prdName;
// console.log(id);
// console.log(prdName);
// const { id, prdName, price, description = 'Description content' } = product
// console.log(id);
// console.log(prdName);
// console.log(price);
// console.log(description); //neu khong co gtri o tren thi mac dinh o duoi se hien ra"description content"


const product = {
    id: 1,
    prdName: "Product 1",
    price: 500,
    description: "Main content",
    subProduct: {
        prdName: "Sub Product ",
    }

}
const { prdName, subProduct: { prdName: subName } } = product
console.log(subName);
