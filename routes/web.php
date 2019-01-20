<?php

$router->get('/', function () use ($router) {
    return view('index');
});

$router->get('/routes', function () use ($router) {
    return view('routes');
});

$router->get('/editor', function () use ($router) {
    return view('editor');
});


$router->group(['prefix' => 'api'], function () use ($router) {
    // Routes
    $router->post('route', ['uses' => 'RouteController@create']);
    $router->get('getRoute', ['uses' => 'RouteController@get']);
    // Points
    $router->post('point', ['uses' => 'PointController@create']);
});