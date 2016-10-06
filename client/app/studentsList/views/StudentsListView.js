function StudentsListView (studentsCollection) {
    this.render = function () {
        var fragment = document.createDocumentFragment(),
            oneStudent;

        studentsCollection.forEach(function (student) {;
            oneStudent = new OneStudentView(student);

            fragment.appendChild(oneStudent.render());
        });

        return fragment;
    };
}