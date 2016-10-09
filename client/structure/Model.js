var Model = (function () {
    function Constructor () {
        var attributes = {};

        this.observer = new PubSub();

        this.get = function (key) {
            if (this.isAllowedKey(attributes, key)) {
                return attributes[key];
            }
        };

        this.set = function (key, value) {
            if (this.isAllowedValue(value)) {
                attributes[key] = value;
            } else {
                console.log('Input valid value');
            }
        };

        this.toJSON = function () {
            var obj = {};

            for (var key in attributes) {
                obj[key] = this.get(key);
            }

            return obj;
        };
    }

    Constructor.prototype.isAllowedValue = _isAllowedValue;
    Constructor.prototype.isAllowedKey = _isAllowedKey;
    Constructor.prototype.on = _on;
    Constructor.prototype.emit = _emit;

    function _isAllowedValue (value) {
        return (typeof value === 'string') ? true : false;
    }

    function _isAllowedKey (obj, key) {
        return obj[key] ? true : false;
    }

    function _on (event, fn) {
        this.observer.sub(event, fn);
    };

    function _emit (event, el) {
        this.observer.pub(event, el);
    };

    return Constructor;
})();