"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var formData_service_1 = require('../data/formData.service');
var PersonalComponent = (function () {
    function PersonalComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Please tell us about yourself.';
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
        console.log('Personal feature loaded!');
    };
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setPersonal(this.personal);
    };
    PersonalComponent = __decorate([
        core_1.Component({
            selector: 'mt-wizard-personal',
            templateUrl: 'app/personal/personal.component.html'
        }), 
        __metadata('design:paramtypes', [formData_service_1.FormDataService])
    ], PersonalComponent);
    return PersonalComponent;
}());
exports.PersonalComponent = PersonalComponent;
//# sourceMappingURL=personal.component.js.map