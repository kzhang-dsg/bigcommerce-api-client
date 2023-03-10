"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModifier_Put = void 0;
var productModifier_Put;
(function (productModifier_Put) {
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
    })(type = productModifier_Put.type || (productModifier_Put.type = {}));
    /**
     * (date) The type of limit that is allowed to be entered on a date option.
     *
     */
    let date_limit_mode;
    (function (date_limit_mode) {
        date_limit_mode["EARLIEST"] = "earliest";
        date_limit_mode["RANGE"] = "range";
        date_limit_mode["LATEST"] = "latest";
    })(date_limit_mode = productModifier_Put.date_limit_mode || (productModifier_Put.date_limit_mode = {}));
    /**
     * (file) The kind of restriction on the file types that can be uploaded with a file upload option. Values: `specific` - restricts uploads to particular file types; `all` - allows all file types.
     *
     */
    let file_types_mode;
    (function (file_types_mode) {
        file_types_mode["SPECIFIC"] = "specific";
        file_types_mode["ALL"] = "all";
    })(file_types_mode = productModifier_Put.file_types_mode || (productModifier_Put.file_types_mode = {}));
    /**
     * (numbers_only_text) The type of limit on values entered for a number option.
     *
     */
    let number_limit_mode;
    (function (number_limit_mode) {
        number_limit_mode["LOWEST"] = "lowest";
        number_limit_mode["HIGHEST"] = "highest";
        number_limit_mode["RANGE"] = "range";
    })(number_limit_mode = productModifier_Put.number_limit_mode || (productModifier_Put.number_limit_mode = {}));
    /**
     * (product_list, product_list_with_images) How to factor the optional product's weight and package dimensions into the shipping quote. Values: `none` - don't adjust; `weight` - use shipping weight only; `package` - use weight and dimensions.
     *
     */
    let product_list_shipping_calc;
    (function (product_list_shipping_calc) {
        product_list_shipping_calc["NONE"] = "none";
        product_list_shipping_calc["WEIGHT"] = "weight";
        product_list_shipping_calc["PACKAGE"] = "package";
    })(product_list_shipping_calc = productModifier_Put.product_list_shipping_calc || (productModifier_Put.product_list_shipping_calc = {}));
})(productModifier_Put = exports.productModifier_Put || (exports.productModifier_Put = {}));
