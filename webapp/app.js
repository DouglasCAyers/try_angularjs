(function(){

	var app = angular.module( 'store', [ 'ui.bootstrap' ] );

	app.controller( 'StoreController', function() {

		// define a property of this controller
		this.products = gems;

	});

	// test data, normally make a REST call
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: '12 sided gem',
			canPurchase: true,
			soldOut: true
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '5 sided gem',
			canPurchase: false,
			soldOut: false
		}
	];

})();