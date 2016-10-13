var OneButtonView = Backbone.View.extend({
    tagName: 'button',
    className: 'btn-color',

    events: {
        'click': 'sendColor'
    },

    render: function () {
        var color = this.model.get('color');

        this.$el.html(color.toUpperCase());
        this.$el.addClass(color);

        return this;
    },

    sendColor: function () {
        mediator.pub('color selected', this.model.get('color'));

        this.model.increaseCounter();
    }
});