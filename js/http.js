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

const list = document.querySelector(".todo-list");

function createMarkup(todos) {
  return todos
    .map(
      ({ id, title, completed }) => `
    <li data-id="${id}" class="list-item">
        <input type="checkbox"${completed && "checked"}/>
        <p>${title}</p>
    </li>
    `
    )
    .join("");
}

function foo(endpoint) {
  return fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then(
    (result) => {
      if (!result.ok) {
        throw new Error(result.status);
      }
      return result.json();
    }
  );
}
foo(`todos`)
  .then((data) => {
    list.insertAdjacentHTML("beforeend", createMarkup(data));
  })
  .catch((error) => {
    console.log(error);
  });
foo(`users`)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
