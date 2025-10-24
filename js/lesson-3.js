
// Дано масив чисел. Видаліть дублікати.
// [1, 2, 2, 3, 4, 4, 5] → [1, 2, 3, 4, 5]
// const newArr = [...new Set(arr)]


//Задача 1

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].


//сума масиву квадратів



//const numbers = [1, 2, 3, 4, 5]

//const arr = numbers.reduce((acc, item) => {
    //return acc + item**2;
//}, 0);
//console.log(arr);



//отримати масив квадратів

//const squares = numbers.map(item => item ** 2);

//console.log(squares); // [1, 4, 9, 16, 25]

//асс - акмулятор
//item - елемент нашого масиву
//reduce - перебираючий метод
// map() — для трансформації елементів у новий масив


//Задача 2
// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
// { id: 1, values: [1, 2, 3] },
// { id: 2, values: [4, 5, 6] },
// { id: 3, values: [7, 8, 9] },];

// const allValues = data.flatMap(obj => obj.values);

// console.log(allValues);

// function getAllValues(dataArray) {
//     return dataArray.flatMap(obj => obj.values);
//   }
//   const allValues = getAllValues(data);
//   console.log(allValues);





  

//Задача 3
// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
// { name: 'John', age: 27 },
// { name: 'Jane', age: 31 },
// { name: 'Bob', age: 19 },];


// const youngMen = (people, maxAge) => {
//     return people
//         .filter(people => people.age < maxAge);
        
// };
// console.log(youngMen (people, 20));



// const people = [
// { name: 'John', age: 27 },
// { name: 'Jane', age: 31 },
// { name: 'Bob', age: 19 },];

// const youngMen = (people, maxAge) => {
//     return people.some(person => person.age < maxAge);
// };
  
// console.log(youngMen (people, 20));



//.some() повертає true, якщо хоча б один елемент
// у масиві відповідає умові.








//Задача 4



// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним.
// Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const doubles = (numbers, a) => {
//     return numbers.some(number => (number % a === 0));
// };
// console.log(doubles(numbers, 2));








//Задача 5



// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

const firstnotDoubles = (numbers) => {
    return numbers.find(number => number % 2 !== 0);
        
};
console.log(firstnotDoubles(numbers));

//find() повертає перший такий елемент або undefined, якщо
// жодного не знайдено.

//якщо хочу отримати всі непарні число, то це буде метод фільтр






//Задача 6


// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

 
// const sortMinmax = (numbersArray) => {
//     return numbersArray
//         .toSorted((a, b) => a - b);
// };
    
// console.log(sortMinmax(numbersArray));


//Задача 7


// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const arr = (stringArray) => {
//     return stringArray.toSorted((a, b) => a.localeCompare(b));
    
// };
// console.log(arr(stringArray));





// якщо потрібне сортування по алфавіту, то без змінних (а,в) в toSorted)
// якщо потрібне сортування чисел, то потрібно вказувати змінні (а,в) в toSorted)



// якщо потрібне сортування у зворотньому напрямку, то
// використовуємо .toSorted().reverse().

//const arr = (stringArray) => {
    //return stringArray.toSorted().reverse();
  //};
  
  //console.log(arr(stringArray));
// ['pear', 'orange', 'banana', 'apple']
  


//Задача 8
//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27},
// {name: "Jane", age: 31}].

//const users = [
 //{ name: 'John', age: 27 },
 //{ name: 'Jane', age: 31 },
 //{ name: 'Bob', age: 19 },
//];

//const ageMinmax = (users) => {
    //return users
        //.toSorted((a, b) => a.age - b.age);
//};

//console.log(ageMinmax(users));



//Задача 9
//// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [//
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ]
 
// const newUsers = (user, minAge) => {
//     return user
//         .filter(user => user.age > minAge);
// }
     

// console.log(newUsers(user, 20));


// const getUser = (obj) => obj.filter(el => el.age > 20);

// console.log(getUser(user));


//Задача 10

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.
// const numbers = [1, 2, 3, 4, 5];
 
// const total = numbers.reduce((acc, item) => {
//     return acc + item;
// }, 0);

// console.log(total);




//Задача 11
//// Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24

class Calculator {
    constructor() {
      this.value = 0;
    }
  
    number(value) {
      this.value = value;
      return this;
    }
  
    add(value) {
      this.value += value;
      return this;
    }
  
    subtract(value) {
      this.value -= value;
      return this;
    }
  
    multiply(value) {
      this.value *= value;
      return this;
    }
  
    divide(value) {
      if (value === 0) {
        throw new Error("Неможливо ділити на 0");
      }
      this.value /= value;
      return this;
    }
  
    getResult() {
      return this.value;
    }
  }


const calc = new Calculator();


const result = calc
  .number(10)   // Встановлюємо початкове значення 10
  .add(5)       // Додаємо 5 (10 + 5 = 15)
  .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
  .multiply(4)  // Множимо на 4 (12 * 4 = 48)
  .divide(2)    // Ділимо на 2 (48 / 2 = 24)
  .getResult(); // Отримуємо результат: 24


  console.log(result); // 24


  //Ланцюжковий виклик (method chaining) — це техніка програмування, коли
  //  методи викликаються один за одним на одному й тому самому об'єкті, без
  //  потреби повторно звертатись до об'єкта. Це можливо, коли кожен метод
//  повертає сам об'єкт (this), що дозволяє "зчіплювати" виклики.
  // якщо нуль задати через number  то перед .this повина бути number