'use strict';
function StudentsListController () {
    var studentsList = $('.studentsList'),
        info = $('.info'),
        callback;

    this.load = function () {
        var studentsContainer = new StudentsContainer(),
            studentsListView = new StudentsListView({collection: studentsContainer}),
            addInfoView = new ShowDetailsView(),
            promise = new Promise((resolve, reject) => {
                studentsContainer.on('sync', resolve);
            });

        promise.then(this.showStudentInfo);

        $('.studentsList').append(studentsListView.render().el);
        $('.info').append(addInfoView.render().el);
    };

    this.clear = function () {
        $('.studentsList').empty();
        $('.info').empty();
    };
    

    this.laterStart = function (_callback) {
        callback = _callback;
    }

    this.showStudentInfo = function () {
        if (callback) {
            callback();
        }
    }
}
