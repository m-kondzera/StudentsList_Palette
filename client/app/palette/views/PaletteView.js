var PaletteView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.addButtons, this);
    },

    render: function () {
        this.collection.forEach(this.addButtons, this);

        return this;
    },

    addButtons: function (color) {
        oneButton = new OneButtonView({model: color});
        this.$el.append(oneButton.render().el);
    }
});