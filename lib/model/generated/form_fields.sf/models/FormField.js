"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = void 0;
var FormField;
(function (FormField) {
    /**
     * Type of the value hold by the field
     */
    let type;
    (function (type) {
        type["INTEGER"] = "integer";
        type["STRING"] = "string";
        type["ARRAY"] = "array";
        type["DATE"] = "date";
    })(type = FormField.type || (FormField.type = {}));
    /**
     * Type of the field
     */
    let fieldType;
    (function (fieldType) {
        fieldType["CHECKBOX"] = "checkbox";
        fieldType["TEXT"] = "text";
        fieldType["DATE"] = "date";
        fieldType["MULTILINE"] = "multiline";
        fieldType["RADIO"] = "radio";
        fieldType["DROPDOWN"] = "dropdown";
    })(fieldType = FormField.fieldType || (FormField.fieldType = {}));
})(FormField = exports.FormField || (exports.FormField = {}));
