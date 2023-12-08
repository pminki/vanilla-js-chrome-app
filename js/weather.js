
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = config.apiKey;

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innterText = data.name;
      weather.innerText = `${data.name} : ${data.weather[0].main} / ${data.main.temp}`;
    })
    .catch(() => {
      console.log("Error :(");
    });
}

function onGeoError() {
  console.log("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);