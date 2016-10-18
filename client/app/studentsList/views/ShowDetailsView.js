'use strict';
var ShowDetailsView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        mediator.sub('student clicked', this.showDetails.bind(this));
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
        this.listenToOnce(this.student, 'destroy', this.clear);

        this.addInfo();
    },

    addInfo: function () {        
        this.$el.html(tpl.replacer(tpl.info, this.student.toJSON()));
    },

    editInfo: function () {
        this.$el.html(tpl.replacer(tpl.edit, this.student.toJSON()));
    },

    saveInfo: function () {
        var lastName = this.$el.find('[name="lastName"]').val(),
            name = this.$el.find('[name="name"]').val(),
            gender = this.$el.find('[name="gender"]').val(),
            skype = this.$el.find('[name="skype"]').val();

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