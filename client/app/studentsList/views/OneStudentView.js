var OneStudentView = Backbone.View.extend({
    tagName: 'li',

    events: {
        'click': 'showDetails',
        'click .delBtn': 'delete'
    },

    initialize: function () {
        this.model.on('change', this.render, this);
        this.model.on('destroy', this.remove, this);
    },

    render: function () {
        var attributes = this.model.toJSON();

        this.$el.html(tpl.replacer(tpl.oneStudent, attributes));
        
        return this;
    },

    showDetails: function () {
        mediator.trigger('student clicked', this.model);
    },

    delete: function (e) {
        e.stopPropagation();

        this.model.destroy();
    },

    remove: function () {
        this.$el.remove();
    }
});