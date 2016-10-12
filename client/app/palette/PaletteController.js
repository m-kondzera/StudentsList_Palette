function PaletteController () {
	var paletteList = document.getElementsByClassName('colors')[0],
		filled = document.getElementsByClassName('colored')[0],
		statistics = document.getElementsByClassName('statistics')[0],
        colorsContainer = new ColorsContainer(),
        paletteView = new PaletteView({collection: colorsContainer}),
		filledView = new FilledView(),
        statisticsView = new StatisticsView({collection: colorsContainer});

    paletteList.appendChild(paletteView.render().el);
    filled.appendChild(filledView.render().el);
    statistics.appendChild(statisticsView.render().el);
}