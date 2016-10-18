'use strict';
var OneStatisticsView = Backbone.View.extend({
    tagName: 'p',

    initialize: function () {
        this.listenTo(this.model, 'change:counter', this.render);
    },

    render: function () {
        this.$el.html(tpl.replacer(tpl.oneStatistic, this.model.toJSON()));

        return this;
    }
});