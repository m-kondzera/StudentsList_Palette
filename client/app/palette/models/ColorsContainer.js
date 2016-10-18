'use strict';
var ColorsContainer = Backbone.Collection.extend({
    model: Color,
    url: '/getColors',

    initialize: function () {
        this.fetch();
    }
});