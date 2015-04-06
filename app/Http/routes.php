<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', 'WelcomeController@index');

// Route::get('home', 'HomeController@index');

Route::group(['prefix'=>'api'],function(){
	Route::resource('listings','ListingsController');
	Route::resource('users', 'UsersController');
	Route::resource('maps','MapController');
	Route::resource('slides','SlidesController');
	Route::get('locations','ListingsController@locations');

	Route::post('images/listing/{id?}','ListingsController@images');
	Route::post('images/map/{id?}','MapController@images');
	Route::post('images/slide','SlidesController@images');
	
	Route::post('auth', 'UsersController@auth');

	Route::get('backup','BackupController@index');
});

Route::controllers([
	'auth' => 'Auth\AuthController',
	'password' => 'Auth\PasswordController',
	]);


Route::get('{ember?}', function()
{
	$headers=array('Cache-Control'=>'no-cache, no-store, max-age=0, must-revalidate','Pragma'=>'no-cache','Expires'=>'Fri, 01 Jan 1990 00:00:00 GMT');
    return View::make('ember', $headers);

})->where('ember', '.+');