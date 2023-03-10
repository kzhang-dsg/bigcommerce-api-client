export type BasePaymentResponse = {
    /**
     * Identifier for this transaction
     */
    id?: string;
    /**
     * Transaction type for this payment
     */
    transaction_type?: BasePaymentResponse.transaction_type;
};
export declare namespace BasePaymentResponse {
    /**
     * Transaction type for this payment
     */
    enum transaction_type {
        AUTHORIZATION = "authorization",
        PURCHASE = "purchase"
    }
}
