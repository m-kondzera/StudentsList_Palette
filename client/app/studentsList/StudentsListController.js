function StudentsListController () {
    var studentsList = document.getElementsByClassName('studentsList')[0],
        info = document.getElementsByClassName('info')[0],
        studentsContainer = new StudentsContainer(),
        studentsListView = new StudentsListView({collection: studentsContainer}),
        addInfoView = new AddInfoView();

    studentsList.appendChild(studentsListView.render().el);
    info.appendChild(addInfoView.render().el);
}
