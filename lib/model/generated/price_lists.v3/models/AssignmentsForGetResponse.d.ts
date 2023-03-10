import type { AssignmentForGetResponse } from './AssignmentForGetResponse';
import type { CollectionMeta } from './CollectionMeta';
/**
 * Array of the price list assignments matching the filter. The response is paginated.
 */
export type AssignmentsForGetResponse = {
    data?: Array<AssignmentForGetResponse>;
    meta?: CollectionMeta;
};
