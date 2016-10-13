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
        
        student.on('destroy', this.remove, this);
    },

    addInfo: function (student) {        
        this.el.innerHTML = addInfoTpl.replacer(addInfoTpl.infoTpl, student.toJSON());

        this.el.querySelector('.btn').addEventListener('click', this.editInfo.bind(this, student), false);
    },

    editInfo: function (student) {
        this.el.innerHTML = addInfoTpl.replacer(addInfoTpl.editTpl, student.toJSON());

        this.el.querySelector('.btn').addEventListener('click', this.saveInfo.bind(this, student), false);
    },

    saveInfo: function (student) {
        var lastName = document.getElementsByName('lastName')[0].value,
            name = document.getElementsByName('name')[0].value,
            gender = document.getElementsByName('gender')[0].value,
            skype = document.getElementsByName('skype')[0].value;

        student.set('lastName', lastName);
        student.set('name', name);
        student.set('gender', gender);
        student.set('skype', skype);

        this.addInfo(student);
    }
});