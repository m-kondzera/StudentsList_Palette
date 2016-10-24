'use strict';
function PaletteController () {
    var statistics = $('.statistics'),
        colored = $('.colored'),
        colors = $('.colors');

    this.load = function () {
        var colorsContainer = new ColorsContainer(),
            paletteView = new PaletteView({collection: colorsContainer}),
            filledView = new FilledView(),
            statisticsView = new StatisticsView({collection: colorsContainer});

        colors.append(paletteView.render().el);
        colored.append(filledView.render().el);
        statistics.append(statisticsView.render().el);
    };

    this.clear = function () {
        colors.empty();
        colored.empty();
        statistics.empty();
    };
}