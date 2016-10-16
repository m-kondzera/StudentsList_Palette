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
        var attributes = this.model.toJSON();
        this.$el.html(tpl.replacer(tpl.oneStudent, attributes));
        
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