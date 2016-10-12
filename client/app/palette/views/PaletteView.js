function PaletteView (colorsCollection) {
    this.render = function () {
        var fragment = document.createDocumentFragment(),
            oneButton;

        colorsCollection.forEach(function (color) {
            oneButton = new OneButtonView({model: color});

            fragment.appendChild(oneButton.render().el);
        });

        return fragment;
    };
}