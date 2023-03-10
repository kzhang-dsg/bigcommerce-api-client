/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * When doing a PUT or POST to the `fieldValue` with a pick list, the input must be a number. The response will be a string.
 */
export type customFields = {
    fieldId?: string;
    /**
     * This can also be an array for fields that need to support list of values; for example, a set of checkboxes. When doing a PUT or POST to the `fieldValue` with a pick list, the input must be a number. The response will be a string.
     */
    fieldValue?: string;
};

