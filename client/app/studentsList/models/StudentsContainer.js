var StudentsContainer = (function (Parent) {
    extend(Constructor, Parent);

    function Constructor () {
        Parent.call(this);

        var students = this.getCollection(),
            initStudents = function (response) {
                var student;

                response.forEach(function (obj) {
                    student = new Student();

                    for (var key in obj) {
                        student.set(key, obj[key]);
                    }

                    student.on('student removed', remove);
                    students.push(student);
                });

                this.pub('inited');
            };

        this.init = function () {
            request.load('students', initStudents.bind(this));
        };

        function remove (student) {
            students.splice(students.indexOf(student), 1);
        }
    }

    return Constructor;
})(Container);