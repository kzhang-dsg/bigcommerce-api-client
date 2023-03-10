"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.widgetSchemaSetting_Base = void 0;
var widgetSchemaSetting_Base;
(function (widgetSchemaSetting_Base) {
    /**
     * The type of setting component to display. You can view the list of elements below to discover which are available to use.
     *
     * For examples of each type of setting, see [Page Builder > Schema Settings](/stencil-docs/page-builder/schema-settings/alignment) in Theme Docs.
     */
    let type;
    (function (type) {
        type["ALIGNMENT"] = "alignment";
        type["BOOLEAN"] = "boolean";
        type["BOX_MODEL"] = "boxModel";
        type["CODE"] = "code";
        type["COLOR"] = "color";
        type["IMAGE_MANAGER"] = "imageManager";
        type["INPUT"] = "input";
        type["NUMBER"] = "number";
        type["PRODUCT_ID"] = "productId";
        type["PRODUCT_IMAGE"] = "productImage";
        type["RANGE"] = "range";
        type["REGEX_INPUT"] = "regexInput";
        type["SELECT"] = "select";
        type["TEXT"] = "text";
        type["TOGGLE"] = "toggle";
    })(type = widgetSchemaSetting_Base.type || (widgetSchemaSetting_Base.type = {}));
})(widgetSchemaSetting_Base = exports.widgetSchemaSetting_Base || (exports.widgetSchemaSetting_Base = {}));
