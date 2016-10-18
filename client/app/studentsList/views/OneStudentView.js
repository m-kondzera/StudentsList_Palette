'use strict';
var OneStudentView = Backbone.View.extend({
    tagName: 'li',

    events: {
        'click': 'showDetails',
        'click .delBtn': 'delete'
    },

    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function () {
        this.$el.html(tpl.replacer(tpl.oneStudent, this.model.toJSON()));

        return this;
    },

    showDetails: function () {
        mediator.pub('student clicked', this.model);
    },

    delete: function (e) {
        e.stopPropagation();
        this.model.destroy();
    }
});