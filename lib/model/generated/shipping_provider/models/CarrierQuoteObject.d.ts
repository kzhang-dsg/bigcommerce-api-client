/**
 * A grouping of carrier rates and optionally, info about that carrier.
 */
export type CarrierQuoteObject = {
    carrier_info?: {
        code: string;
        display_name: string;
    };
    quotes: Array<{
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
        dispatch_date?: Date;
        /**
         * Value object for the length of time in transit.
         */
        transit_time?: {
            units?: 'BUSINESS_DAYS' | 'DAYS' | 'HOURS';
            duration?: number;
        };
    }>;
};
