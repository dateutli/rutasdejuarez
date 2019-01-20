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
            $table->string('lat');
            $table->string('lng');
            $table->string('color');
        });
    }

    public function down(){
        Schema::dropIfExists('points');
    }
    
}
