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
export declare namespace SupportedCardInstrument {
    /**
     * Type of this instrument
     */
    enum instrument_type {
        VISA = "VISA",
        MASTERCARD = "MASTERCARD",
        DISCOVER = "DISCOVER",
        AMEX = "AMEX",
        DINERS_CLUB = "DINERS_CLUB",
        JCB = "JCB",
        DANKORT = "DANKORT",
        MAESTRO = "MAESTRO",
        STORED_CARD = "STORED_CARD"
    }
}
