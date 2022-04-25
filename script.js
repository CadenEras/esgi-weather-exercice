const config = './config.json';
let locationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${config.apiKey}&`;
let locationRequest = new XMLHttpRequest();
locationRequest.open('GET', locationRequest);
locationRequest.responseType = 'json';
locationRequest.send()