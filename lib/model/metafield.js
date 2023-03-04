"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceType = exports.PermissionSet = void 0;
var PermissionSet;
(function (PermissionSet) {
    PermissionSet["APP_ONLY"] = "app_only";
    PermissionSet["READ"] = "read";
    PermissionSet["WRITE"] = "write";
    PermissionSet["READ_AND_SF_ACCESS"] = "read_and_sf_access";
    PermissionSet["WRITE_AND_SF_ACCESS"] = "write_and_sf_access";
})(PermissionSet = exports.PermissionSet || (exports.PermissionSet = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["CATEGORY"] = "category";
    ResourceType["BRAND"] = "brand";
    ResourceType["PRODUCT"] = "product";
    ResourceType["VARIANT"] = "variant";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
//# sourceMappingURL=metafield.js.map