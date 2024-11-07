//Завдання 1: Оголошення змінних для примітивних типів
// Оголошення змінних
let name = "Дмитро";         // Тип: string
let age = 18;              // Тип: number
let isAdult = true;        // Тип: boolean
let unknownValue = null;   // Тип: null
let undefinedValue;       // Тип: undefined

// Виведення змінних на консоль
console.log("name:", name);
console.log("age:", age);
console.log("isAdult:", isAdult);
console.log("unknownValue:", unknownValue);
console.log("undefinedValue:", undefinedValue);
//Завдання 2: Конкатенація рядків та шаблонний рядок
// Імена двох осіб
let person1 = "Дмитро";
let person2 = "Єгор";
// Конкатенація рядків
let greeting1 = "Привіт, " + person1 + " і " + person2 + "!";
console.log(greeting1);

// Використання шаблонного рядка
let greeting2 = `Привіт, ${person1} і ${person2}!`;
console.log(greeting2);
//Завдання 3: Числа та булі



// Виведення змінних
console.log("Вік:", age);
console.log("Чи повнолітній:", isAdult);
//Завдання 4.1: Площа кола
// Радіус кола
let radius = 5;

// Площа кола (π * r^2)
let areaOfCircle = Math.PI * Math.pow(radius, 2);
console.log("Площа кола:", areaOfCircle.toFixed(2));
//Завдання 4.2: Площа прямокутника
// Довжина та ширина прямокутника
let length = 10;
let width = 4;

// Площа прямокутника (довжина * ширина)
let areaOfRectangle = length * width;
console.log("Площа прямокутника:", areaOfRectangle);
//Завдання 4.3: Об'єм циліндра
// Радіус і висота циліндра
let cylinderRadius = 3;
let cylinderHeight = 7;

// Об'єм циліндра (π * r^2 * h)
let volumeOfCylinder = Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight;
console.log("Об'єм циліндра:", volumeOfCylinder.toFixed(2));
