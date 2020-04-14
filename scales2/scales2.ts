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

interface IScalable {
  name: string;
  weight: number;
  getScale(): number;
  getName(): string;
};

class Fruit implements IScalable {
  name:string;
  weight:number;
  type = "fruit";

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

class Vegetable implements IScalable {
  name:string;
  weight:number;
  type = "vegetable";

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

class Scales {
  products: IScalable[] = [];

  add(item: IScalable) {
    this.products.push(item);
  }

  getSumScale(): number {
    var result: number = 0;
    this.products.forEach(sum);
    function sum(item: IScalable): void {
      result = result + item.weight;
    }
    return result;
  }

  getNameList(): string[] {
    var result: string[] = [];
    this.products.forEach(nameList);
    function nameList(item: IScalable): void {
      result.push(item.name);
    }
    return result;    
  }
}

var scale = new Scales;

fruits.forEach(addFruits);
function addFruits(item: {name: string, weight: number}) {
  scale.add(new Fruit(item.name, item.weight));
}

console.log(scale.getSumScale());
console.log(scale.getNameList());

vegetables.forEach(addVegetables);
function addVegetables(item: {name: string, weight: number}) {
  scale.add(new Vegetable(item.name, item.weight));
}

console.log(scale.getSumScale());
console.log(scale.getNameList());
