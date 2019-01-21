var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        disableBirdseye: true,
        navigationBarMode: Microsoft.Maps.NavigationBarMode.minified,
        mapType: Microsoft.Maps.MapTypeId.grayscale,
        showMapTypeSelector: false,
        showScalebar: false,
        showTrafficButton: false,
    });

    // map.setView({ labelOverlay: Microsoft.Maps.LabelOverlay.hidden});
}

var getPoints = () => {
    routeId = $('#routes-select').val();
    fetch('api/getPoints?id=' + routeId, {method: 'get'}).then(function(response) {
        return response.json();
    }).then(function(points) {
        let polylinePoints = [];
        for(point of points){
            polylinePoints.push(new Microsoft.Maps.Location(point.lat, point.lng));
        }
        let polyline = new Microsoft.Maps.Polyline(polylinePoints, { strokeColor: points[0].color, strokeThickness: 3 });
        map.entities.push(polyline);
    });
};

var clearRoutes = () => {
    map.entities.clear();
};

$(document).ready(function(){
    fetch('api/getAll', {method: 'get'}).then(function(response) {
        return response.json();
    }).then(function(data) {
        for(route of data){
            $('#routes-select').append(new Option(route.name, route.id));
        }
    });
});