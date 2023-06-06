// 정적 메소드와 속성 정의
class Product{    
    build(name, price){
        const id = Math.floor(Math.random()*1000);
        return new Product(id, name, price);
    }

    getTaxPrice(product){
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const product = new Product();
const gum=product.build('껌', 1000);
console.log(gum);