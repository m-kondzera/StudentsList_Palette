var OneStudentView = Backbone.View.extend({
    tagName: 'li',

    events: {
        'click': 'showDetails',
        'click .delBtn': 'deleteStudent'
    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        var attributes = this.model.toJSON();
        this.el.innerHTML = oneStudentTpl.replacer(oneStudentTpl.oneStudent, attributes);
        
        return this;
    },

    showDetails: function () {
        mediator.pub('student clicked', this.model);
    },

    deleteStudent: function (e) {
        e.stopPropagation();

        this.remove();
        this.model.destroy();

        mediator.pub('student clicked', 'delete');
    }
});