function PaletteController () {
    var colorsContainer = new ColorsContainer(),
        paletteView = new PaletteView({collection: colorsContainer}),
        filledView = new FilledView(),
        statisticsView = new StatisticsView({collection: colorsContainer});

    $('.colors').append(paletteView.render().el);
    $('.colored').append(filledView.render().el);
    $('.statistics').append(statisticsView.render().el);
}