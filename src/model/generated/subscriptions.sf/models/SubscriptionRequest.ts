/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SubscriptionRequest = {
    /**
     * Email of subscriber
     */
    email?: string;
    /**
     * Describes whether subscriber has consented to receive Marketing emails.
     */
    acceptsMarketingNewsletter?: boolean;
    /**
     * Describes whether subscriber has consented to receive Abandoned Cart emails.
     */
    acceptsAbandonedCartEmails?: boolean;
};

