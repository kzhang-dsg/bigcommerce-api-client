/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SupportedPayPalAccountInstrument = {
    /**
     * Type of this instrument
     */
    instrument_type: SupportedPayPalAccountInstrument.instrument_type;
};

export namespace SupportedPayPalAccountInstrument {

    /**
     * Type of this instrument
     */
    export enum instrument_type {
        STORED_PAYPAL_ACCOUNT = 'STORED_PAYPAL_ACCOUNT',
    }


}

