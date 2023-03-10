"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.product_Base = void 0;
var product_Base;
(function (product_Base) {
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    let type;
    (function (type) {
        type["PHYSICAL"] = "physical";
        type["DIGITAL"] = "digital";
    })(type = product_Base.type || (product_Base.type = {}));
    /**
     * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.
     *
     */
    let inventory_tracking;
    (function (inventory_tracking) {
        inventory_tracking["NONE"] = "none";
        inventory_tracking["PRODUCT"] = "product";
        inventory_tracking["VARIANT"] = "variant";
    })(inventory_tracking = product_Base.inventory_tracking || (product_Base.inventory_tracking = {}));
    /**
     * Availability of the product. (Corresponds to the product's [Purchasability](https://support.bigcommerce.com/s/article/Adding-Products-v3?language=en_US#sections) section in the control panel.) Supported values: `available` - the product is available for purchase; `disabled` - the product is listed on the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders.
     *
     */
    let availability;
    (function (availability) {
        availability["AVAILABLE"] = "available";
        availability["DISABLED"] = "disabled";
        availability["PREORDER"] = "preorder";
    })(availability = product_Base.availability || (product_Base.availability = {}));
    /**
     * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field.
     *
     */
    let gift_wrapping_options_type;
    (function (gift_wrapping_options_type) {
        gift_wrapping_options_type["ANY"] = "any";
        gift_wrapping_options_type["NONE"] = "none";
        gift_wrapping_options_type["LIST"] = "list";
    })(gift_wrapping_options_type = product_Base.gift_wrapping_options_type || (product_Base.gift_wrapping_options_type = {}));
    /**
     * The product condition. Will be shown on the product page if the `is_condition_shown` field's value is `true`. Possible values: `New`, `Used`, `Refurbished`.
     *
     */
    let condition;
    (function (condition) {
        condition["NEW"] = "New";
        condition["USED"] = "Used";
        condition["REFURBISHED"] = "Refurbished";
    })(condition = product_Base.condition || (product_Base.condition = {}));
    /**
     * Type of product, defaults to `product`.
     *
     */
    let open_graph_type;
    (function (open_graph_type) {
        open_graph_type["PRODUCT"] = "product";
        open_graph_type["ALBUM"] = "album";
        open_graph_type["BOOK"] = "book";
        open_graph_type["DRINK"] = "drink";
        open_graph_type["FOOD"] = "food";
        open_graph_type["GAME"] = "game";
        open_graph_type["MOVIE"] = "movie";
        open_graph_type["SONG"] = "song";
        open_graph_type["TV_SHOW"] = "tv_show";
    })(open_graph_type = product_Base.open_graph_type || (product_Base.open_graph_type = {}));
})(product_Base = exports.product_Base || (exports.product_Base = {}));
