function OneStudentView (student) {
    var el = document.createElement('li');

    student.on('change', fillElement);

    this.render = function () {
        fillElement();

        return el;
    };

    function fillElement () {
        el.innerHTML = oneStudentTpl.replacer(oneStudentTpl.oneStudent, student.toJSON());

        el.addEventListener('click', showDetails, false);
        el.querySelector('.delBtn').addEventListener('click', deleteStudent, false);
    }

    function showDetails () {
        mediator.pub('student clicked', student);
    }

    function deleteStudent (e) {
        e.stopPropagation();

        el.remove();
        student.destroy();

        mediator.pub('student clicked', 'delete');
    }
}