<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;


use Request;

use App\Map;
use App\Listing;

class MapController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$location = Request::input('location');

		$q = Request::input('query');

		$maps = Map::search($q)->byLocation($location)->orderBy('location')->get();

		return ['maps'=>$maps];
	}


	public function images($id=null)
	{
		$time = time();

		$image = \Image::make( Request::file('file') )
				->encode('png')
				->save("img/maps/$time.png");

		return "img/maps/$time.png";		
	}
	

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$map = Map::create( Request::input('map') );

		return ['map'=>$map];
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return ['maps'=>Map::find($id)];
	}

	

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$map = Map::find($id);

		$location = Request::input('map.location');
		$image = Request::input('map.image');

		$map->image = $image;

		if($map->location !== $location)
		{
			$this->updateRelatedListings($map->location, $location);
			$map->location = $location;
		}

		$map->save();

		return ['map'=>$map];	
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$map = Map::find($id);

		if(file_exists($map->image))
		{
			unlink($map->image);
		}

		$map->delete();

		return ['map'=>$map];
	}

	public function updateRelatedListings($oldLocation,$newLocation)
	{
		$locations = Listing::where('location','=',$oldLocation)
					->update(['location'=>$newLocation]);
		return $locations;
	}

}
