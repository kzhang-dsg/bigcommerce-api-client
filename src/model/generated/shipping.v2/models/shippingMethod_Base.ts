/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ShippingMethodType } from './ShippingMethodType';

export type shippingMethod_Base = {
    /**
     * Display name for shipping method.
     */
    name?: string;
    type?: ShippingMethodType;
    /**
     * Depends on the shipping method type. See the [supported settings object](#supported-settings).
     */
    settings?: {
        /**
         * Flat rate per order.
         */
        rate?: number;
    };
    /**
     * Whether or not this shipping zone method is enabled.
     */
    enabled?: boolean;
    handling_fees?: ({
        /**
         * Flat-rate handling fee applied to shipping cost.
         */
        fixed_surcharge?: number;
    } | {
        /**
         * Percentage handling fee applied to shipping cost.
         */
        percentage_surcharge?: number;
    });
    /**
     * Whether or not this shipping zone is the fallback if all others are not valid for the order.
     */
    is_fallback?: boolean;
};

