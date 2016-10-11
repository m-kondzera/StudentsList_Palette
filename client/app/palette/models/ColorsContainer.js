var ColorsContainer = (function (Parent) {
    extend(Constructor, Parent);

    function Constructor () {
        Parent.call(this);

        var colors = this.getCollection(),
            initColors = (function (response) {
                var color;

                response.forEach(function (obj) {
                    color = new Color();

                    for (var key in obj) {
                        color.set(key, obj[key]);
                    }

                    colors.push(color);
                });
                
                this.emit('inited');
            }).bind(this);

        this.init = function () {
            request.load('colors', initColors);
        };
    }

    return Constructor;
})(Container);