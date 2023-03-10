"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorySettings = void 0;
var InventorySettings;
(function (InventorySettings) {
    /**
     * Describes storefront behavior when product is out of stock.
     */
    let product_out_of_stock_behavior;
    (function (product_out_of_stock_behavior) {
        product_out_of_stock_behavior["DO_NOTHING"] = "do_nothing";
        product_out_of_stock_behavior["HIDE_PRODUCT"] = "hide_product";
        product_out_of_stock_behavior["HIDE_PRODUCT_AND_ACCESSIBLE"] = "hide_product_and_accessible";
        product_out_of_stock_behavior["HIDE_PRODUCT_AND_REDIRECT"] = "hide_product_and_redirect";
    })(product_out_of_stock_behavior = InventorySettings.product_out_of_stock_behavior || (InventorySettings.product_out_of_stock_behavior = {}));
    /**
     * Describes storefront behavior when variant is out of stock.
     */
    let option_out_of_stock_behavior;
    (function (option_out_of_stock_behavior) {
        option_out_of_stock_behavior["DO_NOTHING"] = "do_nothing";
        option_out_of_stock_behavior["HIDE_OPTION"] = "hide_option";
        option_out_of_stock_behavior["LABEL_OPTION"] = "label_option";
    })(option_out_of_stock_behavior = InventorySettings.option_out_of_stock_behavior || (InventorySettings.option_out_of_stock_behavior = {}));
    /**
     * Describes when stock levels are updated.
     */
    let update_stock_behavior;
    (function (update_stock_behavior) {
        update_stock_behavior["ORDER_PLACED"] = "order_placed";
        update_stock_behavior["ORDER_COMPLETED_OR_SHIPPED"] = "order_completed_or_shipped";
    })(update_stock_behavior = InventorySettings.update_stock_behavior || (InventorySettings.update_stock_behavior = {}));
    /**
     * Describes whether a storefront displays stock levels.
     */
    let stock_level_display;
    (function (stock_level_display) {
        stock_level_display["DONT_SHOW"] = "dont_show";
        stock_level_display["SHOW"] = "show";
        stock_level_display["SHOW_WHEN_LOW"] = "show_when_low";
    })(stock_level_display = InventorySettings.stock_level_display || (InventorySettings.stock_level_display = {}));
})(InventorySettings = exports.InventorySettings || (exports.InventorySettings = {}));
