var Model = (function () {
    function Constructor () {
        var attributes = {},
            observer = new PubSub();

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

        this.on = function (event, fn) {
            observer.sub(event, fn);
        };

        this.emit = function (event, el) {
            observer.pub(event, el);
        }
    }

    Constructor.prototype.isAllowedValue = _isAllowedValue;
    Constructor.prototype.isAllowedKey = _isAllowedKey;

    function _isAllowedValue (value) {
        return (typeof value === 'string') ? true : false;
    }

    function _isAllowedKey (obj, key) {
        return obj[key] ? true : false;
    }

    return Constructor;
})();