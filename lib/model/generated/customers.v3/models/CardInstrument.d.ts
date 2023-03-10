import type { BillingAddress } from './BillingAddress';
/**
 * Details about a stored card instrument which includes details around billing, last 4 digits, issuer, etc.
 */
export type CardInstrument = {
    /**
     * Type of instrument.
     */
    type?: CardInstrument.type;
    /**
     * An identifier representing this stored instrument.
     */
    token?: string;
    /**
     * Identifies whether this stored instrument is default for the customer.
     */
    is_default?: boolean;
    /**
     * Card brand.
     */
    brand?: string;
    /**
     * Expiry month for this card.
     */
    expiry_month?: number;
    /**
     * Expiry year for this card.
     */
    expiry_year?: number;
    /**
     * Issuer identification number for this card.
     */
    issuer_identification_number?: string;
    /**
     * Last four digits of this card.
     */
    last_4?: string;
    billing_address?: BillingAddress;
};
export declare namespace CardInstrument {
    /**
     * Type of instrument.
     */
    enum type {
        STORED_CARD = "stored_card"
    }
}
