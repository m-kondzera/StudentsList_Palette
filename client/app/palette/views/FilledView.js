var FilledView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        mediator.sub('color selected', this.fill.bind(this));
    },

    render: function () {
        return this;
    },

    fill: function (color) {
        this.el.className = color;
    }
});