let city = "";
const apiKey = "313aa589424c4eabb56132518240105";
async function getForecast(city) {
  console.log(city);
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?q=${city}%20&key=${apiKey}`,
      { method: "GET" }
    );
    let data = await res.json();
    console.log(data);
    Contentinfo(data);
  } catch (e) {}
}
let searchInput = document.getElementById("city");
let searchButton = document.getElementById("search");

function searchCity() {
  let searchVal = searchInput.value;
  getForecast(searchVal);
}
function Contentinfo(el) {
  const tempetarura = document.getElementById("tempetarura");
  const time = document.getElementById("time");
  const Country = document.getElementById("Country");
  const Name_City = document.getElementById("Name_City");
  let res = el.location;
  let city = el.location;
  time.textContent = res.localtime;
  Country.textContent = res.country;
  Name_City.textContent = city.name;
  console.log(res);
  let g = el.current.temp_c + "°";
  tempetarura.textContent = g;
  console.log(g);
}

searchButton.onclick = searchCity;

// Изображения
var images = [
  "image/bg-weather.png",
  "image/weather=mist.png",
  "image/weather=rain.png",
  "image/weather=snow.png",
  "image/weather=thunderstrom.png",
  "image/weather_night.png",
]; // Замените на ваши изображения и пути к ним

// Индекс текущего изображения
var currentIndex = 0;

// Функция для смены изображения
function changeImage() {
  // Установка нового изображения в качестве фона body
  document.body.style.backgroundImage = 'url("' + images[currentIndex] + '")';

  // Увеличение индекса для следующего изображения
  currentIndex++;

  // Если достигнут конец списка изображений, перейдите к началу
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// Вызов функции changeImage каждые 10 секунд
setInterval(changeImage, 10000);
