/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionOptionsInstance } from './ConnectionOptionsInstance';
import type { ZoneOptionsInstance } from './ZoneOptionsInstance';

/**
 * Payload sent to a Shipping Provider in to get quotes.
 */
export type BaseOptionsSchema = {
    /**
     * The minimum required payload that is sent to retrieve rates.
     */
    base_options: {
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
            address_type?: BaseOptionsSchema.address_type;
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
            address_type?: BaseOptionsSchema.address_type;
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
             * Value object for a width measurement.
             */
            width?: {
                units: 'cm' | 'in';
                value: number;
            };
            /**
             * Value object for a height measurement.
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
                 * The namespace associated with metafields for [products](/docs/rest-catalog/products/metafields#create-a-product-metafield) and [product variants](/docs/rest-catalog/product-variants/metafields). Save the metafield namespace using the format `shipping_carrier_{yourCarrierId}`; otherwise, it will not be recognized as a valid attribute.
                 */
                namespace?: string;
                /**
                 * The resource type associated with the metafield. Currently, the only values available are `product` and `variant`.
                 */
                resource_type?: 'product' | 'variant';
                /**
                 * The resource ID of the meta field.
                 */
                resource_id?: string;
                /**
                 * The attribute type associated with the product or product variant metafield. Currently, the only value available is `metafield`.
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
                name?: string;
                value?: string;
            }>;
        };
    };
    zone_options?: ZoneOptionsInstance;
    connection_options?: ConnectionOptionsInstance;
};

export namespace BaseOptionsSchema {

    /**
     * Optional. Defaults to `RESIDENTIAL`.
     */
    export enum address_type {
        RESIDENTIAL = 'RESIDENTIAL',
        COMMERCIAL = 'COMMERCIAL',
    }


}

