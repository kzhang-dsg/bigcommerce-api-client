/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A theme.
 */
export type Theme = {
    /**
     * The variations.
     */
    variations?: Array<{
        /**
         * The description.
         */
        description?: string;
        /**
         * The external identifier.
         */
        external_id?: string;
        /**
         * The name.
         */
        name?: string;
        /**
         * The identifier.
         */
        uuid?: string;
    }>;
    /**
     * The identifier.
     */
    uuid?: string;
    /**
     * The theme name identifier.
     */
    name?: string;
    /**
     * Flag to identify private themes.
     */
    is_private?: boolean;
};

