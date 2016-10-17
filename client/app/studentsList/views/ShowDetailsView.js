var ShowDetailsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        mediator.on('student clicked', this.showDetails, this);
    },

    events: {
        'click .btn-edit': 'editInfo',
        'click .btn-save': 'saveInfo'
    },

    render: function () {
        return this;
    },

    showDetails: function (student) {
        this.student = student;
        this.addInfo();

        this.listenTo(this.student, 'destroy', this.clear);
    },

    addInfo: function () {        
        this.$el.html(tpl.replacer(tpl.infoTpl, this.student.toJSON()));
    },

    editInfo: function () {
        this.$el.html(tpl.replacer(tpl.editTpl, this.student.toJSON()));
    },

    saveInfo: function () {
        var lastName = $('input[name="lastName"]').val(),
            name = $('input[name="name"]').val(),
            gender = $('input[name="gender"]').val(),
            skype = $('input[name="skype"]').val();

        this.student.set({
                'lastName': lastName, 
                'name': name,
                'gender': gender,
                'skype': skype
            }, {validate: true});

        this.addInfo();
    },

    clear: function () {
        this.$el.empty();
    }
});