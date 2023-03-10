/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConsignmentFormField } from './ConsignmentFormField';
import type { ConsignmentLineItem } from './ConsignmentLineItem';

/**
 * Shipping consignment
 */
export type ShippingConsignment = {
    lineItems?: Array<ConsignmentLineItem>;
    shippingAddressId?: number;
    firstName?: string;
    lastName?: string;
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    stateOrProvince?: string;
    postalCode?: string;
    country?: string;
    countryCode?: string;
    email?: string;
    phone?: string;
    itemsTotal?: number;
    itemsShipped?: number;
    shippingMethod?: string;
    baseCost?: number;
    costExTax?: number;
    costIncTax?: number;
    costTax?: number;
    costTaxClassId?: number;
    baseHandlingCost?: number;
    handlingCostExTax?: number;
    handlingCostIncTax?: number;
    handlingCostTax?: number;
    handlingCostTaxClassId?: number;
    shippingZoneId?: number;
    shippingZoneName?: string;
    customFields?: Array<ConsignmentFormField>;
};

