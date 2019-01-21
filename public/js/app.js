var map;
var placeMarkerStatus = 0;
var markerColors = ['black', 'red', 'green'];
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        disableBirdseye: true,
        navigationBarMode: Microsoft.Maps.NavigationBarMode.minified,
        mapType: Microsoft.Maps.MapTypeId.grayscale,
        showMapTypeSelector: false,
        showScalebar: false,
        showTrafficButton: false,
    });

    Microsoft.Maps.Events.addHandler(map, 'click', function (event) {
        if(placeMarkerStatus > 0){
            if(map.entities.getLength() > 0){
                console.log('hello');
                removePreviousPin(placeMarkerStatus);
            }
            let location = new Microsoft.Maps.Location(event.location.latitude, event.location.longitude);
            let pin = new Microsoft.Maps.Pushpin(location, {color: markerColors[placeMarkerStatus] });
            pin.id = placeMarkerStatus;
            map.entities.push(pin);
        }
    });
}

var removePreviousPin = (id) => {
    let index = -1;
    for(let i = 0; i < map.entities.getLength(); i++){
        if(map.entities.get(i).id == id) index = i;
    }
    map.entities.removeAt(index);
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
let t;

$('#go').click(function () {
    // Turn off click events for marker placement
    placeMarkerStatus = 0;
    if ($('#from').val() == "" || $('#to').val() == "") {
        alert('Direccion de origen y destio son necesarias!');
    }

    if ($('#from').val() == $('#to').val()) {
        alert('Direccion de origen y destio no pueden ser igual!');
    }
    fetch('https://dev.virtualearth.net/REST/v1/Locations?CountryRegion=MX&adminDistrict=CHIH&locality=Juarez&postalCode=32000&addressLine=' + $('#from').val() + '&key=AgShPFrla4jXncqYsgzWXbnCFjs2ETVAxIEmuH9iWa6E4W4-vYMCUsGUgI8NlJ66')
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        $('#from').val(response.resourceSets[0].resources[0].name);
        fromCoordis = response.resourceSets[0].resources[0].point.coordinates;
    });

    fetch('https://dev.virtualearth.net/REST/v1/Locations?CountryRegion=MX&adminDistrict=CHIH&locality=Juarez&postalCode=32000&addressLine=' + $('#to').val() + '&key=AgShPFrla4jXncqYsgzWXbnCFjs2ETVAxIEmuH9iWa6E4W4-vYMCUsGUgI8NlJ66')
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        $('#to').val(response.resourceSets[0].resources[0].name);
        toCoordis = response.resourceSets[0].resources[0].point.coordinates;
    });

});