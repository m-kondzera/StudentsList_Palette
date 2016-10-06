function ColorsCollection () {
    var colors = [
            new Color('red'),
            new Color('green'),
            new Color('blue')
        ];

    this.forEach = function (iterator) {
		colors.forEach(iterator);
	};
}