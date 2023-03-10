/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ItemReferenceId } from './ItemReferenceId';

/**
 * A view of a return item
 */
export type ReturnItem = {
    /**
     * The unique identifier of this return item
     */
    id?: number;
    reference_id?: ItemReferenceId;
    /**
     * The quantity of items for which a return was requested
     */
    quantity?: number;
    /**
     * The total price of the line item
     */
    total?: string;
    preferred_outcome?: {
        /**
         * Unique identifier of the preferred outcome
         */
        id?: number;
        /**
         * A displayable label for the preferred outcome
         */
        label?: string;
    };
    reason?: {
        /**
         * Unique identifier of the reason
         */
        id?: number;
        /**
         * A displayable label for the reason
         */
        label?: string;
    };
    received_state?: {
        /**
         * The quantity of items marked as received by the merchant
         */
        received_quantity?: number;
        /**
         * The quantity of items pending receipt by the merchant
         */
        pending_quantity?: number;
    };
    review_state?: {
        /**
         * The quantity of items approved for return by the merchant
         */
        approved_quantity?: number;
        /**
         * The quantity of items pending receipt by the merchant
         */
        pending_quantity?: number;
        /**
         * The quantity of items rejected by the merchant
         */
        rejected_quantity?: number;
    };
};

