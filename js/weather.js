const apikey = "b71f582b7331a40369751b619e36ca1a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }));
    console.log(position, lat, lng, url)
}
function onGeoError() {
    alert("Cant't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);