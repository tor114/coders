class Vehicle {
  constructor() {
    this.distance = 0;
    this.petrol = 1;
    this.petrolUsageCoefficient = 0;
  }
  move(distance) {
    if(distance * this.petrolUsageCoefficient > this.petrol) {
       this.distance += this.petrol / this.petrolUsageCoefficient;
       this.petrol = 0;
    } else {
      this.distance += distance;
      this.petrol -= distance * this.petrolUsageCoefficient;
    }
  }
  tankToFull() {
    this.petrol = 1;
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    this.petrolUsageCoefficient = 0.1;
  }
  drive(distance) {
    super.move(distance);
  }
}
class Plane extends Vehicle {
  constructor() {
    super();
    this.petrolUsageCoefficient = 0.5;
  }
  fly(distance) {
    super.move(distance);
  }
}

const lamborghini = new Car();
lamborghini.drive(3);

console.log(lamborghini);