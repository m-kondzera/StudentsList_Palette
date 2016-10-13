var OneStudentView = Backbone.View.extend({
    tagName: 'li',

    events: {
        'click': 'showDetails',
        'click .delBtn': 'remove'
    },

    initialize: function () {
        this.model.on('change', this.render, this);
    },

    render: function () {
        this.$el.html(oneStudentTpl.replacer(oneStudentTpl.oneStudent, this.model.toJSON()));
        
        return this;
    },

    showDetails: function () {
        mediator.pub('student clicked', this.model);
    },

    remove: function (e) {
        e.stopPropagation();

        this.$el.remove();
        this.model.destroy();
    }
});