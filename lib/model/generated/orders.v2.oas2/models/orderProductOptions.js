"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderProductOptions = void 0;
var orderProductOptions;
(function (orderProductOptions) {
    /**
     * Option Type
     */
    let type;
    (function (type) {
        type["CHECKBOX"] = "Checkbox";
        type["DATE_FIELD"] = "Date field";
        type["FILE_UPLOAD"] = "File Upload";
        type["MULTI_LINE_TEXT_FIELD"] = "Multi-line text field";
        type["MULTIPLE_CHOICE"] = "Multiple choice";
        type["PRODUCT_PICK_LIST"] = "Product Pick List";
        type["SWATCH"] = "Swatch";
        type["TEXT_FIELD"] = "Text field";
    })(type = orderProductOptions.type || (orderProductOptions.type = {}));
})(orderProductOptions = exports.orderProductOptions || (exports.orderProductOptions = {}));
