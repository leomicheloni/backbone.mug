var Router = (function(){
	return Backbone.Router.extend({
		routes:{
			"": "main",
			"vista1/:p": "vista1"
		}
	
	});

})();