<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class BackupController extends Controller {

	
	public function index()
	{
		set_time_limit(0);

		\Artisan::call('backup:clean');
		
		\Artisan::call('backup:run');


		$files = scandir(public_path().'/backup',SCANDIR_SORT_DESCENDING);

		$newest_file = $files[0];

		return ['backup'=>"/backup/$newest_file"];
		
	}

	

}
