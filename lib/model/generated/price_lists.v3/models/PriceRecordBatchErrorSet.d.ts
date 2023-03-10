/**
 * Error during Price Record batch PUT request. Includes data sent in the request and errors.
 */
export type PriceRecordBatchErrorSet = {
    /**
     * Price Record object used in batch create or update request.
     */
    data?: any;
    field_errors?: Record<string, string>;
};
