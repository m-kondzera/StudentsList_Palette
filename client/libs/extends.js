function extend (Child, Parent) {
    function MiddleEmptyObject() {}

    MiddleEmptyObject.prototype = Parent.prototype;

    Child.prototype = new MiddleEmptyObject();    
    Child.prototype.constructor = Child;
}