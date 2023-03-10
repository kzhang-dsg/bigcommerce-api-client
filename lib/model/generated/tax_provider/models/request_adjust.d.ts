import type { request_quote } from './request_quote';
/**
 * An **AdjustRequest** contains the same data as a standard **QuoteRequest** with added detail of the adjustment operation.
 */
export type request_adjust = ({
    /**
     * Specifies the reason for the adjustment operation, for auditing purposes. May be a custom, user-entered description.
     */
    adjust_description?: string;
} & request_quote);
