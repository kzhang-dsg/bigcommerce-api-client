/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { addresses } from './addresses';
import type { formField } from './formField';

export type customer_Full = {
    /**
     * Unique numeric ID of this customer. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     */
    id?: number;
    /**
     * Not returned in any responses, but accepts up to two fields allowing you to set the customer’s password. If a password is not supplied, it is generated automatically. For further information about using this object, please see the Customers resource documentation.
     */
    _authentication?: {
        force_reset?: string;
        password?: string;
        password_confirmation?: string;
    };
    /**
     * The name of the company for which the customer works.
     */
    company?: string;
    /**
     * First name of the customer.
     */
    first_name: string;
    /**
     * Last name of the customer.
     */
    last_name: string;
    /**
     * Email address of the customer.
     */
    email: string;
    /**
     * Phone number of the customer.
     */
    phone?: string;
    /**
     * Date on which the customer registered from the storefront or was created in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     */
    date_created?: string;
    /**
     * Date on which the customer updated their details in the storefront or was updated in the control panel. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     *
     */
    date_modified?: string;
    /**
     * The amount of credit the customer has. (Float, Float as String, Integer)
     */
    store_credit?: string;
    /**
     * The customer’s IP address when they signed up.
     */
    registration_ip_address?: string;
    /**
     * The group to which the customer belongs.
     */
    customer_group_id?: number;
    /**
     * Store-owner notes on the customer.
     */
    notes?: string;
    /**
     * If applicable, the tax-exempt category of the shopperʼs customer account. You can apply a tax-exempt category to multiple customers. This code should match the exemption codes provided by the third-party integration.
     */
    tax_exempt_category?: string;
    /**
     * Records whether the customer would like to receive marketing content from this store. READ-ONLY.This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     *
     */
    accepts_marketing?: boolean;
    addresses?: addresses;
    /**
     * Array of custom fields. This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     */
    form_fields?: Array<formField>;
    /**
     * Force a password change on next login.
     */
    reset_pass_on_login?: boolean;
};

