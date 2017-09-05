"use strict";
var FormData = (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    return FormData;
}());
exports.FormData = FormData;
var Personal = (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
    return Personal;
}());
exports.Personal = Personal;
var Address = (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());
exports.Address = Address;
//# sourceMappingURL=formData.model.js.map