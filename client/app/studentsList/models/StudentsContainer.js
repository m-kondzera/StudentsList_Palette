var StudentsContainer = Backbone.Collection.extend({
    model: Student,

    initialize: function () {
        request.load('students', this.initStudents.bind(this));
    },

    initStudents: function (response) {
        this.add(response);
    }
});