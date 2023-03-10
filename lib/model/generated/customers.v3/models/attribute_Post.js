"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.attribute_Post = void 0;
var attribute_Post;
(function (attribute_Post) {
    /**
     * Attribute type should match one of: string, number, date.
     */
    let type;
    (function (type) {
        type["STRING"] = "string";
        type["NUMBER"] = "number";
        type["DATE"] = "date";
    })(type = attribute_Post.type || (attribute_Post.type = {}));
})(attribute_Post = exports.attribute_Post || (exports.attribute_Post = {}));
