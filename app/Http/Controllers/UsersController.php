<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Response;
use Request;

use App\User;
use Illuminate\Contracts\Auth\Guard;
use App\Http\Requests\Auth\LoginRequest;

class UsersController extends Controller {


	protected $auth;

	public function __construct(Guard $guard)
	{
		$this->auth = $guard;
	}
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$users = User::all();

		return ['users'=>$users];
	}


	public function auth()
	{

		$email = Request::input('email');
		$password = Request::input('password');
		
		if($this->auth->attempt(array('email'=>$email,'password'=>$password)))
		{
			return ['user'=>$this->auth->user()];
		}

		return new Response('Your credentials did not match',300);
	}
	

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$user = new User;

		$user->name = Request::input('user.name');
		
		$user->email = Request::input('user.email');

		$user->password = bcrypt(Request::input('user.password'));

		$user->save();

		return ['user'=>$user];
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$user = User::find($id);

		return ['user'=>$user];
	}

	

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$user = User::find($id);

		$user->name = Request::input('user.name');
		$user->email = Request::input('user.email');

		if(Request::input('user.password'))
		{
			$user->password = bcrypt(Request::input('user.password'));
		}

		$user->save();

		return ['user'=>$user];
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$user = User::find($id);

		$user->delete();

		return ['user'=>$user];
	}

}
