/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { paymentMethodStoredInstrument } from './paymentMethodStoredInstrument';

export type paymentMethod_Full = {
    /**
     * Identifier for this payment method
     */
    id: string;
    /**
     * Name of this payment method
     */
    name: string;
    stored_instruments?: Array<paymentMethodStoredInstrument>;
    supported_instruments: Array<{
        /**
         * Type of this instrument
         */
        instrument_type: 'VISA' | 'MASTERCARD' | 'DISCOVER' | 'AMEX' | 'DINERS_CLUB' | 'JCB' | 'DANKORT' | 'MAESTRO' | 'STORED_CARD';
        /**
         * Whether verification value is required for payment
         */
        verification_value_required?: boolean;
    }>;
    /**
     * Whether this payment method is on test mode
     */
    test_mode: boolean;
    /**
     * Type to classify this payment method
     */
    type: string;
};

