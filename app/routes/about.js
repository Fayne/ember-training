export default Ember.Route.extend({
	setupController: function(controller){
		controller.set('contents', 'This is aboutus page.');
	}
});