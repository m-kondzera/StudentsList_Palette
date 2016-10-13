var StudentsListView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('add', this.addStudents, this);
    },

    render: function () {
        this.collection.forEach(this.addStudents, this);

        return this;
    },

    addStudents: function (student) {
        oneStudent = new OneStudentView({model: student});

        this.$el.append(oneStudent.render().el);
    }
});