function AddInfoView () {
    var el = document.createElement('div');

    mediator.sub('student clicked', showDetails);

    this.render = function () {
        return el;
    };

    function showDetails (student) {
        if (student !== 'delete') {
            addInfo();
        } else {
            while (el.firstChild) {
                el.removeChild(el.lastChild);
            }
        }

        function addInfo () {
            el.innerHTML = addInfoTpl.replacer(addInfoTpl.infoTpl, student.toJSON());

            el.querySelector('.btn').addEventListener('click', editInfo, false);
        }

        function editInfo () {
            el.innerHTML = addInfoTpl.replacer(addInfoTpl.editTpl, student.toJSON());

            el.querySelector('.btn').addEventListener('click', saveInfo, false);
        }

        function saveInfo () {
            var lastName = document.getElementsByName('lastName')[0].value,
                name = document.getElementsByName('name')[0].value,
                gender = document.getElementsByName('gender')[0].value,
                skype = document.getElementsByName('skype')[0].value;

            student.set('lastName', lastName);
            student.set('name', name);
            student.set('gender', gender);
            student.set('skype', skype);

            addInfo();
        }
    }
}