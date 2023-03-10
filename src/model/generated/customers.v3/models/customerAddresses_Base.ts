/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The `address` object for the `customer` object's `addresses` array.
 */
export type customerAddresses_Base = {
    /**
     * The first name of the customer address.
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
     * The state or province name. It is required for countries that need a state/province to complete an address.
     */
    state_or_province?: string;
    /**
     * The postal code of the customer address. It is required for countries that need postal codes to complete an address.
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
    address_type?: customerAddresses_Base.address_type;
};

export namespace customerAddresses_Base {

    /**
     * The address type. Residential or Commercial.
     */
    export enum address_type {
        RESIDENTIAL = 'residential',
        COMMERCIAL = 'commercial',
    }


}

