var APIKEY = "43678b9f208401e795aa9d998e91749e";
var GETROOT = 'https://api.openweathermap.org/data/2.5/weather';


$(document).ready(function(){

    var getWeatherFromAPICall = function(query){
        var GET = GETROOT + '?q='+ query + "&appid=" + APIKEY;

        $.getJSON(GET, function(json) {
            console.log(json);
        });
    }

    var getWeather = function(){
        console.log('Getting Weather at ' + $('#location').val());
        getWeatherFromAPICall($('#location').val());
        

    }
 
    $('#search').click(getWeather);
    $('#location').keyup(function(event){
        if(event.keyCode == 13){
            getWeather();
        }
    });
 
 });