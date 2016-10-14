var StudentsListView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('sync', this.render, this);
    },

    render: function () {
        this.collection.forEach(this.addStudent, this);

        return this;
    },

    addStudent: function (student) {
        oneStudent = new OneStudentView({model: student});

        this.$el.append(oneStudent.render().el);
    }
});