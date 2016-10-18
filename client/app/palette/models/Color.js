'use strict';
var Color = Backbone.Model.extend({
    defaults: {
        color: '',
        counter: 0
    },

    increaseCounter: function () {
        var counter = this.get('counter');
        this.set('counter', ++counter);
    }
});