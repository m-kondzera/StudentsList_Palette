var Student = (function () {
    function Student () {
        var observer = new PubSub(),
            attributes = {};

        this.on = function (event, fn) {
            observer.sub(event, fn);
        };

        this.emit = function (event, el) {
            observer.pub(event, el);
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

        this.toJSON = function () {
            return {
                lastName: this.get('lastName'),
                name: this.get('name'),
                gender: this.get('gender'),
                skype: this.get('skype')
            };
        };
    }

    Student.prototype.isAllowedValue = _isAllowedValue;

    function _isAllowedValue (value) {
        return (typeof value === 'string') ? true : false;
    }

    return Student;
})();
