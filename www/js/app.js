var renderResult = function(){

    var htmlTemplate =  "<ul>" +
                            "<h2><<City>></h2>" +
                            "<h3><<Cloudness>></h3>" +
                            "<li><strong>Temperature</strong> : <<Temp>> F</li>" +
                            "<li><strong>Wind</strong> : <<Wind>> mph</li>" +
                            "<li><strong>Humidity</strong> : <<Humidity>></li>" +
                        "</ul>" +
                        "<div id = 'map'></div>";

    getWeather(function(json) {
        console.log(json);

        var temp_f = Math.round((json.main.temp - 273.15)*(9/5)+35);

        var htmlasResult = htmlTemplate;

        htmlasResult = htmlasResult.replace("<<City>>",json.name)
        htmlasResult = htmlasResult.replace("<<Temp>>",temp_f)
        htmlasResult = htmlasResult.replace("<<Cloudness>>",json.weather[0].description)
        htmlasResult = htmlasResult.replace("<<Wind>>",json.wind.speed)
        htmlasResult = htmlasResult.replace("<<Humidity>>",json.main.humidity)
        
        $('#result').html(htmlasResult);

        initMap(json.coord.lat,json.coord.lon);

    });
}

var searchWithGPS = function(){
    navigator.geolocation.getCurrentPosition(
    function(position) {
        $('#location').val(position.coords.latitude + ',' + position.coords.longitude);
        renderResult();
    },
    function() {
        alert('Error getting location');
    });
}

$(document).ready(function(){
    getWorldCities(function(json) {
        console.log(json);

        var options = [];

        json.forEach(e => {
            options.push(e.name + "," +e.subcountry);
        });


        $( "#location" ).autocomplete({
            source: options
         });
    });
    
    $('#gps').click(searchWithGPS);
    $('#search').click(renderResult);
    $('#location').keyup(function(event){
        if(event.keyCode == 13){
            renderResult();
        }
    });
 
 });