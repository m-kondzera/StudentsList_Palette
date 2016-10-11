var Container = (function () {
    function Constructor () {
        var collection = [],
            observer = new PubSub();

        this.on = function (event, fn) {
            observer.sub(event, fn);
        };

        this.emit = function (event) {
            observer.pub(event);
        };

        this.getCollection = function () {
            return collection;
        };

        this.forEach = function (iterator) {
            collection.forEach(iterator);
        };
    }

    return Constructor;
})();