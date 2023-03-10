export type ItemGiftCertificate = {
    id?: string;
    /**
     * Name provided for the gift certificate that will appear in the control panel.
     */
    name?: string;
    /**
     * The theme of the gift certificate.
     */
    theme: ItemGiftCertificate.theme;
    /**
     * Value must be between 1.00 and 1,000.00 in the store’s default currency.
     */
    amount: number;
    is_taxable?: boolean;
    sender: {
        name?: string;
        email?: string;
    };
    recipient: {
        name?: string;
        email?: string;
    };
    /**
     * Limited to 200 characters.
     */
    message?: string;
};
export declare namespace ItemGiftCertificate {
    /**
     * The theme of the gift certificate.
     */
    enum theme {
        BIRTHDAY = "Birthday",
        BOY = "Boy",
        CELEBRATION = "Celebration",
        CHRISTMAS = "Christmas",
        GENERAL = "General",
        GIRL = "Girl"
    }
}
