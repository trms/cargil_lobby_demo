<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Request;

use App\Slide;

class SlidesController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$slides = Slide::orderBy( \DB::raw('RAND()') )->get();

		return ['slides'=>$slides];
	}

	public function images()
	{
		$time = time();

		$image = \Image::make( Request::file('file') )
				->fit(1920,1080)
				->encode('jpg')
				->save("img/slides/$time.jpg");

		return "img/slides/$time.jpg";		
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$slide = Slide::create( Request::input('slide') );

		return ['slide'=>$slide];
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$slide = Slide::find($id);

		return ['slide'=>$slide];
	}

	

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$slide = Slide::find($id);

		$slide->update( Request::input('slide') );

		$slide->save();

		return ['slide'=>$slide];	
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$slide = Slide::find($id);

		$slide->delete();

		return ['slide'=>$slide];
	}

}
