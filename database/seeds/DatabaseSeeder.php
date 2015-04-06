<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;
use App\Listing;
use App\Map;
use App\Slide;

class DatabaseSeeder extends Seeder {

	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		Model::unguard();

		$this->call('UserTableSeeder');
		$this->call('ListingsTableSeeder');
		$this->call('MapsTableSeeder');
		$this->call('SlidesTableSeeder');
	}

}

class UserTableSeeder extends Seeder{

	public function run()
	{
		DB::table('users')->delete();

		User::create(['name'=>'Seth Phillips', 'email'=>'seth.phillips@trms.com','password'=>Hash::make('trms')]);
		User::create(['name'=>'admin', 'email'=>'admin','password'=>Hash::make('trms')]);
	}
}

class ListingsTableSeeder extends Seeder{

	public function run()
	{
		DB::table('listings')->delete();

		Listing::create(['firstName'=>'Woody','lastName'=>'Wiedenhoeft','company'=>'WASBO','title'=>'Executive Director','location'=>'Office 119','image'=>'http://www.fillmurray.com/200/350']);
        Listing::create(['firstName'=>'Tina','lastName'=>'Hafeman','company'=>'WASBO','title'=>'Associate Executive Director','location'=>'Office 117','image'=>'http://www.fillmurray.com/220/350']);
        Listing::create(['firstName'=>'Áine','lastName'=>'Calgaro','company'=>'WASBO','title'=>'Communications & Membership Coordinator','location'=>'Office 115','image'=>'http://www.fillmurray.com/215/350']);
        Listing::create(['firstName'=>'Jeanne','lastName'=>'Deimund','company'=>'WASBO','title'=>'Member Services & Professional Development Coordinator','location'=>'Office 118','image'=>'']);
        Listing::create(['company'=>'AWSA','location'=>'Suite 103','image'=>'http://lorempixel.com/200/300/cats']);
        Listing::create(['company'=>'WASBO','location'=>'Suite 101','image'=>'http://lorempixel.com/200/300/cats']);
        Listing::create(['company'=>'WASC','location'=>'Suite 202','image'=>'http://lorempixel.com/200/300/cats']);
        Listing::create(['company'=>'WCASS','location'=>'Suite 202','image'=>'http://lorempixel.com/200/300/cats']);
        Listing::create(['company'=>'WASDA','location'=>'Suite 201','image'=>'http://lorempixel.com/200/300/cats']);
	}
}

class MapsTableSeeder extends Seeder{

	public function run()
	{
		DB::table('maps')->delete();

		Map::create(["location"=>"Office 119",'image'=>'http://www.fillmurray.com/101/101','kiosk'=>1]);
	    Map::create(["location"=>"Office 118",'image'=>'http://www.fillmurray.com/102/102','kiosk'=>1]);
	    Map::create(["location"=>"Office 117",'image'=>'http://www.fillmurray.com/103/103','kiosk'=>1]);
	    Map::create(["location"=>"Office 116",'image'=>'http://www.fillmurray.com/104/104','kiosk'=>1]);
	    Map::create(["location"=>"Office 115",'image'=>'http://www.fillmurray.com/105/105','kiosk'=>1]);
	    Map::create(["location"=>"Office 119",'image'=>'http://www.fillmurray.com/201/201','kiosk'=>2]);
	    Map::create(["location"=>"Office 118",'image'=>'http://www.fillmurray.com/202/202','kiosk'=>2]);
	    Map::create(["location"=>"Office 117",'image'=>'http://www.fillmurray.com/203/203','kiosk'=>2]);
	    Map::create(["location"=>"Office 116",'image'=>'http://www.fillmurray.com/204/204','kiosk'=>2]);
	    Map::create(["location"=>"Office 115",'image'=>'http://www.fillmurray.com/205/205','kiosk'=>2]);

	    Map::create(["location"=>"Suite 103",'image'=>'http://lorempixel.com/205/205','kiosk'=>1]);
	    Map::create(["location"=>"Suite 101",'image'=>'http://lorempixel.com/205/205','kiosk'=>1]);
	    Map::create(["location"=>"Suite 202",'image'=>'http://lorempixel.com/205/205','kiosk'=>1]);
	    Map::create(["location"=>"Suite 201",'image'=>'http://lorempixel.com/205/205','kiosk'=>1]);
	    Map::create(["location"=>"Suite 103",'image'=>'http://lorempixel.com/205/205','kiosk'=>2]);
	    Map::create(["location"=>"Suite 101",'image'=>'http://lorempixel.com/205/205','kiosk'=>2]);
	    Map::create(["location"=>"Suite 202",'image'=>'http://lorempixel.com/205/205','kiosk'=>2]);
	    Map::create(["location"=>"Suite 201",'image'=>'http://lorempixel.com/205/205','kiosk'=>2]);
	}
}

class SlidesTableSeeder extends Seeder{

	public function run()
	{
		DB::table('slides')->delete();

		Slide::create(['image'=>'http://www.fillmurray.com/1280/720','title'=>'My Awesome Slide 1']);
		Slide::create(['image'=>'http://www.fillmurray.com/1281/721','title'=>'My Awesome Slide 2']);
		Slide::create(['image'=>'http://www.fillmurray.com/1282/722','title'=>'My Awesome Slide 3']);
		Slide::create(['image'=>'http://www.fillmurray.com/1283/723','title'=>'My Awesome Slide 4']);

	}
}
