/* global MY_GLOBAL */

import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$(document).ready(function() {
			Ember.$('.magellan-expedition').foundation({
				active_class: 'active', // specify the class used for active sections
				threshold: 0, // how many pixels until the magellan bar sticks, 0 = auto
				destination_threshold: 20, // pixels from the top of destination for it to be considered active
				throttle_delay: 50, // calculation throttling to increase framerate
				fixed_top: 0 // top distance in pixels assigned to the fixed element on scroll
			});
		});
	}
});