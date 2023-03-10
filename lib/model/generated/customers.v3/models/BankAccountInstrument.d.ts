/**
 * A stored bank account instrument.
 */
export type BankAccountInstrument = {
    /**
     * Instrument type.
     */
    type?: BankAccountInstrument.type;
    /**
     * An identifier representing this stored instrument.
     */
    token?: string;
    /**
     * Identifies whether this stored instrument is default for the customer.
     */
    is_default?: boolean;
    /**
     * A masked bank account number.
     */
    masked_account_number?: string;
    /**
     * Issuer identifier for the account.
     */
    issuer?: string;
};
export declare namespace BankAccountInstrument {
    /**
     * Instrument type.
     */
    enum type {
        STORED_BANK_ACCOUNT = "stored_bank_account"
    }
}
