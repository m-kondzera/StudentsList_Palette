var StudentsListView = Backbone.View.extend({
    initialize: function () {
        this.collection.on('sync', this.addAll, this);
    },

    render: function () {
        this.addAll();
        
        return this;
    },

    addStudent: function (student) {
        oneStudent = new OneStudentView({model: student});

        this.$el.append(oneStudent.render().el);
    },

    addAll: function () {
        this.collection.forEach(this.addStudent, this);
    }
});