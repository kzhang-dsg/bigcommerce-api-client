/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A quote being returned as part of the rate request.
 */
export type RateQuoteObject = {
    /**
     * A code describing the service.
     */
    code: string;
    /**
     * A display name for the service.
     */
    display_name: string;
    /**
     * Value object for a money amount.
     */
    cost: {
        currency: string;
        amount: number;
    };
    messages?: Array<{
        text: string;
        type: 'INFO' | 'WARNING' | 'ERROR';
    }>;
    description?: string;
    rate_id?: string;
    /**
     * Value object for a money amount.
     */
    discounted_cost?: {
        currency: string;
        amount: number;
    };
    dispatch_date?: string;
    /**
     * Value object for the length of time in transit.
     */
    transit_time?: {
        units?: RateQuoteObject.units;
        duration?: number;
    };
};

export namespace RateQuoteObject {

    export enum units {
        BUSINESS_DAYS = 'BUSINESS_DAYS',
        DAYS = 'DAYS',
        HOURS = 'HOURS',
    }


}

