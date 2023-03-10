import type { ConsignmentLineItem } from './ConsignmentLineItem';
import type { PickupConsignmentLocation } from './PickupConsignmentLocation';
/**
 * Pickup consignment
 */
export type PickupConsignment = {
    id?: number;
    lineItems?: Array<ConsignmentLineItem>;
    pickupMethodId?: number;
    pickupMethodDisplayName?: string;
    collectionInstructions?: string;
    collectionTimeDescription?: string;
    location?: PickupConsignmentLocation;
};
