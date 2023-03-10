"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetafieldBase_Post = void 0;
var MetafieldBase_Post;
(function (MetafieldBase_Post) {
    /**
     * Determines the visibility and writeability of the field by other API consumers.
     *
     * |Value|Description
     * |-|-|
     * |`app_only`|Private to the app that owns the field|
     * |`read`|Visible to other API consumers|
     * |`write`|Open for reading and writing by other API consumers|
     * |`read_and_sf_access`|Visible to other API consumers, including on storefront|
     * |`write_and_sf_access`|Open for reading and writing by other API consumers, including on storefront|
     *
     */
    let permission_set;
    (function (permission_set) {
        permission_set["APP_ONLY"] = "app_only";
        permission_set["READ"] = "read";
        permission_set["WRITE"] = "write";
        permission_set["READ_AND_SF_ACCESS"] = "read_and_sf_access";
        permission_set["WRITE_AND_SF_ACCESS"] = "write_and_sf_access";
    })(permission_set = MetafieldBase_Post.permission_set || (MetafieldBase_Post.permission_set = {}));
})(MetafieldBase_Post = exports.MetafieldBase_Post || (exports.MetafieldBase_Post = {}));
