function PaletteController () {
	var paletteList = document.getElementsByClassName('colors')[0],
		filled = document.getElementsByClassName('colored')[0],
		statistics = document.getElementsByClassName('statistics')[0],
        colorsCollection = new ColorsCollection(),
		filledView = new FilledView();
		
    colorsCollection.on('inited', createList);
    colorsCollection.init();

    filled.appendChild(filledView.render());

    function createList () {
        paletteView = new PaletteView(colorsCollection);
        statisticsView = new StatisticsView(colorsCollection);

        paletteList.appendChild(paletteView.render());
        statistics.appendChild(statisticsView.render());
    }
}