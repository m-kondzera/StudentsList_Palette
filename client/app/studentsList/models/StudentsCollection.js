function StudentsCollection () {
    var students = [],
        observer = new PubSub(),
        initStudents = function (response) {
            response.forEach(function (obj) {
                students.push(new Student(obj.lastName, obj.name, obj.gender, obj.skype));
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

    this.remove = function (student) {
        students.splice(students.indexOf(student), 1);
    };
}