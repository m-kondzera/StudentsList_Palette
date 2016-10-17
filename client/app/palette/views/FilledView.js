var FilledView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        mediator.on('color selected', this.fill, this);
    },

    render: function () {
        return this;
    },

    fill: function (color) {
        this.el.className = color;
    }
});