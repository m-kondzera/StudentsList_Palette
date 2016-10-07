var Color = (function () {
    function Color () {
        var observer = new PubSub(),
            attributes = {
                counter: 0
            };

        this.on = function (event, fn) {
            observer.sub(event, fn);
        };

        this.set = function (key, value) {
            if (this.isAllowedValue(value)) {
                attributes[key] = value;
            } else {
                console.log('Input valid value');
            }
        };

        this.get = function (key) {
            return attributes[key];
        };

        this.increaseCounter = function () {
            attributes['counter']++;
            observer.pub('statistics request');
        };

        this.toJSON = function () {
            return {
                color: this.get('color'),
                counter: this.get('counter')
            };
        };
    }

    Color.prototype.isAllowedValue = _isAllowedValue;

    function _isAllowedValue (value) {
        return (typeof value === 'string') ? true : false;
    }

    return Color; 
})();




    