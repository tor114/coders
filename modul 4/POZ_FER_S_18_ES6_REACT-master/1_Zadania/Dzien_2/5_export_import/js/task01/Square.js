// const Polygon  = require('./Polygon');

import Polygon from "./Polygon";

class Square extends Polygon {
  constructor(dim = 5) {
    super(dim, dim);
    this.name = 'Square';
  }
}

// module.exports = Square;
export default Square;