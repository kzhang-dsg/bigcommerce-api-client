/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SuccessPaymentResponse = {
    /**
     * Identifier for this transaction
     */
    id?: string;
    /**
     * Transaction type for this payment
     */
    transaction_type?: SuccessPaymentResponse.transaction_type;
    /**
     * Status to indicate a success response
     */
    status?: SuccessPaymentResponse.status;
};

export namespace SuccessPaymentResponse {

    /**
     * Transaction type for this payment
     */
    export enum transaction_type {
        AUTHORIZATION = 'authorization',
        PURCHASE = 'purchase',
    }

    /**
     * Status to indicate a success response
     */
    export enum status {
        SUCCESS = 'success',
        PENDING = 'pending',
    }


}

