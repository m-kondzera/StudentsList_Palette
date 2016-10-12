var OneStatisticsView = Backbone.View.extend({
    tagName: 'p',

    initialize: function () {
        this.model.on('change:counter', this.render, this);
    },

    render: function () {
        this.el.innerHTML = statTpl.replacer(statTpl.addStat, this.model.toJSON());

        return this;
    }
});