// Змінна з кількістю балів студента
let testScore = 75;

// Конвертуємо бал в діапазон
let scoreCategory = Math.floor(testScore / 10);

// Використання конструкції switch для визначення рейтингу
switch (scoreCategory) {
  case 0:
  case 1:
    console.log("Потрібно покращити знання");
    break;
  case 2:
  case 3:
    console.log("Середній рівень");
    break;
  case 4:
  case 5:
    console.log("Хороший рівень");
    break;
  case 6:
  case 7:
    console.log("Дуже хороший рівень");
    break;
  case 8:
  case 9:
    console.log("Відмінний рівень");
    break;
  default:
    console.log("Невірне значення балів");
}
