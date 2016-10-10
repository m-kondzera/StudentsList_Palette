function PaletteController () {
	var paletteList = document.getElementsByClassName('colors')[0],
		filled = document.getElementsByClassName('colored')[0],
		statistics = document.getElementsByClassName('statistics')[0],
        colorsContainer = new ColorsContainer(),
		filledView = new FilledView();
		
    colorsContainer.on('inited', createList);
    colorsContainer.init();

    filled.appendChild(filledView.render());

    function createList () {
        paletteView = new PaletteView(colorsContainer);
        statisticsView = new StatisticsView(colorsContainer);

        paletteList.appendChild(paletteView.render());
        statistics.appendChild(statisticsView.render());
    }
}