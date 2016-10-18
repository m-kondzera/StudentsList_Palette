'use strict';
function StudentsListController () {
    var studentsContainer = new StudentsContainer(),
        studentsListView = new StudentsListView({collection: studentsContainer}),
        addInfoView = new ShowDetailsView();

    $('.studentsList').append(studentsListView.render().el);
    $('.info').append(addInfoView.render().el);
}
