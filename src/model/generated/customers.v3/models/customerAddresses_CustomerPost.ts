/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { formFieldValue } from './formFieldValue';

/**
 * The `address` object for the `customer` object's `addresses` array.
 */
export type customerAddresses_CustomerPost = {
    /**
     * The first name associated with the customer address.
     */
    first_name: string;
    /**
     * The last name of the customer address.
     */
    last_name: string;
    /**
     * The company of the customer address.
     */
    company?: string;
    /**
     * The address 1 line.
     */
    address1: string;
    /**
     * The address 2 line.
     */
    address2?: string;
    /**
     * The city of the customer address.
     */
    city: string;
    /**
     * The state or province name. Required for countries in which valid addresses must contain a state/province.
     */
    state_or_province?: string;
    /**
     * The postal code of the customer address. Required for countries in which valid addresses must have postal codes.
     */
    postal_code?: string;
    /**
     * The country code of the customer address.
     */
    country_code: string;
    /**
     * The phone number of the customer address.
     */
    phone?: string;
    /**
     * The address type. Residential or Commercial.
     */
    address_type?: customerAddresses_CustomerPost.address_type;
    /**
     * Array of form fields. Controlled by `formfields` parameter.
     */
    form_fields?: Array<formFieldValue>;
};

export namespace customerAddresses_CustomerPost {

    /**
     * The address type. Residential or Commercial.
     */
    export enum address_type {
        RESIDENTIAL = 'residential',
        COMMERCIAL = 'commercial',
    }


}

