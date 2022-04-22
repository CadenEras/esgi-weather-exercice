const config = './config.json';
let locationURL = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${config.apiKey}&q=${searchedLocation}`;
let locationRequest = new XMLHttpRequest();
locationRequest.open('GET', locationRequest);
locationRequest.responseType = 'json';
locationRequest.send()