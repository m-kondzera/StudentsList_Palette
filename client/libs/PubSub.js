function PubSub () {
    var events = {};

    this.sub = function (eventName, fn) {
        events[eventName] = events[eventName] || [];
        events[eventName].push(fn);
    };

    this.pub = function (eventName, data) {
        events[eventName].forEach(function (fn) {
            fn(data);
        });
    };
}