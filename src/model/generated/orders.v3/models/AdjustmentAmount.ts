/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A negative or positive 2 decimal place rounded value that represents the difference between the refund amount requested in the refund quote and the actual amount that is refundable on the order. This value is negative when the refund amount requested in the refund quote is more than the total refundable amount. This value is positive when the total refundable amount has increased, e.g. as a result of rounding.
 */
export type AdjustmentAmount = number;
