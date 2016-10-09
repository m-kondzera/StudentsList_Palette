function ColorsCollection () {
    var container = [],
        observer = new PubSub(),
        initColors = function (response) {
            var color;

            response.forEach(function (obj) {
                color = new Color();

                for (var key in obj) {
                    color.set(key, obj[key]);
                }

                container.push(color);
            });
            
            observer.pub('inited');
        };

    this.on = function (event, fn) {
        observer.sub(event, fn);
    };

    this.init = function () {
        request.load('colors', initColors);
    };

    this.forEach = function (iterator) {
        container.forEach(iterator);
    };

}