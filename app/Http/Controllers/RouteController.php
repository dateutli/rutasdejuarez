<?php

namespace App\Http\Controllers;

use App\Route;
use Illuminate\Http\Request;

class RouteController extends Controller{

    public function create(Request $request){
        $route = Route::create($request->all());
        return response()->json($route, 201);
    }

    public function get(Request $request){
        $name = $request->all()['name'];
        $route = Route::where('name', '=', $name)->get();
        return $route;
    }
}