function StudentsListController () {
    var studentsList = document.getElementsByClassName('studentsList')[0],
        info = document.getElementsByClassName('info')[0],
        studentsContainer = new StudentsContainer(),
        addInfoView = new AddInfoView(),
        studentsListView;

    studentsListView = new StudentsListView({collection: studentsContainer});
    studentsList.appendChild(studentsListView.render().el);
    info.appendChild(addInfoView.render());
}
