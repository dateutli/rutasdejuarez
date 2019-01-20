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
        // fetch('api/ruta?name='+routeName).then(function(response) {
        //     return response.json();
        // }).then(function(data) {
        //     console.log(data);
        // });


        fetch('api/route', {
            method: 'post',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({name: routeName, color: routeColor})
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            let coordinates = [];
            for(let i = 0; i < map.entities.getLength(); i++){
                coordinates[i] = [map.entities.get(i).getLocation().latitude, map.entities.get(i).getLocation().longitude];
            }

            // fetch('api/point', {
            //     method: 'post',
            //     headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
            //     body: JSON.stringify({name: $('#route-name').val(), color: $('#route-color').val(), rutaid: data.id, })
            // }).then(function(response) {
            //     return response.json();
            // }).then(function(data) {
            //     let coordinates = [];
            //     for(let i = 0; i < map.entities.getLength(); i++){
            //         coordinates[i] = [map.entities.get(i).getLocation().latitude, map.entities.get(i).getLocation().longitude];
            //     }
            // });

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