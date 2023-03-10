import type { consentAllow } from './consentAllow';
import type { Deny } from './Deny';
/**
 * Request payload for the BigCommerce API.
 */
export type DeclareCustomerConsentRequest = {
    allow?: consentAllow;
    deny?: Deny;
};
