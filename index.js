var name = 'yrys';
var age = 12345;
var isStudent = true;
var emptyValue = null;
var notAssigned;

console.log(name);
console.log(age);
console.log(isStudent);
console.log(emptyValue);
console.log(notAssigned);

console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isStudent);   // boolean
console.log(typeof emptyValue);  // object
console.log(typeof notAssigned); // undefined
var person = {
  name: name,
  age: age,
  isStudent: isStudent
};
console.log("Меня зовут " + person.name + ", мне " + person.age + " лет.");

var favoriteMovies = [
  "Интерстеллар",
  "Начало",
  "Матрица",
  "Паразиты",
  "Зелёная миля"
];

console.log(favoriteMovies);