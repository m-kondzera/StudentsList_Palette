function AddInfoView () {
    var info = document.createElement('div'),
        observer = new PubSub(),
        newLastName, newName,
        newGender, newSkype,
        btn;

    mediator.sub('student clicked', showDetails);

    this.render = function () {
        return info;
    };

    function showDetails (student) {
        if (student !== 'delete') {
            addInfo();
        } else {
            while (info.firstChild) {
                info.removeChild(info.lastChild);
            }
        }

        function addInfo () {
            info.innerHTML = addInfoTpl.replacer(addInfoTpl.infoTpl, student.toJSON());

            btn = document.createElement('button');
            btn.classList.add('btn', 'btn-edit');
            btn.innerHTML = 'Edit';
            info.appendChild(btn);

            btn.addEventListener('click', editInfo, false);
        }

        function editInfo () {
            info.innerHTML = addInfoTpl.replacer(addInfoTpl.editTpl, student.toJSON());

            btn = document.createElement('button');
            btn.classList.remove('btn-edit');
            btn.classList.add('btn', 'btn-save');
            btn.innerHTML = 'Save';
            info.appendChild(btn);

            btn.addEventListener('click', saveInfo, false);
        }

        function saveInfo () {
            newLastName = document.getElementsByName('lastName')[0];
            newName = document.getElementsByName('name')[0];
            newGender = document.getElementsByName('gender')[0];
            newSkype = document.getElementsByName('skype')[0];

            student.set('lastName', newLastName.value);
            student.set('name', newName.value);
            student.set('gender', newGender.value);
            student.set('skype', newSkype.value);

            addInfo();
        }
    }
}