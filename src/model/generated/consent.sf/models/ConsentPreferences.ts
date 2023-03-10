/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of allowed and denied consent categories. Must be populated with a complete set of allowed and denied categories.
 *
 * Configurable categories are:
 *
 * 2 - Functional
 * 3 - Analytics
 * 4 - Targeting; Advertising
 *
 * For further definition of these categories, see [Scripts API](/api-docs/store-management/scripts).
 */
export type ConsentPreferences = {
    /**
     * Explicitly allowed consent categories. Allowed values are 2, 3, 4.
     */
    allow: Array<2 | 3 | 4>;
    /**
     * Denied consent categories. Allowed values are 2, 3, 4.
     */
    deny: Array<2 | 3 | 4>;
};

