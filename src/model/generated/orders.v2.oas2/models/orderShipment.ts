/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { billingAddress_Base } from './billingAddress_Base';
import type { shippingAddress_Base } from './shippingAddress_Base';

export type orderShipment = {
    /**
     * Shipment ID.
     */
    id?: number;
    /**
     * ID of the order associated with this shipment.
     */
    order_id?: number;
    /**
     * ID of this order’s customer.
     */
    customer_id?: number;
    /**
     * ID of the desired `shipping_address` associated with the shipment.
     */
    order_address_id?: number;
    /**
     * Creation date for the shipment.
     */
    date_created?: string;
    /**
     * Tracking number of the shipment.
     */
    tracking_number?: string;
    /**
     * Additional information to describe the method of shipment (ex. Standard, Ship by Weight, Custom Shipment). Can be used for live quotes from certain shipping providers.
     * If different from `shipping_provider`, `shipping_method` should correspond to `tracking_carrier`.
     */
    shipping_method?: string;
    /**
     * Enum of the BigCommerce shipping-carrier integration/module.
     */
    shipping_provider?: orderShipment.shipping_provider;
    /**
     * Tracking carrier for the shipment.
     * Acceptable values for `tracking_carrier` include an empty string (`""`) or one of the valid [tracking-carrier values](https://github.com/bigcommerce/dev-docs/blob/master/assets/csv/tracking_carrier_values.csv).
     */
    tracking_carrier?: string;
    /**
     * Returns a tracking link from the shipping service.
     */
    tracking_link?: string;
    /**
     * Comments the shipper wishes to add.
     */
    comments?: string;
    billing_address?: billingAddress_Base;
    shipping_address?: shippingAddress_Base;
    /**
     * The items in the shipment. This object has the following members, all integer: order_product_id (required), quantity (required), product_id (read-only). A sample items value might be: [ {"order_product_id":16,"product_id": 0,"quantity":2} ]
     */
    items?: Array<{
        order_product_id?: number;
        product_id?: number;
        quantity?: number;
    }>;
};

export namespace orderShipment {

    /**
     * Enum of the BigCommerce shipping-carrier integration/module.
     */
    export enum shipping_provider {
        AUSPOST = 'auspost',
        CANADAPOST = 'canadapost',
        ENDICIA = 'endicia',
        USPS = 'usps',
        FEDEX = 'fedex',
        UPS = 'ups',
        UPSREADY = 'upsready',
        UPSONLINE = 'upsonline',
        SHIPPERHQ = 'shipperhq',
        _ = ' ',
    }


}

