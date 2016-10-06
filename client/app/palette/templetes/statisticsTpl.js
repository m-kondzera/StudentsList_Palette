var statTpl = {};

statTpl.addStat = `:color: :counter`;

statTpl.replacer = function (statistics, obj) {
    for (var key in obj) {
        statistics = statistics.replace(':' + key, obj[key]);
    }

    return statistics;
};