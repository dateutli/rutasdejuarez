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
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/routes">Bus Routes</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Editor
                            <span class="sr-only">(current)</span>
                        </a>
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
                        Editor Tools
                    </div>
                    <div class="card-body">
                        
                        <!-- Route Name & Color -->
                        <div class="form-row">
                            <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                                Route Name
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                                Color
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-lg-10 col-md-10 col-sm-10 col-10">
                                <input type="text" class="form-control" placeholder="Oriente Poniente" id="route-name" />
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-2">
                                <input type="color" class="form-control" id="route-color">
                            </div>
                        </div>

                        <!-- Destino Input -->
                        <div class="form-row mt-1">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                <button class="btn btn-warning btn-block" id="editor-undo">
                                    <i class="fa fa-undo" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                <button class="btn btn-danger btn-block" id="editor-clear">
                                    <i class="fa fa-remove" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-4">
                                <button class="btn btn-success btn-block" onClick="addRoute();">
                                    <i class="fa fa-check" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-8 col-md-8 col-sm-12">

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
    <script type='text/javascript' src="js/editor.js"></script>
    <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?key=AgShPFrla4jXncqYsgzWXbnCFjs2ETVAxIEmuH9iWa6E4W4-vYMCUsGUgI8NlJ66&callback=loadMapScenario'
        async defer></script>

</body>

</html>