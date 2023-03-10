/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type response_connection = {
    data?: {
        /**
         * Identifies a unique account on the external tax provider infrastructure. May be used to reconcile the two platforms.
         */
        username?: string;
        /**
         * Describes whether the stored credentials are considered complete and configured, ready to be used for Tax Provider API requests.
         *
         * Merchants may enable any **configured** tax provider for storefront tax quotation.
         */
        configured?: boolean;
    };
};

