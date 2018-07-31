const menu  = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizers) {
      this._appetizers = appetizers;
    },
    get mains() {
      return this._mains;
    },
    set mains(mains) {
      this._mains = mains;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(desserts) {
      this._desserts = desserts;
    }
  },
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    let dish = {
      name: dishName,
      price: dishPrice
    };

    this._courses[courseName].push(dish);

  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
      return dishes[index];
  },
  getRandomMeal() {
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    const price = Math.round((appetizer.price+main.price+dessert.price) *100) / 100;

    return `Total price of ${appetizer.name}, ${main.name}, ${dessert.name} is ${price}`
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Calamari', 7.99);
menu.addDishToCourse('appetizers', 'Chips and Salsa', 5.99);

menu.addDishToCourse('mains', 'Chicken', 15.99);
menu.addDishToCourse('mains', 'Steak', 19.99);
menu.addDishToCourse('mains', 'Salmon', 24.99);

menu.addDishToCourse('desserts', 'Cake', 4.99);
menu.addDishToCourse('desserts', 'Pie', 5.99);
menu.addDishToCourse('desserts', 'Coffee', 2.99);

const meal = menu.getRandomMeal();

console.log(meal);