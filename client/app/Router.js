'use strict';
var Router = Backbone.Router.extend({
    routes: {
        '': 'index',
        'colors/:color': 'initColor',
        'students/:name': 'initStudent',
        '*errorPage': 'errorMessage'
    },

    initialize: function () {
        mediator.sub('color selected', this.writeColor.bind(this));
        mediator.sub('student clicked', this.writeStudent.bind(this));
        mediator.sub('student edited', this.editStudent.bind(this));
    },

    main: function () {
        this.palette = new PaletteController();
        this.students = new StudentsListController();

        this.palette.clear();
        this.students.clear();

        this.palette.load();
        this.students.load();
    },

    index: function () {
        this.main();
    },

    initColor: function (color) {
        this.main();
        mediator.pub('color inited', color);
    },

    initStudent: function (name) {
        this.main();
        this.students.laterStart(function () {
            mediator.pub(name + ' inited');
        });
    },

    writeColor: function (color) {
        this.navigate('colors/' + color);
    },

    writeStudent: function (student) {
        this.navigate('students/' + student.get('name'));
    },

    editStudent: function (student) {
        this.navigate('students/' + student + '/edit');
    },

    errorMessage: function (msg) {
        this.main();
        alert('The page ' + msg + ' is not exist.');
        this.navigate('');
    }
});