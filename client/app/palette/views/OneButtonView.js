'use strict';
var OneButtonView = Backbone.View.extend({
    tagName: 'span',

    events: {
        'click': 'sendColor'
    },

    render: function () {
        this.$el.html(tpl.replacer(tpl.oneButton, this.model.toJSON()));

        return this;
    },

    sendColor: function () {
        mediator.pub('color selected', this.model.get('color'));
        this.model.increaseCounter();
    }
});
