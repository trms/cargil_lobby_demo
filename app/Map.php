<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Map extends Model {

	protected $fillable = [

		'location',
		'image',
		'kiosk',
	];

	public function scopeKiosk($query, $kiosk)
	{
		if($kiosk)
		{
			return $query->where('kiosk','=',$kiosk);
		}

		return $query->where('kiosk','=','1');
	}

	public function scopeByLocation($query, $location)
	{
		if($location)
		{
			return $query->where('location','=',$location);
		}

		return $query;
	}

	public function scopeSearch($query, $q)
	{
		if($q)
		{
			$query->where('location','LIKE',"%$q%");
		}

		return $query;
	}

}
