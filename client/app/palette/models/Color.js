function Color (_color) {
    var observer = new PubSub(),
        color = _color,
        counter = 0;

    this.on = function (event, fn) {
        observer.sub(event, fn);
    };

    this.getColor = function () {
        return color;
    };

    this.getCounter = function () {
        return counter;
    };

    this.increaseCounter = function () {
        counter++;
        observer.pub('statistics request');
    };

    this.toJSON = function () {
        return {
            color: color,
            counter: counter
        };
    };
}