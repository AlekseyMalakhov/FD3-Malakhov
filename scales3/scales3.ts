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

interface IStorageEngine {
  addItem(item);
  getItem(index);
  getCount();
  getProducts();
};

class ScalesStorageEngineArray implements IStorageEngine {
  products: IScalable[] = [];

  addItem(item: IScalable): void {
    this.products.push(item);
  }

  getItem(index: number): IScalable {
    return this.products[index];
  }

  getCount(): number {
    return this.products.length;
  }

  getProducts(): IScalable[] {
    return this.products;
  }
}


class ScalesStorageEngineLocalStorage implements IStorageEngine {
  keyname = 0;

  addItem(item: IScalable): void {
    var n = this.keyname.toString();
    var value = JSON.stringify(item); 
    localStorage.setItem(n, value);
    this.keyname++; 
  }

  getItem(index: number): IScalable {
    var n = index.toString();
    var item = JSON.parse(localStorage.getItem(n));
    item = new Product(item.name, item.weight);
    return item;
  }

  getCount(): number {
    return this.keyname;
  }

  getProducts(): IScalable[] {
    var arr = [];
    var item: IScalable;
    for (var i = 0; i < this.keyname; i++) {
      item = this.getItem(i);
      arr.push(item);
    }
    return arr;
  }
}

interface IScalable {
  getScale(): number;
  getName(): string;
};

class Product implements IScalable {
  private name: string;
  private weight: number;

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

class Scales <StorageEngine extends IStorageEngine> {
  storageEngine: StorageEngine;

  constructor(theStorageEngine: StorageEngine) {
    this.storageEngine = theStorageEngine;
  }

  add(item: IScalable) {
    this.storageEngine.addItem(item);
  }

  getSumScale(): number {
    var result: number = 0;
    var products = this.storageEngine.getProducts();
    products.forEach(sum);
    function sum(item: IScalable): void {
      var weight = item.getScale();
      result = result + weight;
    }
    return result;
  }

  getNameList(): string[] {
    var result: string[] = [];
    var products = this.storageEngine.getProducts();
    products.forEach(nameList);
    function nameList(item: IScalable): void {
      var name = item.getName();
      result.push(name);
    }
    return result;    
  }
}

var engine1 = new ScalesStorageEngineArray();
var scale1 = new Scales<ScalesStorageEngineArray>(engine1);

var engine2 = new ScalesStorageEngineLocalStorage();
var scale2 = new Scales<ScalesStorageEngineLocalStorage>(engine2);


fruits.forEach(addFruits);
function addFruits(item: {name: string, weight: number}) {
  scale1.add(new Product(item.name, item.weight));
  scale2.add(new Product(item.name, item.weight));
}

console.log(scale1.getSumScale());
console.log(scale1.getNameList());

console.log(scale2.getSumScale());
console.log(scale2.getNameList());

