var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var vegetables = [
    {
        name: "cucumber",
        weight: 7
    },
    {
        name: "potato",
        weight: 2
    },
    {
        name: "tomato",
        weight: 3
    },
    {
        name: "pepper",
        weight: 9
    },
];
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
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit(theName, theWeight) {
        var _this = _super.call(this, theName, theWeight) || this;
        _this.type = "fruit";
        return _this;
    }
    return Fruit;
}(Product));
var Vegetable = /** @class */ (function (_super) {
    __extends(Vegetable, _super);
    function Vegetable(theName, theWeight) {
        var _this = _super.call(this, theName, theWeight) || this;
        _this.type = "vegetable";
        return _this;
    }
    return Vegetable;
}(Product));
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (item) {
        this.products.push(item);
    };
    Scales.prototype.getSumScale = function () {
        var result = 0;
        this.products.forEach(sum);
        function sum(item) {
            result = result + item.weight;
        }
        return result;
    };
    Scales.prototype.getNameList = function () {
        var result = [];
        this.products.forEach(nameList);
        function nameList(item) {
            result.push(item.name);
        }
        return result;
    };
    return Scales;
}());
var scale = new Scales;
fruits.forEach(addFruits);
function addFruits(item) {
    scale.add(new Fruit(item.name, item.weight));
}
console.log(scale.getSumScale());
console.log(scale.getNameList());
vegetables.forEach(addVegetables);
function addVegetables(item) {
    scale.add(new Vegetable(item.name, item.weight));
}
console.log(scale.getSumScale());
console.log(scale.getNameList());
