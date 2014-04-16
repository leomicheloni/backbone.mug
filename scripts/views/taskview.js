var Taskview = (function(){
	return Backbone.View.extend({
		initialize: function(){
			this.model.on("change:done", function(){
				this.render();
			}, this);
		},
		template: _.template($("#tmptask").html()),
		render: function(){
			
			this.$el.html(
				this.template(this.model.toJSON())
			);
			
			$("#container").html(this.el);
		},
		events:{
			"click :checkbox": function(){
				this.model.set("done", this.$el.find(":checked").length==1);
			}
		}
	
	});

})();