import type { DetailedErrors } from './DetailedErrors';
export type errorMultiStatus = {
    /**
     * The [HTTP status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) of the failure or partial success.
     */
    status?: number;
    /**
     * A summary of the failure or partial success.
     */
    title?: string;
    /**
     * A BigCommerce-defined error signifier.
     */
    type?: string;
    errors?: DetailedErrors;
};
