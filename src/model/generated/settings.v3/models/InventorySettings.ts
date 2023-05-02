/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InventorySettings = {
    /**
     * Describes storefront behavior when product is out of stock.
     */
    product_out_of_stock_behavior?: InventorySettings.product_out_of_stock_behavior;
    /**
     * Describes storefront behavior when variant is out of stock.
     */
    option_out_of_stock_behavior?: InventorySettings.option_out_of_stock_behavior;
    /**
     * Describes when stock levels are updated.
     */
    update_stock_behavior?: InventorySettings.update_stock_behavior;
    /**
     * Describes whether stock levels automatically adjust when you edit an order.
     */
    edit_order_stock_adjustment?: boolean;
    /**
     * Describes whether stock levels automatically adjust when you refund or cancel an order.
     */
    refund_order_stock_adjustment?: boolean;
    /**
     * Describes whether a storefront displays stock levels.
     */
    stock_level_display?: InventorySettings.stock_level_display;
    /**
     * Out of stock message displayed to shoppers.
     */
    default_out_of_stock_message?: string;
    /**
     * Describes whether an option is hidden in product filtering. Applies when `option_out_of_stock_behavior` is set to `label_option`.
     */
    hide_in_product_filtering?: boolean;
    /**
     * Describes whether pre-order stock levels are shown.
     */
    show_pre_order_stock_levels?: boolean;
    /**
     * Describes whether out-of-stock messages are shown on product listing pages.
     */
    show_out_of_stock_message?: boolean;
};

export namespace InventorySettings {

    /**
     * Describes storefront behavior when product is out of stock.
     */
    export enum product_out_of_stock_behavior {
        DO_NOTHING = 'do_nothing',
        HIDE_PRODUCT = 'hide_product',
        HIDE_PRODUCT_AND_ACCESSIBLE = 'hide_product_and_accessible',
        HIDE_PRODUCT_AND_REDIRECT = 'hide_product_and_redirect',
    }

    /**
     * Describes storefront behavior when variant is out of stock.
     */
    export enum option_out_of_stock_behavior {
        DO_NOTHING = 'do_nothing',
        HIDE_OPTION = 'hide_option',
        LABEL_OPTION = 'label_option',
    }

    /**
     * Describes when stock levels are updated.
     */
    export enum update_stock_behavior {
        ORDER_PLACED = 'order_placed',
        ORDER_COMPLETED_OR_SHIPPED = 'order_completed_or_shipped',
    }

    /**
     * Describes whether a storefront displays stock levels.
     */
    export enum stock_level_display {
        DONT_SHOW = 'dont_show',
        SHOW = 'show',
        SHOW_WHEN_LOW = 'show_when_low',
    }


}

