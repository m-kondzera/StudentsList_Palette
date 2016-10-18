'use strict';
var PaletteView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.addOne, this);
    },

    render: function () {
        return this;
    },

    addOne: function (color) {
        var view = new OneButtonView({model: color});
        this.$el.append(view.render().el);
    }
});