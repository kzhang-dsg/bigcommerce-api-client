"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheType = exports.Sort = exports.Limit = exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["INCOMPLETE"] = 0] = "INCOMPLETE";
    OrderStatus[OrderStatus["PENDING"] = 1] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 2] = "SHIPPED";
    OrderStatus[OrderStatus["PARTIALLY_SHIPPED"] = 3] = "PARTIALLY_SHIPPED";
    OrderStatus[OrderStatus["REFUNDED"] = 4] = "REFUNDED";
    OrderStatus[OrderStatus["CANCELLED"] = 5] = "CANCELLED";
    OrderStatus[OrderStatus["DECLINED"] = 6] = "DECLINED";
    OrderStatus[OrderStatus["AWAITING_PAYMENT"] = 7] = "AWAITING_PAYMENT";
    OrderStatus[OrderStatus["AWAITING_PICKUP"] = 8] = "AWAITING_PICKUP";
    OrderStatus[OrderStatus["AWAITING_SHIPMENT"] = 9] = "AWAITING_SHIPMENT";
    OrderStatus[OrderStatus["COMPLETED"] = 10] = "COMPLETED";
    OrderStatus[OrderStatus["AWAITING_FULFILLMENT"] = 11] = "AWAITING_FULFILLMENT";
    OrderStatus[OrderStatus["MANUAL_VERIFICATION_REQUIRED"] = 12] = "MANUAL_VERIFICATION_REQUIRED";
    OrderStatus[OrderStatus["DISPUTED"] = 13] = "DISPUTED";
    OrderStatus[OrderStatus["PARTIALLY_REFUNDED"] = 14] = "PARTIALLY_REFUNDED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
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
var CacheType;
(function (CacheType) {
    CacheType[CacheType["IN_MEMORY"] = 0] = "IN_MEMORY";
    CacheType[CacheType["REDIS"] = 1] = "REDIS";
})(CacheType = exports.CacheType || (exports.CacheType = {}));
