"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadShared = void 0;
var ReadShared;
(function (ReadShared) {
    /**
     * Determines the type of page. See [Pages v3 page types](/api-reference/store-management/pages#page-types) for more about the differences.
     */
    let type;
    (function (type) {
        type["PAGE"] = "page";
        type["CONTACT_FORM"] = "contact_form";
        type["RAW"] = "raw";
        type["BLOG"] = "blog";
        type["FEED"] = "feed";
        type["LINK"] = "link";
    })(type = ReadShared.type || (ReadShared.type = {}));
})(ReadShared = exports.ReadShared || (exports.ReadShared = {}));
