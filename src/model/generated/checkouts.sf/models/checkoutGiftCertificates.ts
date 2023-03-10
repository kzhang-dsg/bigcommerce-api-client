/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Applied gift certificate (as a payment method).
 */
export type checkoutGiftCertificates = Array<{
    balance?: number;
    code?: string;
    purchaseDate?: string;
    remaining?: number;
    used?: number;
}>;
