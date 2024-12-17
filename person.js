let person = {
  firstName: "Дмитро",
  lastName: "Пасічник",
  age: 18
};

person.email = "dmytro.pasichnyk@gmail.com";

delete person.age;
console.log(person);
