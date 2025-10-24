// https://jsonplaceholder.typicode.com/todos
const list = document.querySelector(".todo-list");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    //   console.log(res);
    if (!res.ok) {
      throw new Error("OOps");
    }
    return res.json();
  })
  .then((data) => {
    console.log("then", data);
    list.insertAdjacentHTML("beforeend", createMarkup(data));
  })
  .catch((error) => {
    console.log("catch", error);
  });

function createMarkup(todos) {
  return todos
    .map(
      ({ id, title, completed }) => `
    <li data-id="${id}" class="list-item>
        <input type="checkbox"${completed && "checked"}/>
        <p>${title}</p>
    </li>
    `
    )
    .join("");
}
