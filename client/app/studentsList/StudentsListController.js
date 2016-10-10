function StudentsListController () {
    var studentsList = document.getElementsByClassName('studentsList')[0],
        info = document.getElementsByClassName('info')[0],
        studentsContainer = new StudentsContainer(),
        addInfoView = new AddInfoView(),
        studentsListView;

    studentsContainer.on('inited', createList);
    studentsContainer.init();

    info.appendChild(addInfoView.render());

    function createList () {
        studentsListView = new StudentsListView(studentsContainer);
        studentsList.appendChild(studentsListView.render());
    }

}
