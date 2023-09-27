// type TypeComputeArgs = {
//     a: number;
//     b: number;
//     method: string;
// }

// function compute({
//     a,
//     b,
//     method
// }) {
//     let res = 0;

//     switch (method) {
//         case '+':
//             res = a + b;
//             break;
//         case '-':
//             res = a - b;
//             break;
//         case '*':
//             res = a * b;
//             break;
//         case '/':
//             res = a / b
//             break;
//         default:
//             break;
//     }
// }

class Phone {
    constructor(
        public rom: number,
        public ram: number
    ) {

    }
}

class Dress {
    constructor(
        public color: string,
        public size: number
    ) {

    }
}

 type PhoneConstructor = {
    new(rom: number, ram: number): Phone
 }

 type DressConstructor = {
    new(color: string, ram: number): Dress
 }

 type ProductConstructor = PhoneConstructor | DressConstructor;

 function getProduct1(Product: Phone){
    // Type 'Phone' has no construct signatures.
    // return new Product()
 }

 function getProduct(Product: ProductConstructor | null): Phone | Dress | null {
    switch(Product) {
        case Phone:
            return new Product(8, 256);
        case Dress:
            return new Product('red', 175);
        default:
            return null;
    }
 }

 console.log(getProduct(Phone));
 console.log(getProduct(Dress));
 console.log(getProduct(null));
