oneStudentTpl = {};

oneStudentTpl.oneStudent = ':lastName :name<a class="delBtn"></a>';

oneStudentTpl.replacer = function (str, obj) {
    for (var key in obj) {
        str = str.replace(':' + key, obj[key]);
    }

    return str;
}