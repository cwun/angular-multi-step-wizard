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
var formData_model_1 = require('./formData.model');
var workflow_service_1 = require('../workflow/workflow.service');
var workflow_model_1 = require('../workflow/workflow.model');
var FormDataService = (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new formData_model_1.FormData();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(workflow_model_1.STEPS.personal);
    };
    FormDataService.prototype.getWork = function () {
        // Return the work type
        return this.formData.work;
    };
    FormDataService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(workflow_model_1.STEPS.work);
    };
    FormDataService.prototype.getAddress = function () {
        // Return the Address data
        var address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    };
    FormDataService.prototype.setAddress = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(workflow_model_1.STEPS.address);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    };
    FormDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [workflow_service_1.WorkflowService])
    ], FormDataService);
    return FormDataService;
}());
exports.FormDataService = FormDataService;
//# sourceMappingURL=formData.service.js.map