export type SupportedPayPalAccountInstrument = {
    /**
     * Type of this instrument
     */
    instrument_type: SupportedPayPalAccountInstrument.instrument_type;
};
export declare namespace SupportedPayPalAccountInstrument {
    /**
     * Type of this instrument
     */
    enum instrument_type {
        STORED_PAYPAL_ACCOUNT = "STORED_PAYPAL_ACCOUNT"
    }
}
