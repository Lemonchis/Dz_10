/*
 Задача №1
* Напиши функцію findSmallesNumber(numbers)
 для пошуку найменшого числа в масиві,
 * при умові що числа унікальні (не повторюються).
 */
// function findSmallestNumber(numbers) {
//   if (numbers.length === 0) {
//     return null;
//   }

//   let smallestNumber = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallestNumber) {
//       smallestNumber = numbers[i];
//     }
//   }
//   return smallestNumber;
// }
// const numbers = [3, 5, 1, 9, 2];
// const smallestNumber = findSmallestNumber(numbers);
// console.log(smallestNumber);
// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// .............................
// Задача №2
// Функція checkStorage(available, ordered)
// перевіряє можливість оформлення замовлення
//  і повертає повідомлення про результат.
//  Вона оголошує два параметри,
// значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження,
// доповни код функції таким чином, що:

// Якщо в замовленні вказане число,
// яке перевищує кількість товарів на складі,
// у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;
//   Change code below this line

//   Change code above this line
//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }

//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// .............................
