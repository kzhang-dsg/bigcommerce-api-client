import type { ShippingConsignment } from './ShippingConsignment';
/**
 * All the consignments of the order.
 */
export type Consignments = {
    /**
     * List of shipping consignments
     */
    shipping?: Array<ShippingConsignment>;
};
