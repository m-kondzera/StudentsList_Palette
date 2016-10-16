var OneStatisticsView = Backbone.View.extend({
    tagName: 'p',

    initialize: function () {
        this.model.on('change:counter', this.render, this);
    },

    render: function () {
        this.$el.html(tpl.replacer(tpl.oneStat, this.model.toJSON()));

        return this;
    }
});