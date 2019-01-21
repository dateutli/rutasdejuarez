<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Rutas de Juarez</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
            <a class="navbar-brand" href="#">Rutas de Juarez</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home
                            <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/routes">Bus Routes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/editor">Editor</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Page Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">

                <div class="card mt-2">
                    <div class="card-header bg-info text-white">
                        Directions
                    </div>
                    <div class="card-body">
                        <!-- Origen Input -->
                        <div class="form-row">
                            <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                                <input type="text" class="form-control" placeholder="From" id="from" />
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-3 col-3">
                                <button class="btn btn-danger btn-block" onClick="placeMarker('from')">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Destino Input -->
                        <div class="form-row mt-1">
                            <div class="col-lg-10 col-md-9 col-sm-9 col-9">
                                <input type="text" class="form-control" placeholder="To" id="to" />
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-3 col-3">
                                <button class="btn btn-success btn-block" onClick="placeMarker('to')">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>

                        <button class="btn btn-warning btn-block mt-1" onClick='placeMarker()' id="cancelarPlaceMarker"
                            style="display:none;">
                            Cancel
                        </button>

                        <button class="btn btn-primary btn-block mt-1" id="go">
                            Find Route
                        </button>

                    </div>
                </div>

            </div>

            <div class="col-lg-8 col-md-8">
                <div class="card mt-2">
                    <div class="card-header bg-info text-white">
                        Map
                    </div>
                    <div id='map' style='height: 500px;'></div>
                </div>
            </div>

        </div>
    </div>

    <!-- Bootstrap core JavaScript -->
    <script src="js/jquery/jquery.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script type='text/javascript' src="js/app.js"></script>
    <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?key=AgShPFrla4jXncqYsgzWXbnCFjs2ETVAxIEmuH9iWa6E4W4-vYMCUsGUgI8NlJ66&callback=loadMapScenario'
        async defer></script>

</body>

</html>