var AddInfoView = Backbone.View.extend({
    tagName: 'div',

    initialize: function () {
        mediator.sub('student clicked', this.showDetails.bind(this));
    },

    render: function () {
        return this;
    },

    showDetails: function (student) {
        this.addInfo(student);

        student.on('destroy', this.removed, this);
    },

    addInfo: function (student) {        
        this.el.innerHTML = addInfoTpl.replacer(addInfoTpl.infoTpl, student.toJSON());

        this.$el.find('.btn').click($.proxy(this.editInfo, this, student));
        //this.el.querySelector('.btn').addEventListener('click', this.editInfo.bind(this, student), false);
    },

    editInfo: function (student) {
        this.el.innerHTML = addInfoTpl.replacer(addInfoTpl.editTpl, student.toJSON());

        this.$el.find('.btn').click($.proxy(this.saveInfo, this, student));
        //this.el.querySelector('.btn').addEventListener('click', this.saveInfo.bind(this, student), false);
    },

    saveInfo: function (student) {
        var lastName = $('input[name="lastName"]').val(),
            name = $('input[name="name"]').val(),
            gender = $('input[name="gender"]').val(),
            skype = $('input[name="skype"]').val();

        student.set('lastName', lastName);
        student.set('name', name);
        student.set('gender', gender);
        student.set('skype', skype);

        this.addInfo(student);
    },

    removed: function () {
        while(this.el.firstChild) {
            this.el.removeChild(this.el.lastChild);
        }
    }
});