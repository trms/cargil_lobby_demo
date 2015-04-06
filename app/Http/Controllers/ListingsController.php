<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Request;

use App\Listing;
use App\Map;




class ListingsController extends Controller {

	public $listingFields = [
			'firstName',
			'lastName',
			'company',
			'title',
			'location',
			'address',
			'email',
			'phone',
			'description',
			'image',
		];

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		
		$kiosk = Request::input('kiosk');

		$q = Request::input('query');

		$listings = Listing::search($q)
			->forKiosk($kiosk)
			->orderBy('lastName')
			->orderBy('company')
			->get([
				'listings.id',
				'firstName',
				'lastName',
				'company',
				'title',
				'listings.location',
				'address',
				'email',
				'phone',
				'description',
				'listings.image',
				'maps.image as map'
			]);


		return ['listings'=>$listings];
	}

	public function locations()
	{

		$q = Request::input('query');
		
		$locations = Map::search($q)->groupBy('location')->get(['id','location']);

		foreach ($locations as $location) {
			$images = Map::where('location','=',$location->location)->lists('image');
			$location->images = $images;
		}
		return ['locations'=>$locations];
	}

	public function images($id=null)
	{
		$time = time();

		$image = \Image::make( Request::file('file') )
				->resize(200,null,function($constrain)
				{
					$constrain->aspectRatio();
				})
				->encode('png')
				->save("img/listings/$time.png");

		return "img/listings/$time.png";		
	}

	

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{

		$listing = new Listing();

		foreach ($this->listingFields as $field) {

			$listing[$field] = Request::input("listing.$field");
		}

		$listing->save();

		return ['listing'=>$listing];
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return ['listings'=>Listing::find($id)];
	}

	

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{

		$listing = Listing::find($id);

		foreach ($this->listingFields as $field) {
			$listing[$field] = Request::input("listing.$field");
		}

		$listing->save();

		return ['listings'=>$listing];
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$listing = Listing::find($id);

		if(file_exists($listing->image))
		{
			unlink($listing->image);
		}

		$listing->delete();

		return '';
	}

	public function getMap()
	{
		$kiosk = Request::input('kiosk');
		$input = Request::input('listing');
		return Map::kiosk($kiosk)->where('location','=', $input['location'])->first();
	}

}
