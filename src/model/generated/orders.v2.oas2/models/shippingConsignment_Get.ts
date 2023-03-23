/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { products_Resource } from './products_Resource';
import type { shippingConsignment_Base } from './shippingConsignment_Base';
import type { shippingQuotesConsignment_Resource } from './shippingQuotesConsignment_Resource';

export type shippingConsignment_Get = ({
    /**
     * ID of the shipping consignment.
     */
    id?: number;
} & shippingConsignment_Base & {
    line_items?: Array<products_Resource>;
    /**
     * The total number of items in the order.
     */
    items_total?: number;
    /**
     * The number of items that have been shipped.
     */
    items_shipped?: number;
    /**
     * Text identifying the BigCommerce shipping module selected by the customer.
     */
    shipping_method?: string;
    /**
     * The base shipping cost value.
     */
    base_cost?: number;
    /**
     * The shipping cost value excluding tax.
     */
    cost_ex_tax?: number;
    /**
     * The shipping cost value including tax.
     */
    cost_inc_tax?: number;
    /**
     * The tax amount on the shipping cost.
     */
    cost_tax?: number;
    /**
     * The ID of the tax class applied to the shipping cost. Ignored if automatic tax is enabled.
     */
    cost_tax_class_id?: number;
    /**
     * The base handling charge.
     */
    base_handling_cost?: number;
    /**
     * The handling charge, excluding tax.
     */
    handling_cost_ex_tax?: number;
    /**
     * The handling charge, including tax.
     */
    handling_cost_inc_tax?: number;
    handling_cost_tax?: number;
    /**
     * The ID of the tax class applied to the handling charge. Ignored if automatic tax is enabled.
     */
    handling_cost_tax_class_id?: number;
    /**
     * The numeric ID of the shipping zone.
     */
    shipping_zone_id?: number;
    /**
     * The name of the shipping zone.
     */
    shipping_zone_name?: string;
    shipping_quotes?: shippingQuotesConsignment_Resource;
});

