function OneButtonView (color) {
    var el = document.createElement('button');

    this.render = function () {
        el.classList.add('btn-color', color.get('color'));
        el.innerHTML = color.get('color').toUpperCase();

        el.addEventListener('click', postColor, false);

        return el;
    };

	function postColor () {
		mediator.pub('color selected', color.get('color'));

        color.increaseCounter();
	}
}