/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type customerAddress_Base = {
    /**
     * ID of the associated customer.
     */
    customer_id?: number;
    /**
     * The customer’s first name.
     */
    first_name: string;
    /**
     * The customer’s last name.
     */
    last_name: string;
    /**
     * The customer’s company name.
     */
    company?: string;
    /**
     * The customer’s street address, line 1.
     */
    street_1: string;
    /**
     * The customer’s street address, line 2.
     */
    street_2?: string;
    /**
     * The customer’s city/town/suburb.
     */
    city: string;
    /**
     * The customer’s state/province. Do not abbreviate the state; spell out the entire word, e.g.: California. (Cannot be null. As a workaround for addresses that include no state/province string, pass a space as the “state” value.)
     */
    state: string;
    /**
     * The customer’s ZIP or postal code.
     */
    zip: string;
    /**
     * The customer’s country. Must be the full country name.
     */
    country: string;
    /**
     * The customer’s phone number.
     */
    phone: string;
    address_type?: customerAddress_Base.address_type;
};

export namespace customerAddress_Base {

    export enum address_type {
        RESIDENTIAL = 'residential',
        COMMERCIAL = 'commercial',
    }


}

