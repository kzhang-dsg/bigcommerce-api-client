/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { consentAllow } from './consentAllow';
import type { Deny } from './Deny';

/**
 * Response payload for the BigCommerce API.
 */
export type consent_Full = {
    allow?: consentAllow;
    deny?: Deny;
    /**
     * The date of which the customer consent was last updated.
     */
    updated_at?: string;
};

