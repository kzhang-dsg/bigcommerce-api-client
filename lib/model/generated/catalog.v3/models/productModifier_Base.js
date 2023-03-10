"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModifier_Base = void 0;
var productModifier_Base;
(function (productModifier_Base) {
    /**
     * BigCommerce API, which determines how it will display on the storefront. Acceptable values: `date`, `checkbox`, `file`, `text`, `multi_line_text`, `numbers_only_text`, `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. Required in a /POST.
     *
     */
    let type;
    (function (type) {
        type["DATE"] = "date";
        type["CHECKBOX"] = "checkbox";
        type["FILE"] = "file";
        type["TEXT"] = "text";
        type["MULTI_LINE_TEXT"] = "multi_line_text";
        type["NUMBERS_ONLY_TEXT"] = "numbers_only_text";
        type["RADIO_BUTTONS"] = "radio_buttons";
        type["RECTANGLES"] = "rectangles";
        type["DROPDOWN"] = "dropdown";
        type["PRODUCT_LIST"] = "product_list";
        type["PRODUCT_LIST_WITH_IMAGES"] = "product_list_with_images";
        type["SWATCH"] = "swatch";
    })(type = productModifier_Base.type || (productModifier_Base.type = {}));
})(productModifier_Base = exports.productModifier_Base || (exports.productModifier_Base = {}));
