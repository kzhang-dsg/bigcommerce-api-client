export type billingAddress_Full = {
    first_name?: string;
    last_name?: string;
    company?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    country_iso2?: string;
    phone?: string;
    email?: string;
    form_fields?: Array<{
        /**
         * Name of the form field
         */
        name?: string;
        /**
         * Value of the form field
         */
        value?: string;
    }>;
};
