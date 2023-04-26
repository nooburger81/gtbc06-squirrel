let result = document.getElementById("result");
let searchBtn = document.getElementById("button-addon2");
let cityRef = document.getElementById("name");
let apikey = "a603e73feb52a3364fbee4dd2f14e6cc";

let getWeather = () => {
    let cityValue = cityRef.value;

    if (cityValue.length == 0) {
        result.innerHTML = `<h3>Please Enter A City Name</h3>`;
    }
else{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}`;

    cityRef.value = "";
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.humidity);
        console.log(data.wind.speed);
       result.innerHTML = `<h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].description}</h4>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;F</h1>
        <div class="temp-container">
        <h4 class="title">Humidity</h4>
        <h4 class="temp">${data.main.humidity}%</h4>
              <h4 class="title">Wind Speed</h4>
              <h4 class="temp">${data.wind.speed} MPH</h4>
        </div>
        `;
       })
       .catch(() => {
        result.innerHTML = `<h3>City not Found</h3>`;
    });
}
};

searchBtn.addEventListener("click", getWeather);


window.addEventListener("load", getWeather);