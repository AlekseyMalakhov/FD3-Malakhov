var fruits: object[] = [
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

var vegetables: object[] = [
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

class Product {
  name:string;
  weight:number;

  constructor(theName:string, theWeight:number) {
    this.name = theName;
    this.weight = theWeight;
  }

  getScale() {
    return this.weight;
  }

  getName() {
    return this.name;
  }
}

class Fruit extends Product {
  constructor(theName:string, theWeight:number) {
    super(theName, theWeight);
  }
  type = "fruit";
}

class Vegetable extends Product {
  constructor(theName:string, theWeight:number) {
    super(theName, theWeight);
  }
  type = "vegetable";
}

class Scales {
  products: Product[];

  add(items: Product[]) {
    this.products = items;
  }

  getSumScale() {
    var result: number = 0;
    this.products.forEach(sum);
    function sum(item: Product): void {
      result = result + item.weight;
    }
    console.log(result);
  }

  getNameList() {
    var result: string[] = [];
    this.products.forEach(nameList);
    function nameList(item: Product): void {
      result.push(item.name);
    }
    console.log(result);    
  }
}

var packOffruits: Fruit[] = [];
fruits.forEach(createPackOfFruits);

function createPackOfFruits(item: {name: string, weight: number}) {
  packOffruits.push(new Fruit(item.name, item.weight));
}

var packOfVegetables: Vegetable[] = [];
vegetables.forEach(createPackOfVegetables);

function createPackOfVegetables(item: {name: string, weight: number}) {
  packOfVegetables.push(new Vegetable(item.name, item.weight));
}

console.log(packOffruits);
console.log(packOfVegetables);

var scale = new Scales;
scale.add(packOffruits);
scale.getSumScale();
scale.getNameList();

scale.add(packOfVegetables);
scale.getSumScale();
scale.getNameList();
