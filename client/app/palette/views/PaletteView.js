var PaletteView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('sync', this.render, this);
    },

    render: function () {
        this.collection.forEach(this.addButton, this);

        return this;
    },

    addButton: function (color) {
        oneButton = new OneButtonView({model: color});

        this.$el.append(oneButton.render().el);
    }
});