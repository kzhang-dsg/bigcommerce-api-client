/**
 * Errors during batch usage for the BigCommerce API.
 */
export type PriceRecordBatchErrorResponse = {
    batch_errors?: Array<{
        /**
         * Price Record object used in a batch create or update request.
         */
        data?: any;
        field_errors?: Record<string, string>;
    }>;
};
