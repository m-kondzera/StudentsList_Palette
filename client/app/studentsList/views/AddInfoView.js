var AddInfoView = Backbone.View.extend({
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
        this.addInfo();

        this.student.on('destroy', this.clear, this);
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

        this.student.set({'lastName': lastName, 'name': name});
        this.student.set({'gender': gender, 'skype': skype});

        this.addInfo();
    },

    clear: function () {
        if(this.el.firstChild) {
            this.$el.empty();
        }
    }
});