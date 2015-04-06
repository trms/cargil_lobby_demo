<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('listings', function(Blueprint $table)
		{
			$table->increments('id');

			$table->string('firstName')->nullable();
			$table->string('lastName')->nullable();
			$table->string('company')->nullable();
			$table->string('title')->nullable();
			$table->string('location')->nullable();
			$table->string('address')->nullable();
			$table->string('email')->nullable();
			$table->string('phone')->nullable();
			$table->string('description')->nullable();
			$table->string('image')->nullable();


			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('listings');
	}

}
