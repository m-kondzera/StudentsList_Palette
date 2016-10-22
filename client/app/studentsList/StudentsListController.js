'use strict';
function StudentsListController () {
    var studentsContainer = new StudentsContainer(),
        studentsListView = new StudentsListView({collection: studentsContainer}),
        addInfoView = new ShowDetailsView(),
        callback;

    studentsContainer.on('sync', start);

    $('.studentsList').append(studentsListView.render().el);
    $('.info').append(addInfoView.render().el);

    this.laterStart = function (_callback) {
        callback = _callback;
    }

    function start () {
        if (callback) {
            callback();
        }
    }
}
