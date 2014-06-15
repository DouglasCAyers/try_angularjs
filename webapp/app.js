(function(){

	var app = angular.module( 'store', [ 'ui.boostrap' ] );

	app.controller( 'StoreController', function() {

		// define a property of this controller
		this.product = gem;

	});

	// test data, normally make a REST call
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: '12 sided gem'
	};

})();