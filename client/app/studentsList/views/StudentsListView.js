function StudentsListView (studentsCollection) {
    this.render = function () {
        var fragment = document.createDocumentFragment(),
            oneStudent;

        studentsCollection.forEach(function (student) {;
            oneStudent = new OneStudentView({model: student});

            fragment.appendChild(oneStudent.render().el);
        });

        return fragment;
    };
}