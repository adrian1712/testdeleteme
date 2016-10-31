console.log("helloooo");
var Product = (function () {
    function Product(price) {
        this.price = price;
    }
    return Product;
}());
var tesla = new Product(120000);
debugger;
