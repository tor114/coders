/**
 * Poniżej pisz swój kod!
 */

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    // this.inStock = Boolean(this.quantity);
  }

  get inStock() {
    return Boolean(this.quantity);
  }

  isInStock() {
    return this.inStock ? 'Product available' : 'Lack of product';
  }

  order(quantity) {
    if(quantity > this.quantity) return false;
    this.quantity -= quantity;
    // if(this.quantity === 0) this.inStock = false;
  }

  addToStock(q) {
    this.quantity += q;
    // if (q) this.inStock = true;
  }
}

class Shoes extends Product {
  constructor(name, price, quantity) {
    super(name, price, quantity);
    this.colors = [];
    this.sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
  }

  addColor(color) {
    // this.colors.push(color);
    this.colors = [...this.colors, color];
  }

  removeSize(size) {
    this.sizes = this.sizes.filter(s => s !== size);
  }
}

/**
 * Nie modyfikuj tego kodu!
 */
// export {
//   Product,
  // Shoes
// };

const p = new Product("test", 2, 5);
console.log(p);
console.log(p.inStock);
p.order(5);
console.log(p.inStock);
