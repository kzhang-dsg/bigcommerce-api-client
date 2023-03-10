/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Represents all settings overrides related to the abandoned cart functionality of a store for a channel
 */
export type ChannelAbandonedCartSettings = {
    /**
     * Indicates whether or not abandoned cart notification is on. If it is null, it means there is no override for the specified channel.
     */
    enable_notification?: boolean | null;
    /**
     * Indicates whether or not a customer should continue to receive abandoned cart emails until their cart is recovered. If it is null, it means there is no override for the specified channel.
     */
    email_customer_until_cart_is_recovered?: boolean | null;
    /**
     * Indicates whether or not a customer should receive abandoned cart emails based on their consent. If it is null, it means there is no override for the specified channel. By default customers will not receive emails.
     */
    marketing_emails_require_customer_consent?: boolean | null;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is converted into an order. If it is null, it means there is no override for the specified channel.
     */
    email_merchant_when_cart_is_converted?: boolean | null;
    /**
     * Indicates whether or not a merchant should receive a notification email when a cart is abandoned. If it is null, it means there is no override for the specified channel.
     */
    email_merchant_when_cart_is_abandoned?: boolean | null;
    /**
     * The email address for receiving merchant notifications. If it is null, it means there is no override for the specified channel.
     */
    merchant_email_address?: string | null;
    /**
     * Indicates whether to send an email for every abandoned cart or to send a digest email after X number of abandoned carts. If it is null, it means there is no override for the specified channel.
     */
    merchant_abandoned_cart_email_frequency_type?: ChannelAbandonedCartSettings.merchant_abandoned_cart_email_frequency_type | null;
    /**
     * The number of abandoned carts to accumulate before a digest email is sent to a merchant. If it is null, it means there is no override for the specified channel.
     */
    merchant_abandoned_cart_digest_email_frequency?: number | null;
};

export namespace ChannelAbandonedCartSettings {

    /**
     * Indicates whether to send an email for every abandoned cart or to send a digest email after X number of abandoned carts. If it is null, it means there is no override for the specified channel.
     */
    export enum merchant_abandoned_cart_email_frequency_type {
        DIGEST = 'digest',
        INDIVIDUAL = 'individual',
    }


}

