/**
 * Card Verification Value result from the payment gateway.
 */
export type CVVResult = {
    /**
     * CVV code.
     */
    code?: string;
    /**
     * CVV message.
     */
    message?: string;
};
