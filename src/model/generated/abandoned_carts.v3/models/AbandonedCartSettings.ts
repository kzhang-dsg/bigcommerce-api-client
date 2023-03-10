/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents all settings related to the abandoned cart functionality of a store
 */
export type AbandonedCartSettings = {
    /**
     * Indicates whether or not abandoned cart notification is on
     */
    enable_notification?: boolean;
    /**
     * Indicates whether or not a customer should continue to receive abandoned cart emails until their cart is recovered
     */
    email_customer_until_cart_is_recovered?: boolean;
    /**
     * Indicates whether or not a customer should receive abandoned cart emails based on their consent. By default customers will not receive emails.
     */
    marketing_emails_require_customer_consent?: boolean;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is converted into an order
     */
    email_merchant_when_cart_is_converted?: boolean;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is abandoned
     */
    email_merchant_when_cart_is_abandoned?: boolean;
    /**
     * The email address for receiving merchant notifications
     */
    merchant_email_address?: string;
    /**
     * Indicates whether to send an email for every abandoned cart, or to send a digest email after X number of abandoned carts
     */
    merchant_abandoned_cart_email_frequency_type?: AbandonedCartSettings.merchant_abandoned_cart_email_frequency_type;
    /**
     * The number of abandoned carts to accumulate before a digest email is sent to a merchant
     */
    merchant_abandoned_cart_digest_email_frequency?: number;
};

export namespace AbandonedCartSettings {

    /**
     * Indicates whether to send an email for every abandoned cart, or to send a digest email after X number of abandoned carts
     */
    export enum merchant_abandoned_cart_email_frequency_type {
        DIGEST = 'digest',
        INDIVIDUAL = 'individual',
    }


}

