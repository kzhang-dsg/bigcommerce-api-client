"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.productOption_Base = void 0;
var productOption_Base;
(function (productOption_Base) {
    /**
     * The type of option, which determines how it will display on the storefront. Acceptable values: `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch.
     *
     */
    let type;
    (function (type) {
        type["RADIO_BUTTONS"] = "radio_buttons";
        type["RECTANGLES"] = "rectangles";
        type["DROPDOWN"] = "dropdown";
        type["PRODUCT_LIST"] = "product_list";
        type["PRODUCT_LIST_WITH_IMAGES"] = "product_list_with_images";
        type["SWATCH"] = "swatch";
    })(type = productOption_Base.type || (productOption_Base.type = {}));
})(productOption_Base = exports.productOption_Base || (exports.productOption_Base = {}));
