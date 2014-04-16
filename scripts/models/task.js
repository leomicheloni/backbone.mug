var Task = (function(){
	return Backbone.Model.extend({
				defaults:{
					done: false
				},
				validate: function(attr){
					if(attr.name.length == 0 ) return "el nombre es requerido";
				}
			});

})();