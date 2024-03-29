"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.category_Post = void 0;
var category_Post;
(function (category_Post) {
    /**
     * Determines how the products are sorted on category page load.
     *
     */
    let default_product_sort;
    (function (default_product_sort) {
        default_product_sort["USE_STORE_SETTINGS"] = "use_store_settings";
        default_product_sort["FEATURED"] = "featured";
        default_product_sort["NEWEST"] = "newest";
        default_product_sort["BEST_SELLING"] = "best_selling";
        default_product_sort["ALPHA_ASC"] = "alpha_asc";
        default_product_sort["ALPHA_DESC"] = "alpha_desc";
        default_product_sort["AVG_CUSTOMER_REVIEW"] = "avg_customer_review";
        default_product_sort["PRICE_ASC"] = "price_asc";
        default_product_sort["PRICE_DESC"] = "price_desc";
    })(default_product_sort = category_Post.default_product_sort || (category_Post.default_product_sort = {}));
})(category_Post = exports.category_Post || (exports.category_Post = {}));
