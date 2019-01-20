<?php

$router->get('/', function () use ($router) {
    return view('index');
});

$router->get('/editor', function () use ($router) {
    return view('editor');
});


$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post('route', ['uses' => 'RouteController@create']);
});