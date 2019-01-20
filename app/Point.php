<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Point extends Model
{
    public $timestamps = false;
    protected $fillable = ['routeId', 'routeName', 'lat', 'lng', 'color'];
    protected $hidden = [];
}