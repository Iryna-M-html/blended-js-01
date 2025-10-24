// https://jsonplaceholder.typicode.com/todos

//количество на странице
// отображение конскретной стрвницы
// обработка запроса (промиса)

// const list = document.querySelector(".todo-list");
// const params = new URLSearchParams({
//   _limit: 5,
//   _page: 1,
// });

// fetch(`https://jsonplaceholder.typicode.com/todos?${params}`)
//   .then((res) => {
//     //   console.log(res);
//     if (!res.ok) {
//       throw new Error("OOps");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("then", data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

// fetch(`https://jsonplaceholder.typicode.com/users`)
//   .then((res) => {
//     //   console.log(res);
//     if (!res.ok) {
//       throw new Error("OOps");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log("users", data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });

// function createMarkup(todos) {
//   return todos
//     .map(
//       ({ id, title, completed }) => `
//     <li data-id="${id}" class="list-item">
//         <input type="checkbox"${completed && "checked"}/>
//         <p>${title}</p>
//     </li>
//     `
//     )
//     .join("");
// }

//////

// function createMarkup(todos) {
//   return todos
//     .map(
//       ({ id, title, completed }) => `
//     <li data-id="${id}" class="list-item">
//         <input type="checkbox"${completed && "checked"}/>
//         <p>${title}</p>
//     </li>
//     `
//     )
//     .join("");
// }

// function foo(url) {
//   return fetch(url).then((result) => {
//     if (!result.ok) {
//       throw new Error(result.status);
//     }
//     return result.json();
//   });
// }

// foo(`https://jsonplaceholder.typicode.com/todos`)
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// foo(`https://jsonplaceholder.typicode.com/users`)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//work endpoint

// const list = document.querySelector(".todo-list");

// function createMarkup(todos) {
//   return todos
//     .map(
//       ({ id, title, completed }) => `
//     <li data-id="${id}" class="list-item">
//         <input type="checkbox"${completed && "checked"}/>
//         <p>${title}</p>
//     </li>
//     `
//     )
//     .join("");
// }

// function foo(endpoint) {
//   return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then(
//     (result) => {
//       if (!result.ok) {
//         throw new Error(result.status);
//       }
//       return result.json();
//     }
//   );
// }
// foo(`todos`)
//   .then((data) => {
//     list.insertAdjacentHTML("beforeend", createMarkup(data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// foo(`users`)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

////1 час продолжение
///авторизация запросов ключами

const API_KEY = "43173775-fc7269b10cca3a5d436001063";
// https://pixabay.com/api/docs/
const list = document.querySelector(".list");

const params = new URLSearchParams({
  key: API_KEY,
  q: "red rose",
});

fetch(`https://pixabay.com/api?${params}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
  })
  .catch((error) => {
    console.log(error.message);
  });

function createMarkup(arr) {
  return arr
    .map(
      ({ previewURL, tags }) => `
    <li>
    <img src = "${previewURL}" alt = "${tags}" width ="300"/>
    </li>`
    )
    .join("");
}
