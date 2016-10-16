var StatisticsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        this.collection.on('sync', this.addAll, this);
    },

    render: function () {
        this.$el.html('<h2>Statistics:</h2>');

        return this;
    },

    addStatistics: function (color) {
        oneStatistic = new OneStatisticsView({model: color});

        this.$el.append(oneStatistic.render().el);
    },

    addAll: function () {
        this.collection.forEach(this.addStatistics, this);
    }
});