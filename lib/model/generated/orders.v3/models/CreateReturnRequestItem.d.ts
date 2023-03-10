import type { ItemReferenceId } from './ItemReferenceId';
export type CreateReturnRequestItem = {
    reference_id: ItemReferenceId;
    quantity: number;
    preferred_outcome_id: number;
    reason_id: number;
};
