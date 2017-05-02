var https = require('https');

var GoogleAPIService = {};

GoogleAPIService.KEY = "AIzaSyDPjelg9UF4f5EFGKF5IiAP3SZE39xwOIM";
GoogleAPIService.HOST = "https://maps.googleapis.com/maps/api/geocode/json?";

GoogleAPIService.getAddressCoordinates = function (address, city, postCode) {
    var result = {};
    var query = GoogleAPIService.HOST + "address=" + address.trim().replace(/ /g, "+") + ",+" + postCode.trim() + "+" + city.trim().replace(/ /g, "+");
    query += "&key=" + GoogleAPIService.KEY;

    console.log(query);

    return new Promise(function (resolve, reject) {
        return https.get(query, function (res) {
            /*result.coordX = res.results[0].geometry.location.lat;
             result.coordY = res.results[0].geometry.location.lng;*/
            var response = "";
            res.on('data', function (data) {
                response += data;
            });

            res.on('end', function () {
                var finalResponse = JSON.parse(response);
                resolve({coordX: finalResponse.results[0].geometry.location.lat, coordY: finalResponse.results[0].geometry.location.lng});
                reject(response);
            });
        });
    });

};

module.exports = GoogleAPIService;


