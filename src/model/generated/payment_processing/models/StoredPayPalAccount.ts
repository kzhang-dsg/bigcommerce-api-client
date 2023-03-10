/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StoredPayPalAccount = {
    /**
     * Type to classify this payment instrument (required)
     */
    type?: StoredPayPalAccount.type;
    /**
     * Identifier representing this stored PayPal account (required)
     */
    token?: string;
};

export namespace StoredPayPalAccount {

    /**
     * Type to classify this payment instrument (required)
     */
    export enum type {
        STORED_PAYPAL_ACCOUNT = 'stored_paypal_account',
    }


}

