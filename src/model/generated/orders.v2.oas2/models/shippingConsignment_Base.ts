/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { formFields } from './formFields';

export type shippingConsignment_Base = {
    first_name?: string;
    last_name?: string;
    company?: string;
    /**
     * Street address (first line).
     */
    street_1?: string;
    /**
     * Street address (second line).
     */
    street_2?: string;
    city?: string;
    /**
     * Zip or postal code, as a string.
     */
    zip?: string;
    country?: string;
    /**
     * 2-letter ISO Alpha-2 code for the country.
     */
    country_iso2?: string;
    state?: string;
    /**
     * Recipient’s email address.
     */
    email?: string;
    /**
     * Recipient’s telephone number.
     */
    phone?: string;
    form_fields?: Array<formFields>;
};

