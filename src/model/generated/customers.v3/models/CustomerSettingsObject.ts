/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Customer Settings.
 */
export type CustomerSettingsObject = {
    /**
     * Controls the privacy settings.
     */
    privacy_settings?: {
        /**
         * Determines if a customer requires consent for tracking privacy.
         */
        ask_shopper_for_tracking_consent?: boolean;
        /**
         * The URL for a website's privacy policy.
         */
        policy_url?: string;
    };
    /**
     * The settings for a collection of customers.
     */
    customer_group_settings?: {
        /**
         * The ID for a guest customer group.
         */
        guest_customer_group_id?: number;
        /**
         * The ID for a default customer group.
         */
        default_customer_group_id?: number;
    };
};

