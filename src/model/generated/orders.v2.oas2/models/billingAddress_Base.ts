/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type billingAddress_Base = {
    first_name?: string;
    last_name?: string;
    company?: string;
    street_1?: string;
    street_2?: string;
    city?: string;
    state?: string;
    /**
     * The billing address must include the ZIP code. The ZIP code must be two or more characters.
     */
    zip: string;
    country?: string;
    country_iso2?: string;
    phone?: string;
    email?: string;
};

