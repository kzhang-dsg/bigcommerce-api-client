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
export declare namespace StoredPayPalAccountInstrument {
    /**
     * Type to classify this stored account
     */
    enum type {
        STORED_PAYPAL_ACCOUNT = "stored_paypal_account"
    }
}
