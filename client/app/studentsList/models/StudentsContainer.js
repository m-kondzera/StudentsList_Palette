'use strict';
var StudentsContainer = Backbone.Collection.extend({
    model: Student,
    url: '/getStudents',

    initialize: function () {
        this.fetch();
    }
});