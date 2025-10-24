// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

//const styles = ["jazz", "blues"];

//s//tyles.push(`rock-n-roll`);
//styles[1] = "classic";
//const index = styles.indexOf("blues");
//styles[index] = "classic";
//console.log(styles);


// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


//const styles = ['jazz', 'blues'];
//c//onsole.log(styles);

//styles.push("rock-n-roll");

//const index = styles.indexOf("blues");

//function logItems(array) {
    //for (let i = 0; i < array.length; i++){
       // console.log(`${i+1} - array[i]`);
    //}
//}
//logItems(styles);


//for (const style of styles){
    //console.log(styles);
//}


//Задача 2 

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

///function checkLogin(array) {
    ///const username = prompt("Введіть ім'я користувача:");
  
    ///if (array.includes(username)) {
        ///alert(`Welcome, ${username}!`);
    ///} else {
      ///alert("User not found");
    ///}
  ///}
  
  ///const logins = ["Peter", "John", "Igor", "Sasha"];
  
  ///checkLogin(logins);


//prompt() — запитує ім’я користувача
//array.includes(username) — перевіряє, чи є ім’я в масиві логінів
//alert() — виводить відповідне повідомлення


//Задача 3 
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.



//аргумент — це значення, яке ти передаєш у функцію під час її виклику.
// сount  ллічильник цифр 
// оголошення функції з довільною кількістю аргументів
// NaN - Not-a-Number - не число

//function calculateAverage(...args) {
    //let total = 0;
    //let count = 0;
  
    //for (const arg of args) {
      //if (typeof arg === 'number')  {
        //total += arg;
        //count++;
      //}
    //} if count === 0{
    //return 0}
    
    //return total / count;
  //}
  
  
  //console.log(calculateAverage(10, 20, 30)); 
  //console.log(calculateAverage(5, "lalala", 15)); 
//console.log(calculateAverage("дфд", null));
  


//Задача 4
// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


//const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//function sumNejNumber(array) {
    //const result = [];
//}

//console.log()

//7

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

//const user = {
    //name: "John",
    //age: 20,
    //hobby: "tenis",
    //premium: true,
   //};

//user.mood = `happy`;
//user[`mood`] = `happy`;
//const key = `mood`;
//user[key] = `happy`;
//user.hobby = `skydiving`;
//user.premium = false;
//console.log(user);


//const userKeys = Object.keys(user);
//for (const key of userKeys) {
    //console.log(`${key}: ${user[key]});
//}


//const userArrs = Object.entries(user);
//for (const arr of userArrs) {
    //console.log(`${arr[0]}: ${arr[1]})
//}


///задача 8

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

//const salaries = {
   // Mango: 100,
    //Poly: 160,
   //Ajax: 1470,
//};
  
//let total = 0;

//for (const key in salaries) {
    //total += salaries[key];
//}

//c//onsole.log(total);


// Задача 9

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

//const calculator = {
    

//let sum = 0;
    //for(const key in calculator) {
        //sum += calculator[key];
        //console.log(sum);
//}
//}


//Задача

// Створіть телефонну книгу - об'єкт phonebook,
// у якого є властивість contacts (список контактів)
// та методи управління книгою:
// add(data) - приймає об'єкт data, де передається
// name і email, category може передаватись чи ні,
// всередині метода add створіть обʼєкт newContact з властивостями  name, email, category, id, createdAt
// (name i email - обов'язкові параметри, які треба передавати
// при додаванні нового контакта,
// category - може передаватись чи ні, якщо ні - має
// приймати значення "default",
// id та createdAt генеруються відповідними методами:
// generateId() і getDate());
// і додає newContact до списку контактів contacts;
// *не забудьте додати перевірку, якщо контакт з таким ім'ям чи імейлом вже є - ми його не додаємо
// list() - виводить список контактів у вигляді таблиці;
// filtered(category) - фільтрує контактів по обраній категорії (друзі, робота і т.д.);
// delete(name) - видаляє контакт з заданим ім'ям;
// updateName(oldName, newName) - змінює ім'я контакта;
// const phonebook = {
//     contacts: [],
//     add(data) {},
//     list() {},
//     filtered(category) {},
//     delete(name) {},
//     updateName(oldName, newName) {},
//     generateId() {
//       return "#" + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return Date.now();
//     },
//   };
