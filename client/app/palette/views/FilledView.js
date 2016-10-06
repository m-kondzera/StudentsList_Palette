function FilledView () {
    var el = document.createElement('div');

    mediator.sub('color selected', fill);

    this.render = function () {
        return el
    };

    function fill (color) {
        el.className = color;
    }
}