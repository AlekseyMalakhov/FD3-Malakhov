var fruits = [
    {
        name: "apple",
        weight: 5
    },
    {
        name: "banana",
        weight: 4
    },
    {
        name: "cherry",
        weight: 7
    },
    {
        name: "plump",
        weight: 6
    },
];
;
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    ScalesStorageEngineArray.prototype.getProducts = function () {
        return this.products;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.keyname = 0;
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var n = this.keyname.toString();
        var value = JSON.stringify(item);
        localStorage.setItem(n, value);
        this.keyname++;
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var n = index.toString();
        var item = JSON.parse(localStorage.getItem(n));
        item = new Product(item.name, item.weight);
        return item;
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return this.keyname;
    };
    ScalesStorageEngineLocalStorage.prototype.getProducts = function () {
        var arr = [];
        var item;
        for (var i = 0; i < this.keyname; i++) {
            item = this.getItem(i);
            arr.push(item);
        }
        return arr;
    };
    return ScalesStorageEngineLocalStorage;
}());
;
var Product = /** @class */ (function () {
    function Product(theName, theWeight) {
        this.name = theName;
        this.weight = theWeight;
    }
    Product.prototype.getScale = function () {
        return this.weight;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Scales = /** @class */ (function () {
    function Scales(theStorageEngine) {
        this.storageEngine = theStorageEngine;
    }
    Scales.prototype.add = function (item) {
        this.storageEngine.addItem(item);
    };
    Scales.prototype.getSumScale = function () {
        var result = 0;
        var products = this.storageEngine.getProducts();
        products.forEach(sum);
        function sum(item) {
            var weight = item.getScale();
            result = result + weight;
        }
        return result;
    };
    Scales.prototype.getNameList = function () {
        var result = [];
        var products = this.storageEngine.getProducts();
        products.forEach(nameList);
        function nameList(item) {
            var name = item.getName();
            result.push(name);
        }
        return result;
    };
    return Scales;
}());
var engine1 = new ScalesStorageEngineArray();
var scale1 = new Scales(engine1);
var engine2 = new ScalesStorageEngineLocalStorage();
var scale2 = new Scales(engine2);
fruits.forEach(addFruits);
function addFruits(item) {
    scale1.add(new Product(item.name, item.weight));
    scale2.add(new Product(item.name, item.weight));
}
console.log(scale1.getSumScale());
console.log(scale1.getNameList());
console.log(scale2.getSumScale());
console.log(scale2.getNameList());
