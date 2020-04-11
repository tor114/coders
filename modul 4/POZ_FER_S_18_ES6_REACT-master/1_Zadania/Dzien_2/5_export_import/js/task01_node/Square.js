const Polygon = require('./PolygonFile');

class Square extends Polygon {
  constructor(dim = 5) {
    super(dim, dim);
    console.log(super.constructor);
    this.name = 'Square';
  }
}

module.exports = Square;