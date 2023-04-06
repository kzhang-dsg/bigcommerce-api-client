import type { ItemReferenceId } from './ItemReferenceId';
export type GetReturnableItems = Array<{
    reference_id?: ItemReferenceId;
    /**
     * The name of the order product.
     */
    name?: string;
    /**
     * The maximum quantity of this item that can presently be requested for return.
     */
    returnable_quantity?: number;
    /**
     * The total price of this line item.
     */
    total?: string;
    /**
     * A collection of options configured for the order product.
     */
    options?: Array<{
        /**
         * A displayable name for the option.
         */
        display_name?: string;
        /**
         * A displayable value for the option.
         */
        display_value?: string;
    }>;
}>;
