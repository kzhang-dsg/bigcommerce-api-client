/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Url = {
    /**
     * URL of site
     */
    url?: string;
    /**
     * URL type
     */
    type?: Url.type;
    /**
     * The date-time that this URL was created, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    created_at?: string;
    /**
     * The date-time that this URL was last updated, formatted as an [RFC-3339](https://www.ietf.org/rfc/rfc3339.txt) string.
     */
    updated_at?: string;
};

export namespace Url {

    /**
     * URL type
     */
    export enum type {
        PRIMARY = 'primary',
        CANONICAL = 'canonical',
        CHECKOUT = 'checkout',
    }


}

