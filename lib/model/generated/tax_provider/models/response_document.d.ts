import type { response_item } from './response_item';
import type { response_item_wrapping } from './response_item_wrapping';
export type response_document = {
    /**
     * A unique identifier for this consignment. Must match the ID of the corresponding Document Request.
     */
    id: string;
    /**
     * An optional unique identifier for the document stored in the external provider’s system. Currently not used in any end-to-end operation, but may be logged by BigCommerce and thus be helpful when resolving issues.
     */
    external_id?: string;
    /**
     * Collection of items contained within this consignment that have had tax liabilities calculated.
     */
    items: Array<response_item_wrapping>;
    shipping: response_item;
    handling: response_item;
};
