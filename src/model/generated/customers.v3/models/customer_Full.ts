/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { address_Full } from './address_Full';
import type { attribute_Full } from './attribute_Full';
import type { customerChannelIds } from './customerChannelIds';
import type { CustomerStoredCreditAmounts } from './CustomerStoredCreditAmounts';
import type { formFieldValue_Customer } from './formFieldValue_Customer';

export type customer_Full = {
    /**
     * The email of the customer. Must be unique.
     */
    email?: string;
    /**
     * The first name of the customer.
     */
    first_name?: string;
    /**
     * The last name of the customer.
     */
    last_name?: string;
    /**
     * The company of the customer.
     */
    company?: string;
    /**
     * The phone number of the customer.
     */
    phone?: string;
    /**
     * The IP address from which this customer was registered.
     */
    registration_ip_address?: string;
    /**
     * The customer notes.
     */
    notes?: string;
    /**
     * The tax exempt category code for the customer.
     */
    tax_exempt_category?: string;
    /**
     * ID of the group which this customer belongs to.
     */
    customer_group_id?: number;
    /**
     * The unique numeric ID of the customer.
     */
    id?: number;
    /**
     * The date on which the customer was modified.
     */
    date_modified?: Date;
    /**
     * The date of which the customer was created.
     */
    date_created?: Date;
    /**
     * Total number of customer addresses.
     */
    address_count?: number;
    /**
     * Total number of customer attributes.
     */
    attribute_count?: number;
    authentication?: {
        /**
         * If `true`, this customer will be forced to change password on next login.
         */
        force_password_reset?: boolean;
    };
    /**
     * Array of customer addresses. Limited to 10.
     */
    addresses?: Array<address_Full>;
    /**
     * Array of customer attributes. Limited to 10.
     */
    attributes?: Array<attribute_Full>;
    /**
     * Array of form fields. Controlled by `formfields` parameter.
     */
    form_fields?: Array<formFieldValue_Customer>;
    store_credit_amounts?: CustomerStoredCreditAmounts;
    /**
     * Determines if the customer is signed up to receive either product review or abandoned cart emails or receive both emails.
     */
    accepts_product_review_abandoned_cart_emails?: boolean;
    /**
     * Channel ID of the customer that has created the form.
     */
    origin_channel_id?: number;
    channel_ids?: customerChannelIds;
};

