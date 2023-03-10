/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StoredPayPalAccountInstrument = {
    /**
     * Email address of this stored account
     */
    email: string;
    /**
     * Identifier representing this stored account
     */
    token: string;
    /**
     * Whether this instrument is a default instrument
     */
    is_default: boolean;
    /**
     * Type to classify this stored account
     */
    type: StoredPayPalAccountInstrument.type;
};

export namespace StoredPayPalAccountInstrument {

    /**
     * Type to classify this stored account
     */
    export enum type {
        STORED_PAYPAL_ACCOUNT = 'stored_paypal_account',
    }


}

