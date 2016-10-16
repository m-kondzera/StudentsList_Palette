var PaletteView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('sync', this.addAll, this);
    },

    render: function () {
        return this;
    },

    addButton: function (color) {
        oneButton = new OneButtonView({model: color});

        this.$el.append(oneButton.render().el);
    },

    addAll: function () {
        this.collection.forEach(this.addButton, this);
    }
});