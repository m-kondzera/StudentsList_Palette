'use strict';
var StatisticsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.collection.on('add', this.addOne, this);
    },

    render: function () {
        this.$el.html('<h2>Statistics:</h2>');

        return this;
    },

    addOne: function (color) {
        var view = new OneStatisticsView({model: color});
        this.$el.append(view.render().el);
    }
});