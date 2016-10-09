function StudentsCollection () {
    var container = [],
        observer = new PubSub(),
        initStudents = function (response) {
            var student;

            response.forEach(function (obj) {
                student = new Student();

                for (var key in obj) {
                    student.set(key, obj[key]);
                }

                student.on('student removed', remove);
                container.push(student);
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
        container.forEach(iterator);
    };

    function remove (student) {
        container.splice(container.indexOf(student), 1);
    }
}