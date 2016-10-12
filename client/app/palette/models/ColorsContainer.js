var ColorsContainer = Backbone.Collection.extend({
    model: Color,

    initialize: function () {
        request.load('colors', this.initColors.bind(this));
    },

    initColors: function (response) {
        this.add(response);
    }
});