var request = (function () {
    var routes = {
        'students': '/getStudents',
        'colors': '/getColors'
    };

    function _load (name, callback) {
        var ajax = _getAjax();

        ajax.open('GET', _uri(name), true);

        ajax.addEventListener('readystatechange',
            function () {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    callback(JSON.parse(ajax.responseText));
                }
            }, false);

        ajax.send();
    }

    function _uri(name) {
        return routes[name];
    }

    function _getAjax () {
        var ajax;

        if (XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject();
        }

        return ajax;
    }

    return {
        load: _load
    };
})();
    