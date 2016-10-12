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
        this.el.remove();
        this.model.destroy();

        mediator.pub('student clicked', 'delete');
    }
});

/*function OneStudentView (student) {
    var el = document.createElement('li');

    student.on('change', fillElement);

    this.render = function () {
        fillElement();

        return el;
    };

    function fillElement () {
        el.innerHTML = oneStudentTpl.replacer(oneStudentTpl.oneStudent, student.toJSON());

        el.addEventListener('click', showDetails, false);
        el.querySelector('.delBtn').addEventListener('click', deleteStudent, false);
    }

    function showDetails () {
        mediator.pub('student clicked', student);
    }

    function deleteStudent (e) {
        e.stopPropagation();

        el.remove();
        student.destroy();

        mediator.pub('student clicked', 'delete');
    }
}*/