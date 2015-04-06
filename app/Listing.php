<?php namespace App;

use Illuminate\Database\Eloquent\Model;


class Listing extends Model {

	protected $fillable = [
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

	public function map()
	{
		return $this->belongsTo('App\Map','map');
	}

	public function scopeForKiosk($query, $kiosk=null)
	{

		if(!$kiosk) $kiosk = 1;

		return $query->join('maps',function($join) use($kiosk) 
		{
			$join->on('listings.location','=','maps.location')
				->where('maps.kiosk','=',$kiosk);		
		});
	}

	public function scopeSearch($query, $q)
	{
		
		if($q)
		{
			return $query->where('firstName','LIKE',"$q%")
				->orWhere('lastName','LIKE',"$q%")
				->orWhere('company','LIKE',"%$q%")
				->orWhere('title','LIKE',"%$q%");
		}

		return $query;
	}

}
