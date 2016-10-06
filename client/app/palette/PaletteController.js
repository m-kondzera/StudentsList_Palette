function PaletteController () {
	var paletteList = document.getElementsByClassName('colors')[0],
		filled = document.getElementsByClassName('colored')[0],
		statistics = document.getElementsByClassName('statistics')[0],
        colorsCollection = new ColorsCollection(),
        paletteView = new PaletteView(colorsCollection),
		filledView = new FilledView(),
		statisticsView = new StatisticsView(colorsCollection);
		
	paletteList.appendChild(paletteView.render());
    filled.appendChild(filledView.render());
    statistics.appendChild(statisticsView.render());
}