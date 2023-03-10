/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SupportedCardInstrument = {
    /**
     * Type of this instrument
     */
    instrument_type: SupportedCardInstrument.instrument_type;
    /**
     * Whether verification value is required for payment
     */
    verification_value_required?: boolean;
};

export namespace SupportedCardInstrument {

    /**
     * Type of this instrument
     */
    export enum instrument_type {
        VISA = 'VISA',
        MASTERCARD = 'MASTERCARD',
        DISCOVER = 'DISCOVER',
        AMEX = 'AMEX',
        DINERS_CLUB = 'DINERS_CLUB',
        JCB = 'JCB',
        DANKORT = 'DANKORT',
        MAESTRO = 'MAESTRO',
        STORED_CARD = 'STORED_CARD',
    }


}

