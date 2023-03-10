/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type paymentMethodStoredInstrument = {
    /**
     * Brand of this card such as VISA or Mastercard
     */
    brand: string;
    /**
     * Expiry month of this card
     */
    expiry_month: number;
    /**
     * Expiry year of this card
     */
    expiry_year: number;
    /**
     * Issuer identification number of this card. This is extracted from the card when the order is payed for.
     */
    issuer_identification_number: string;
    /**
     * Last four numbers of this card
     */
    last_4: string;
    /**
     * A BigCommerce-generated identifier that represents the stored card.
     */
    token: string;
    /**
     * Whether this instrument is a default instrument
     */
    is_default: boolean;
    /**
     * Type to classify this stored card
     */
    type: string;
};

