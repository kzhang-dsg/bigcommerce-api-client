export type giftCertificate_Base = {
    /**
     * Name of the recipient.
     */
    to_name: string;
    /**
     * Email of the recipient.
     */
    to_email: string;
    /**
     * Name of the customer who purchased the gift certificate.
     */
    from_name: string;
    /**
     * Email of the customer who purchased the gift certificate.
     */
    from_email: string;
    /**
     * Value of the gift certificate.
     */
    amount: string;
};
