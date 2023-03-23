import type { digitalConsignment_Get } from './digitalConsignment_Get';
import type { giftCertificateConsignment_Get } from './giftCertificateConsignment_Get';
import type { pickupConsignment_Get } from './pickupConsignment_Get';
import type { shippingConsignment_Get } from './shippingConsignment_Get';
export type orderConsignment_Get = {
    /**
     * Pickup consignments.
     */
    pickups?: Array<pickupConsignment_Get>;
    /**
     * Shipping consignments.
     */
    shipping?: Array<shippingConsignment_Get>;
    /**
     * Digital consignments for products that are downloaded.
     */
    downloads?: Array<digitalConsignment_Get>;
    /**
     * Email consignments for gift certificates.
     */
    email?: {
        gift_certificates?: Array<giftCertificateConsignment_Get>;
    };
};
