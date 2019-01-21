<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePointsTable extends Migration{

    public function up(){
        Schema::create('points', function (Blueprint $table) {
            $table->increments('id');
            $table->string('routeId');
            $table->string('routeName');
            $table->float('lat', 10, 6);
            $table->float('lng', 10, 6);
            $table->string('color');
        });
    }

    public function down(){
        Schema::dropIfExists('points');
    }
    
}
