/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { shippingMethod_Base } from './shippingMethod_Base';

export type shippingMethod_Full = ({
    /**
     * Shipping method ID. Read-only.
     */
    readonly id?: number;
} & shippingMethod_Base);

