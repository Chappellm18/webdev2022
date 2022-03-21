// make a constructor function called Product
// it should have properties for id name and price
// it should also have get and set methods for each property

class product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
}
function Product(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.getId = function () {
        return this.id;
    }
    this.getName = function () {
        return this.name;
    }
    this.getPrice = function () {
        return this.price;
    }
    this.setId = function (id) {
        this.id = id;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.setPrice = function (price) {
        this.price = price;
    }
}
