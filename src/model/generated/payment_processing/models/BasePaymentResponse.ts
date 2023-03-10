/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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

export namespace BasePaymentResponse {

    /**
     * Transaction type for this payment
     */
    export enum transaction_type {
        AUTHORIZATION = 'authorization',
        PURCHASE = 'purchase',
    }


}

