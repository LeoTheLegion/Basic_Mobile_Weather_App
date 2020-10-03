var renderResult = function(){

    var htmlTemplate= "<ul><li>City : <<City>></li><li>Temp : <<Temp>></li><li>Cloudness : <<Cloudness>></li></ul>";

    getWeather(function(json) {
        console.log(json);


        var htmlasResult = htmlTemplate;

        htmlasResult = htmlasResult.replace("<<City>>",json.name)
        htmlasResult = htmlasResult.replace("<<Temp>>",json.main.temp)
        htmlasResult = htmlasResult.replace("<<Cloudness>>",json.weather[0].description)
        
        $('#result').html(htmlasResult);
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
    
     
    $('#search').click(renderResult);
    $('#location').keyup(function(event){
        if(event.keyCode == 13){
            renderResult();
        }
    });
 
 });