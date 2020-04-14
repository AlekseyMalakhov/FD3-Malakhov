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
;
var Fruit = /** @class */ (function () {
    function Fruit(theName, theWeight) {
        this.type = "fruit";
        this.name = theName;
        this.weight = theWeight;
    }
    Fruit.prototype.getScale = function () {
        return this.weight;
    };
    Fruit.prototype.getName = function () {
        return this.name;
    };
    return Fruit;
}());
var Vegetable = /** @class */ (function () {
    function Vegetable(theName, theWeight) {
        this.type = "vegetable";
        this.name = theName;
        this.weight = theWeight;
    }
    Vegetable.prototype.getScale = function () {
        return this.weight;
    };
    Vegetable.prototype.getName = function () {
        return this.name;
    };
    return Vegetable;
}());
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
