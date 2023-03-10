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
export declare namespace StoredPayPalAccount {
    /**
     * Type to classify this payment instrument (required)
     */
    enum type {
        STORED_PAYPAL_ACCOUNT = "stored_paypal_account"
    }
}
