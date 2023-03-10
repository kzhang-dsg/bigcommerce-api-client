"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeValue = void 0;
var AttributeValue;
(function (AttributeValue) {
    /**
     * Resource type associated with the product or product variant meta field. Currently, the only values available are 'product' or 'variant'.
     */
    let resource_type;
    (function (resource_type) {
        resource_type["PRODUCT"] = "product";
        resource_type["VARIANT"] = "variant";
    })(resource_type = AttributeValue.resource_type || (AttributeValue.resource_type = {}));
    /**
     * Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
     */
    let attribute_type;
    (function (attribute_type) {
        attribute_type["METAFIELD"] = "metafield";
    })(attribute_type = AttributeValue.attribute_type || (AttributeValue.attribute_type = {}));
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
