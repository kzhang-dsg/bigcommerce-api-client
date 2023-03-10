/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderShipment_Put = {
    /**
     * ID of the desired `shipping_address` associated with the shipment.
     */
    order_address_id?: number;
    /**
     * Tracking number of the shipment.
     */
    tracking_number?: string;
    /**
     * Additional information to describe the method of shipment (ex. Standard, Ship by Weight, Custom Shipment). Can be used for live quotes from certain shipping providers.
     * If different from `shipping_provider`, `shipping_method` should correspond to `tracking_carrier`.
     *
     */
    shipping_method?: string;
    /**
     * Enum of the BigCommerce shipping-carrier integration/module.
     */
    shipping_provider?: orderShipment_Put.shipping_provider;
    /**
     * Tracking carrier for the shipment.
     * Acceptable values for `tracking_carrier` include an empty string (`""`) or one of the valid [tracking-carrier values](https://github.com/bigcommerce/dev-docs/blob/master/assets/csv/tracking_carrier_values.csv).
     */
    tracking_carrier?: string;
    /**
     * Comments the shipper wishes to add.
     */
    comments?: string;
};

export namespace orderShipment_Put {

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
    }


}

