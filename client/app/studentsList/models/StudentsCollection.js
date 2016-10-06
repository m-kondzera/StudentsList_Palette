function StudentsCollection () {
    var students = [],
        observer = new PubSub(),
        initStudents = function (response) {
            var newStudent;

            response.forEach(function (obj) {
                newStudent = new Student(obj.lastName, obj.name, obj.gender, obj.skype);
                newStudent.on('student removed', remove);
                students.push(newStudent);
            });
            
            observer.pub('inited');
        };

    this.init = function () {
        request.load('students', initStudents);
    };

    this.on = function (event, fn) {
        observer.sub(event, fn);
    };

    this.forEach = function (iterator) {
        students.forEach(iterator);
    };

    function remove (student) {
        students.splice(students.indexOf(student), 1);
    }
}