var Student = (function (Parent) {
    extend(Constructor, Parent);

    function Constructor () {
        Parent.apply(this, arguments);
    }

    return Constructor;
})(Model);
