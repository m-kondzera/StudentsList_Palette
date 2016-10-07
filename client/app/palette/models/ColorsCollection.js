function ColorsCollection () {
    var colors = initColors();

    this.forEach = function (iterator) {
        colors.forEach(iterator);
    };

    function initColors () {
        var red = new Color(),
            green = new Color(),
            blue = new Color();

        red.set('color', 'red');
        green.set('color', 'green');
        blue.set('color', 'blue');

        return [red, green, blue];
    } 
}