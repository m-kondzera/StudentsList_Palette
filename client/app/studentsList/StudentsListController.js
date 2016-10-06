function StudentsListController () {
    var studentsList = document.getElementsByClassName('studentsList')[0],
        info = document.getElementsByClassName('info')[0],
        studentsCollection = new StudentsCollection(),
        addInfoView = new AddInfoView(),
        studentsListView;

    studentsCollection.on('inited', createList);
    studentsCollection.init();

    info.appendChild(addInfoView.render());

    function createList () {
        studentsListView = new StudentsListView(studentsCollection);
        studentsList.appendChild(studentsListView.render());
    }

}
