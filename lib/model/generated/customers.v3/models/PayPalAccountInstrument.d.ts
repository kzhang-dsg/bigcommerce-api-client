/**
 * A PayPal account stored instrument.
 */
export type PayPalAccountInstrument = {
    /**
     * Instrument type.
     */
    type?: PayPalAccountInstrument.type;
    /**
     * An identifier representing this stored instrument.
     */
    token?: string;
    /**
     * Identifies whether this stored instrument is default for the customer.
     */
    is_default?: boolean;
    /**
     * PayPal email address.
     */
    email?: string;
};
export declare namespace PayPalAccountInstrument {
    /**
     * Instrument type.
     */
    enum type {
        STORED_PAYPAL_ACCOUNT = "stored_paypal_account"
    }
}
