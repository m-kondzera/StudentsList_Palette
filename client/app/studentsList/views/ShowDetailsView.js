'use strict';
var ShowDetailsView = Backbone.View.extend({
    tagName: 'div',

    events: {
        'click .btn-edit': 'editInfo',
        'click .btn-save': 'saveInfo'
    },

    initialize: function () {
        mediator.sub('student clicked', this.showDetails.bind(this));
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

        mediator.pub('student edited', this.student.get('name'));
    },

    saveInfo: function () {
        var studentInfo = {
            lastName: this.$('[name="lastName"]').val(),
            name: this.$('[name="name"]').val(),
            gender: this.$('[name="gender"]').val(),
            skype: this.$('[name="skype"]').val()
        };

        this.student.set(studentInfo, {validate: true});

        this.addInfo();
    },

    clear: function () {
        this.$el.empty();
    }
});