var Router = Backbone.Router.extend({
    routes: {
        '': 'main',
        'colors/:color': 'initColor',
        'students/:name': 'initStudent',
        '*errorPage': 'errorMessage'
    },

    initialize: function () {
        mediator.sub('color selected', this.writeColor);
        mediator.sub('student clicked', this.writeStudent);
    },

    main: function () {
        this.paletteController = new PaletteController();
        this.studentsListController = new StudentsListController();
    },

    initColor: function (color) {
        this.main();
        mediator.pub('color inited', color);
    },

    initStudent: function (name) {
        this.main();
        this.studentsListController.laterStart(function () {
            mediator.pub(name + ' inited');
        });
    },

    writeColor: function (color) {
        this.router.navigate('colors/' + color);
    },

    writeStudent: function (student) {
        this.router.navigate('students/' + student.get('name'));
    },

    errorMessage: function (msg) {
        $(document.body).html('The page <strong>' + msg + '</strong> is not exist.');
    }
});