'use strict';
var tpl = {};

tpl.replacer = function (str, obj) {
    for (var key in obj) {
        str = str.replace(new RegExp(':' + key,'g'), obj[key]);
    }

    return str;
};
