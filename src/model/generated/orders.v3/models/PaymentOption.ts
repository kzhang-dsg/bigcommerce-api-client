/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentOption = {
    /**
     * Name of the payment method
     */
    provider_id?: string;
    /**
     * Description for payment provider
     */
    provider_description?: string;
    /**
     * amount to be refunded via this payment provider
     */
    amount?: number;
    /**
     * Indicates the payment must be done offline due to constraints of the payment provider, such as partial refunds not being supported, or it being offline only such as cash on delivery of bank deposit.
     */
    offline?: boolean;
    /**
     * Indicates if the payment provider is a strictly offline provider, such as cash on delivery or bank deposit.
     */
    offline_provider?: boolean;
    /**
     * Reason the payment option is offline only, if applicable.
     */
    offline_reason?: string;
};

