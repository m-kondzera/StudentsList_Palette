'use strict';
var StudentsListView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.addOne, this);
    },

    render: function () {
        return this;
    },

    addOne: function (student) {
        var view = new OneStudentView({model: student});
        this.$el.append(view.render().el);
    }
});