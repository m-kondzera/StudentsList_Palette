var OneButtonView = Backbone.View.extend({
    tagName: 'button',
    className: 'btn-color',

    events: {
        'click': 'sendColor'
    },

    render: function () {
        var color = this.model.get('color');

        this.el.innerHTML = color.toUpperCase();
        this.el.classList.add(color);

        return this;
    },

    sendColor: function () {
        mediator.pub('color selected', this.model.get('color'));

        this.model.increaseCounter();
    }
});