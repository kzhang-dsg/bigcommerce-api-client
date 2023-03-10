export type BillingAddress = {
    /**
     * First name of the card holder.
     */
    first_name?: string;
    /**
     * Last name of the card holder.
     */
    last_name?: string;
    email?: string;
    /**
     * Company of the card holder.
     */
    company?: string;
    address1?: string;
    address2?: string;
    city?: string;
    postal_code?: string;
    /**
     * Represents state or province.
     */
    state_or_province?: string;
    state_or_province_code?: string;
    /**
     * ISO-3166-1 2 letter country code.
     */
    country_code?: string;
    phone?: string;
};
