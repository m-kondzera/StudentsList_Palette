'use strict';
var Student = Backbone.Model.extend({
    defaults: {
        lastName: '',
        name: '',
        gender: '',
        skype: ''
    },

    validate: function(attrs, options) {
        if (!attrs.name || !attrs.lastName || !attrs.gender) {
            return 'name, lastName and gender are required';
        }
    }
});