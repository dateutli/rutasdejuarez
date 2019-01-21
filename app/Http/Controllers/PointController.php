<?php

namespace App\Http\Controllers;

use App\Point;
use Illuminate\Http\Request;

class PointController extends Controller{

    public function create(Request $request){
        $point = Point::create($request->all());
        return response()->json($point, 201);
    }

    public function getPoints(Request $request){
        $routeId = $request->all()['id'];
        $points = Point::where('routeId', '=', $routeId)->get();
        return $points;
    }

    // Sample query to find nearest point to another
    // SELECT id, ( 3959 * acos(cos(radians(31.723224)) * cos(radians(lat)) * cos(radians(lng) - radians(-106.451782)) + sin(radians(31.723224)) * sin(radians(lat ))) ) AS distance FROM points HAVING distance < 1 ORDER BY distance LIMIT 0, 1 
    
}