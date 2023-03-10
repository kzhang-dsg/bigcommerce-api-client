export type ItemGiftCertificateGet = {
    id?: string;
    /**
     * Name provided for the gift certificate that will appear in the control panel.
     */
    name?: string;
    /**
     * The theme of the gift certificate. The following options are available:`Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
     */
    theme?: string;
    /**
     * Value must be between 1.00 and 1,000.00 in the store’s default currency.
     */
    amount?: number;
    is_taxable?: boolean;
    sender?: {
        name?: string;
        email?: string;
    };
    recipient?: {
        name?: string;
        email?: string;
    };
    /**
     * The message included in the gift certificate is limited to 200 characters.
     */
    message?: string;
};
