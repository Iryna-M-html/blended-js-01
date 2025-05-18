// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

//const number = Number(prompt(`Enter number`));
//const number = +prompt(`Enter number`);
//console.log(number);

//if (number === 10) {
//   alert("Вірно");
//} else {
//   alert("Невірно");
//}

//alert(number === 10 ? "Вірно" : "Невірно");33

//const value = confirm(`Are you here?`);
//console.log(value);

//Task 2

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);


//const min = 55;

//if (min <= 15) {
//   alert("Перша");
//} else if (min <= 30) {
//   alert("Друга");
//}
//else if (min <= 45) {
//   alert("Третя");
//} else if (min <= 60) {
//   alert("Четверта");
//}

//console.log(min);

//Task 3


// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

   
//let num = prompt("Введіть число від 1 до 4:");
//let result;

//switch (num) {
  //case '1':
    //result = 'зима';
    //break;
  //case '2':
    //result = 'весна';
    //break;
  //case '3':
    //result = 'літо';
    //break;
  //case '4':
    //result = 'осінь';
    //break;
 // default:
  //  result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//}

//console.log(result);



//Task 4

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples



//let minutesInput = prompt("Введіть кількість хвилин:");
//let totalMinutes = Number(minutesInput);


   //let hours = Math.floor(totalMinutes / 60);
//let minutes = totalMinutes % 60;


//let formattedHours = String(hours).padStart(2, '0');
//let formattedMinutes = String(minutes).padStart(2, '0');


//console.log(`${formattedHours}:${formattedMinutes}`);



//Task 5

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",АдмінАдмінтг
// в іншому випадку вивести в alert рядок "Невірний пароль!"

//const login = prompt("Введіть логін:");
//console.log("Введений логін:", login);


//if (login === "Адмін") {
  
  //const password = prompt("Введіть пароль:");

  //if (password === null || password === "") {
    //alert("Скасовано");
  //} else if (password === "Я головний") {
    //alert("Добрий день!");
  //} else {
    //alert("Невірний пароль!"); 
  //}

//} else if (login === null || login === "") {
  //alert("Скасовано");
//} else {
  //alert("Я вас не знаю");
//}

//Task 9

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

//function isAdult(age) {
   //if (age >= 18) {
     // return true;
   //}
   //const answer = confirm(`Are you adult?`);
   //return answer;
   //console.log(answer);
   //return age >= 18 || confirm("Are you adult?"|| `Sory, you aer child`);
//}
//console.log(isAdult(20));

//function qwe() {
   //console.log("qwe");
//}
//console.log(qwe ());

//Task 7

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.


   //function getNumbers(min, max) {
      //let sum = 0;
    
      //for (let i = max; i >= min; i--) {
        //console.log(i);
        //if (i % 2 === 0) {
         // sum += i;
       // }
      //}
      //console.log(i);
    
      //return sum;
    //}
    
  
    //const result = getNumbers(3, 10);
   //console.log("Сума парних чисел:", result);
    
//Task 10

// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

function fizzBuzz(num) {
   //if (typeof num !== "number") {
      //console.log("no number")
      //return
   //}
   if (i % 5 === 0 && i % 3 === 0) {
      console.log(i,'fizzbuzz');
   }
      else if (i % 3 === 0) {
      console.log(i,'fizz');
   } else if (i % 5 === 0) {
      console.log(i,'buzz');
   }
   
}
   

console.log(fizzBuzz ("20"));