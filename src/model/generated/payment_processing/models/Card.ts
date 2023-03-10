/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Card = {
    /**
     * Type to classify this payment instrument (required)
     */
    type?: string;
    /**
     * Cardholderʼs full name (required)
     */
    cardholder_name?: string;
    /**
     * Credit card number (required)
     */
    number?: string;
    /**
     * Expiry month of this card (required)
     */
    expiry_month?: number;
    /**
     * Expiry year of this card (required)
     */
    expiry_year?: number;
    /**
     * Verification value of this card (CVV)
     */
    verification_value?: string;
    /**
     * Issue month of this card
     */
    issue_month?: number;
    /**
     * Issue year of this card
     */
    issue_year?: number;
    /**
     * Issue number of this card
     */
    issue_number?: number;
};

