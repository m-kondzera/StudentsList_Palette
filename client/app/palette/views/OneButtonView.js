function OneButtonView (color) {
    var el = document.createElement('button');

    this.render = function () {
        el.classList.add('btn-color', color.getColor());
        el.innerHTML = color.getColor().toUpperCase();

        el.addEventListener('click', postColor, false);

        return el;
    };

	function postColor () {
		mediator.pub('color selected', color.getColor());

        color.increaseCounter();
	}
}