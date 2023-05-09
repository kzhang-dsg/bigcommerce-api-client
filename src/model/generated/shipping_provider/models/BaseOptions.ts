/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FormFieldValue } from './FormFieldValue';

/**
 * The minimum required payload that is sent to retrieve rates.
 */
export type BaseOptions = {
    /**
     * Object representing a destination or origin address for items.
     */
    origin: {
        street_1?: string;
        street_2?: string;
        zip: string;
        city?: string;
        /**
         * State in ISO_3166 2 format.
         */
        state_iso2?: string;
        /**
         * Country in ISO_3166 2 format.
         */
        country_iso2: string;
        /**
         * Optional. Defaults to `RESIDENTIAL`.
         */
        address_type?: BaseOptions.address_type;
    };
    /**
     * Object representing a destination or origin address for items.
     */
    destination: {
        street_1?: string;
        street_2?: string;
        zip: string;
        city?: string;
        /**
         * State in ISO_3166 2 format
         */
        state_iso2?: string;
        /**
         * Country in ISO_3166 2 format
         */
        country_iso2: string;
        /**
         * Defaults to residential. Optional.
         */
        address_type?: BaseOptions.address_type;
        /**
         * Describes one or more [custom form fields](/docs/rest-storefront/forms). Property key is the global ID of a shipping address form field. When no custom fields exist, the object is empty.
         */
        form_fields?: {
            '<form field global ID>'?: FormFieldValue;
        };
    };
    items: Array<{
        /**
         * The variant SKU.
         */
        sku?: string;
        variant_id?: string;
        product_id?: string;
        name?: string;
        /**
         * Value object for a length measurement.
         */
        length?: {
            units: 'cm' | 'in';
            value: number;
        };
        /**
         * Value object for a length measurement.
         */
        width?: {
            units: 'cm' | 'in';
            value: number;
        };
        /**
         * Value object for a length measurement.
         */
        height?: {
            units: 'cm' | 'in';
            value: number;
        };
        /**
         * Value object for a weight measurement.
         */
        weight?: {
            units: 'oz' | 'g';
            value: number;
        };
        /**
         * Value object for a money amount.
         */
        discounted_price?: {
            currency: string;
            amount: number;
        };
        /**
         * Value object for a money amount.
         */
        declared_value?: {
            currency: string;
            amount: number;
        };
        quantity?: number;
        /**
         * A list of arbitrary properties stored as part of the product or product variant meta fields. These consist of public fields specific to the carrier integration.
         */
        attributes?: Array<{
            /**
             * The key associated with the meta field.
             */
            key?: string;
            /**
             * The value associated with the meta field.
             */
            value?: string;
            /**
             * The namespace associated with a [product](/docs/rest-catalog/products/metafields) or [product variant](/docs/rest-catalog/product-variants/metafields) metafields. You should save a metafield namespace under this format `shipping_carrier_{yourCarrierId}`; otherwise, you will not be able to recognize it as an attribute.
             */
            namespace?: string;
            /**
             * Resource type associated with the meta field. Currently, the only values available are 'product' or 'variant'.
             */
            resource_type?: 'product' | 'variant';
            /**
             * The resource ID of the meta field.
             */
            resource_id?: string;
            /**
             * Attribute type associated with the product or product variant meta field. Currently, the only value for this is 'metafield'.
             */
            attribute_type?: 'metafield';
        }>;
    }>;
    /**
     * The details of the Customer that has made the purchase.
     */
    customer?: {
        customer_groups?: Array<{
            customer_group_id?: number;
            customer_group_name?: string;
        }>;
        customer_id?: number;
    };
    store_id: string;
    /**
     * A collection of Reference Value objects.
     */
    request_context?: {
        reference_values?: Array<{
            /**
             * The property to which the reference value pertains. Examples include `channel_id` and `cart_id`.
             */
            name?: string;
            value?: string;
        }>;
    };
};

export namespace BaseOptions {

    /**
     * Optional. Defaults to `RESIDENTIAL`.
     */
    export enum address_type {
        RESIDENTIAL = 'RESIDENTIAL',
        COMMERCIAL = 'COMMERCIAL',
    }


}

