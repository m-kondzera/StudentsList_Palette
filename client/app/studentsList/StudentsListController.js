function StudentsListController () {
    var studentsContainer = new StudentsContainer(),
        studentsListView = new StudentsListView({collection: studentsContainer}),
        addInfoView = new AddInfoView();

    $('.studentsList').append(studentsListView.render().el);
    $('.info').append(addInfoView.render().el);
}
