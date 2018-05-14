let location = document.getElementById("location");
let weather = document.getElementById("weather");
let units = document.getElementById("units");
let settings = {};
let endpoint_url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139" 

let currentLocation = navigator.geolocation.getCurrentPosition();

fetch(endpoint_url, {method: "GET", mode: "cors", }).then(res => res.json()).then(function(data){
    console.log(data);
});

