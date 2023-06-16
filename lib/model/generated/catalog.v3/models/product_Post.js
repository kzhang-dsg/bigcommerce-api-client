"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_Post = void 0;
var product_Post;
(function (product_Post) {
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    let type;
    (function (type) {
        type["PHYSICAL"] = "physical";
        type["DIGITAL"] = "digital";
    })(type = product_Post.type || (product_Post.type = {}));
})(product_Post = exports.product_Post || (exports.product_Post = {}));
