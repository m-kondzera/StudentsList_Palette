var Color = (function (Parent) {
    extend(Constructor, Parent);

    function Constructor () {
        Parent.apply(this);

        this.increaseCounter = function () {
            var counter = this.get('counter');

            counter++;
            this.set('counter', counter.toString());

            this.observer.pub('statistics request');
        };
    }

    return Constructor;
})(Model);