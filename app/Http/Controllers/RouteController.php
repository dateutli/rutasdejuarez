<?php

namespace App\Http\Controllers;

use App\Route;
use Illuminate\Http\Request;

class RouteController extends Controller{

    public function create(Request $request){
        $route = Route::create($request->all());
        return response()->json($route, 201);
    }
}