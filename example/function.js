/*
    - function declaration
    - function expression
    - arrow function
*/

function functionDeclaration(a, b) {
    return a + b;
}
console.log(functionDeclaration(10, 20));

const functionExpression = function (a, b) {
    return a + b;
}
console.log(functionExpression(10, 20));

const arrowFunction = (a, b) => {// neu chi co return thi viet gon la (a,b)=>a+b;
    return a + b;
}


// Bai 1:
const bai1 = () => {
    const a = prompt(" Moi ban nhap mot so bat ky: ");
    console.log(a);
    let tong = 0;
    for (let i = 0; i < Number(a) + 1; i++) {
        if (i % 2 == 0) {
            tong = tong + i;
        }
    }
    return " Tong cac so chia het cho 2 tinh tu 0 la: " + tong;

}
console.log(bai1());
// bai2
const bai2 = () => {
    const so = prompt(" Moi ban nhap mot so bat ky: ");
    let dem = 0
    for (let i = 0; i < Number(so) + 1; i++) {
        if (i % 2 == 0) {
            dem++;
            console.log(dem);
        }
    }
    return " Có " + dem + " số chia hết cho 2 tính từ 1 đến số " + so;

}
console.log(bai2());



