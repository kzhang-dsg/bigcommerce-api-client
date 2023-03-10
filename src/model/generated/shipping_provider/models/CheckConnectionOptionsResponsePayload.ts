/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The response received back from the Shipping Provider connection check. This allows the store to understand whether the connection was successful.
 */
export type CheckConnectionOptionsResponsePayload = {
    /**
     * Indicates whether or not the connection options are valid.
     */
    valid?: boolean;
    messages?: Array<{
        text: string;
        type: 'INFO' | 'WARNING' | 'ERROR';
    }>;
};

