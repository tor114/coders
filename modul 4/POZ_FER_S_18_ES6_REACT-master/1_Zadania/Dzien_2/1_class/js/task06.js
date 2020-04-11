let foods =[];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;

    foods.push(this);
  }
}


const nameOfVar = "cat";

window[nameOfVar] = 3;