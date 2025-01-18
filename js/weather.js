function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(position, lat, lng)
}
function onGeoError() {
    alert("Cant't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);