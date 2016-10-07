function StudentsCollection () {
    var students = [],
        observer = new PubSub(),
        initStudents = function (response) {
            var student;

            response.forEach(function (obj) {
                student = new Student();
                
                student.set('lastName', obj.lastName);
                student.set('name', obj.name);
                student.set('gender', obj.gender);
                student.set('skype', obj.skype);

                student.on('student removed', remove);
                students.push(student);
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