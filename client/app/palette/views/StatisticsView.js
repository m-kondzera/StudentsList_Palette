function StatisticsView (colorsCollection) {
    var el = document.createElement('div');

    this.render = function () {
        var fragment = document.createDocumentFragment(),
            oneStatistic;

        el.innerHTML = '<h2>Statistics:</h2>';

        colorsCollection.forEach(function (color) {
            oneStatistic = new OneStatisticsView({model: color});

            fragment.appendChild(oneStatistic.render().el);
        });
        
        el.appendChild(fragment);

        return el;
    };
}