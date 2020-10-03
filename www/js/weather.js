var APIKEY = "43678b9f208401e795aa9d998e91749e";
var GETROOT = 'https://api.openweathermap.org/data/2.5/weather';

var getWeatherFromAPICall = function(query,callback){
    var GET = GETROOT + '?q='+ query + "&appid=" + APIKEY;

    $.getJSON(GET, callback);
}

var getWeather = function(callback){
    console.log('Getting Weather at ' + $('#location').val());
    getWeatherFromAPICall($('#location').val(),callback);
}