export type Payment = {
    /**
     * Amount in smallest currency unit
     */
    amount?: number;
    /**
     * Currency code
     */
    currency_code?: string;
    instrument: any;
    /**
     * Identifier for payment method that will be used for this payment
     */
    payment_method_id: string;
};
