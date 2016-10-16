var tpl = {};

tpl.replacer = function (str, obj) {
    for (var key in obj) {
        str = str.replace(':' + key, obj[key]);
    }

    return str;
}