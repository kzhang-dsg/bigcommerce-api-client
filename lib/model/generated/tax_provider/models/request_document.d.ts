import type { Address } from './Address';
import type { request_item } from './request_item';
import type { request_item_wrapping } from './request_item_wrapping';
/**
 * Each **DocumentRequest** represents an order or part of an order of items fulfilled from a single origin address to a single destination address. In addition to shipping and billing details, it contains an `items` array of one or more **ItemRequest** objects, which represent the shipment’s tax-relevant contents. Multi-address orders, in which items ship to or from multiple addresses, require at least one **DocumentRequest** per combination of sender-recipient addresses. These are similar to "consignments" or "shipments" in other BigCommerce APIs.
 */
export type request_document = {
    /**
     * A unique identifier for this consignment. This value can be expected to be unique within an individual quote request but may be duplicated within subsequent quote requests. A digital consignment will see a prefix **DigitalDelivery_** followed by the Order ID.
     */
    id: string;
    billing_address?: Address;
    destination_address: Address;
    origin_address: Address;
    shipping: request_item;
    handling: request_item;
    /**
     * Collection of one or more items contained within this consignment that need to be assessed for tax liabilities.
     */
    items: Array<request_item_wrapping>;
};
