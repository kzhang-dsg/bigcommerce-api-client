"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = exports.Limit = void 0;
var Limit;
(function (Limit) {
    Limit[Limit["ALL"] = -1] = "ALL";
    Limit[Limit["MAX_LIMIT"] = 250] = "MAX_LIMIT";
})(Limit = exports.Limit || (exports.Limit = {}));
var Sort;
(function (Sort) {
    Sort["USE_STORE_SETTINGS"] = "use_store_settings";
    Sort["FEATURED"] = "featured";
    Sort["NEWEST"] = "newest";
    Sort["BEST_SELLING"] = "best_selling";
    Sort["ALPHA_ASC"] = "alpha_asc";
    Sort["ALPHA_DESC"] = "alpha_desc";
    Sort["AVG_CUSTOMER_REVIEW"] = "avg_customer_review";
    Sort["PRICE_ASC"] = "price_asc";
    Sort["PRICE_DESC"] = "price_desc";
})(Sort = exports.Sort || (exports.Sort = {}));
