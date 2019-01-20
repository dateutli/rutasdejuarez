<?php

namespace App\Http\Controllers;

use App\Point;
use Illuminate\Http\Request;

class PointController extends Controller{

    public function create(Request $request){
        $point = Point::create($request->all());
        return response()->json($point, 201);
    }

}