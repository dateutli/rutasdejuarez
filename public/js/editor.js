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

    Microsoft.Maps.Events.addHandler(map, 'click', function (event) {
        let location = new Microsoft.Maps.Location(event.location.latitude, event.location.longitude);
        let pin = new Microsoft.Maps.Pushpin(location, { color: $('#route-color').val() });
        map.entities.push(pin);
    });
}


var addRoute = () => {
    let routeName = $('#route-name').val();
    let routeColor = $('#route-color').val();
    if(routeName == ""){
        alert('Please enter a route name');
    }else if(map.entities.getLength() == 0){
        alert('Please trace a route before creating a route');
    }else{
        // Check if route name exists
        fetch('api/getRoute?name='+routeName).then(function(response) {
            return response.json();
        }).then(function(routes) {
            if(routes.length > 0){
                alert('Name ' + routeName + ' is already in use. Please try another name.');
            }else{
                fetch('api/route', {
                    method: 'post',
                    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                    body: JSON.stringify({name: routeName, color: routeColor})
                }).then(function(response) {
                    return response.json();
                }).then(function(data) {
                    for(let i = 0; i < map.entities.getLength(); i++){
                        fetch('api/point', {
                            method: 'post',
                            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                            body: JSON.stringify({ routeId: data.id, routeName: routeName, lat: map.entities.get(i).getLocation().latitude, lng: map.entities.get(i).getLocation().longitude, color: routeColor })
                        }).then(function(response) {
                            return response.json();
                        }).then(function(status) {
                            
                        });
                    }
                    alert('Route ' + routeName + ' was successfully created!');
                    $('#route-name').val('');
                    $('#route-color').val('');
                });
            }
        });
    }   
};

$('#route-color').click(function(){
    map.entities.clear();
});

$('#editor-clear').click(function(){
    map.entities.clear();
});

$('#editor-undo').click(function(){
    map.entities.pop();
});