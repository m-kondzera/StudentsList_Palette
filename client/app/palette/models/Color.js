var Color = Backbone.Model.extend({
    increaseCounter: function () {
        var counter = this.get('counter');

        counter++;
        this.set('counter', counter);
    }
});