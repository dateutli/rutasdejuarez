var map;
var placeMarkerStatus = 0;
var markerColors = ['black', 'red', 'green'];
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        disableBirdseye: true,
        // maxBounds: Map.fromCorners(Location(31.798879766270964, -106.58233577086378 ), Location(31.493748720472922, -106.31591731383253))
    });

    Microsoft.Maps.Events.addHandler(map, 'click', function (event) {
        if(placeMarkerStatus > 0){
            let location = new Microsoft.Maps.Location(event.location.latitude, event.location.longitude);
            let pin = new Microsoft.Maps.Pushpin(location, {color: markerColors[placeMarkerStatus] });
            map.entities.push(pin);
        }
    });
}

var setAddress = (id) => {
    // alert(id);
};

var placeMarker = (id) => {
    if(id == 'from'){
        placeMarkerStatus = 1;
        $('#cancelarPlaceMarker').show();
    }else if(id == 'to'){
        placeMarkerStatus = 2;
        $('#cancelarPlaceMarker').show();
    }else{
        placeMarkerStatus = 0;
        $('#cancelarPlaceMarker').hide();
        map.entities.clear();
    }
};

let fromCoordis = [];
let toCoordis = [];

$('#go').click(function () {
    // Turn off click events for marker placement
    placeMarkerStatus = 0;
    if ($('#from').val() == "" || $('#to').val() == "") {
        alert('Direccion de origen y destio son necesarias!');
    }

    if ($('#from').val() == $('#to').val()) {
        alert('Direccion de origen y destio no pueden ser igual!');
    }

    fetch('http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=MX&adminDistrict=CHIH&locality=Juarez&postalCode=32000&addressLine=' + $('#from').val() + '&key=AgShPFrla4jXncqYsgzWXbnCFjs2ETVAxIEmuH9iWa6E4W4-vYMCUsGUgI8NlJ66')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            fromCoordis = response.resourceSets[0].resources[0].point.coordinates;
        });


    fetch('http://dev.virtualearth.net/REST/v1/Locations?CountryRegion=MX&adminDistrict=CHIH&locality=Juarez&postalCode=32000&addressLine=' + $('#to').val() + '&key=AgShPFrla4jXncqYsgzWXbnCFjs2ETVAxIEmuH9iWa6E4W4-vYMCUsGUgI8NlJ66')
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            toCoordis = response.resourceSets[0].resources[0].point.coordinates;
        });


});