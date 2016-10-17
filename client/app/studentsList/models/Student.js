var Student = Backbone.Model.extend({
    validate: function(attrs, options) {
        if (!attrs.name || !attrs.lastName || !attrs.gender) {
            return 'name, lastName and gender are required';
        }
    }
});