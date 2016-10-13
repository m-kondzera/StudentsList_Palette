var StatisticsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.collection.on('add', this.addStatistics, this);
    },

    render: function () {
        this.$el.html('<h2>Statistics:</h2>');

        this.collection.forEach(this.addStatistics, this);

        return this;
    },

    addStatistics: function (color) {
        oneStatistic = new OneStatisticsView({model: color});

        this.$el.append(oneStatistic.render().el);
    }
});