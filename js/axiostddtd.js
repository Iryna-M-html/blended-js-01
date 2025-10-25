import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";
const list = document.querySelector(".todo-list");

// fetch(url)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Ooops");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

function createMarkup(arr) {
  return arr
    .map(
      ({ title, completed }) => `
  <li class = "list-item">
    <input type="checkbox" ${completed && "checked"}/>
    <p>${title}</p>
  </li>`
    )
    .join("");
}

// get запит з допомогою axios

// axios("https://jsonplaceholder.typicode.com/todos").then((res) => {
//   console.log(res);
// });
