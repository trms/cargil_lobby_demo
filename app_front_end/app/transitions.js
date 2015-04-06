import { animate, stop } from "liquid-fire";

export default function(){

	this.transition(
		this.toRoute('home.directory.listing'),
		this.use('toDown',{duration:200}),
		this.reverse('toUp')
	);

	this.transition(
		this.toModel('listing'),
		this.use('flexGrow'),
		this.reverse('flexGrow')
	);

		
	this.transition(

		this.hasClass('liquidListings'),
		this.includingInitialRender(),
		this.use('explode',
		{	
			matchBy:'data-liquid-id',
			use:['toDown', {duration:300}],
		},
		{
			use:['toUp',{duration:300}]
		})
	);

};