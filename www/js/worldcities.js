

var getWorldCities = function(callback){
    var GET = 'storage/world-cities_json.json';

    $.getJSON(GET, callback);
}