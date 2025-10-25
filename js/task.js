// Потрібно створити функціонал для отримання прогнозу погоди в місті
// Використай публічне API https://www.weatherapi.com/docs/

// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди

// Створи форму, в яку користувач:
// 1. Вводить назву міста.
// 2. Обирає, на яку кількість днів він хоче отримати прогноз погоди (
// Іноді параметр не працює, у такому випадку можна зробити пошук на один день).
// Приклад форми https://prnt.sc/kFmL0j6gBdv-

// Після сабміту форми відмалюй картки з інформацією, отриманою з бекенду.
// Картка має містити відомості про:
// 1. Зображення з погодою (icon)
// 2. Текст з погодою (text)
// 3. Дату (date)
// 4. Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i

const BASE_URL = "https://api.weatherapi.com/v1";
//https://www.weatherapi.com/docs/ не рабочее
const API_KEY = "d1724c9b287f4d38b97120931252510";

const form = document.querySelector(".weather-form");
const list = document.querySelector(".js-list");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // чтобы не перезагружалась
  //   console.dir(event.currentTarget);

  const { city, days } = event.currentTarget.elements;
  console.log(city); /// посилання на интерактивный елемент
  console.log(city.value); // видим введенный текст

  serviceWeather(city.value, days.value)
    .then((data) => {
      console.log(data);
      list.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch((error) => {
      console.log(error);
      list.innerHTML = `<h3>${error.message}</h3>`;
    })
    .finally(() => {
      //очистка формы
      event.target.reset();
    });
}
function serviceWeather(city = "", days = 1) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days: days,
    lang: "en",
  });
  return fetch(`${BASE_URL}/forecast.json?${params}`).then((result) => {
    if (!result.ok) {
      throw new Error(result.statusText);
    }
    return result.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li class = "weather-card>
    <img src = "${icon}" alt="${text}" class = "weather-icon"/>
    <h2 class = "weather-date">${date}</h2>
    <h3 class= "weather-text">${text}</h3>
    <h3 class= "temperature">${avgtemp_c}</h3>
    </li>
  `
    )
    .join("");
}
