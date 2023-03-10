import type { webhook_callback_base } from './webhook_callback_base';
/**
 * This webhook fires when product details are edited.
 *
 * Changes to the following fields trigger this event:
 * * Product Type
 * * Search Keywords
 * * Related Products
 * * Warranty Information
 * * Page Title
 * * Meta Description
 * * Gift Wrapping options
 * * Bin Picking Number (BPN)
 * * Fixed Shipping Price
 * * Free Shipping
 * * Open Graph Sharing Type
 * * Availability Text
 * * Purchasability
 * * Release Date
 * * Remove pre-order status on this date
 * * Preorder Message
 * * Inventory Stock
 * * Inventory Low Stock
 * * Track inventory
 * * Product UPC/EAN
 * * SKU
 * * Cost
 * * Tax Class
 * * Weight
 * * Width
 * * Height
 * * Depth
 * * Condition
 * * Show condition on storefront
 * * Brand
 * * Default Price
 * * Sale Price
 * * MSRP
 * * Product Name
 * * Description
 * * Visible on Storefront
 * * Sort Order
 * * Categories
 * * Product URL
 * * Set as a Featured Product on my Storefront
 *
 * However, changes to the following fields don't trigger this event:
 *
 * * Manufacturer Part Number (MPN)
 * * Global Trade Number (GTN)
 * * Tax Provider Tax Code
 * * Product Image
 * * Product Image Description
 * * Product Files
 * * Customs Information
 *
 * ```json title="Example callback object" lineNumbers
 * {
     * "created_at": 1561482670,
     * "store_id": "1025646",
     * "producer": "stores/{store_hash}",
     * "scope": "store/product/updated",
     * "hash": "352e4afc6dd3fc85ea26bfdf3f91852604d57528",
     * "data": {
         * "type": "product",
         * "id": 205
         * }
         * }
         * ```
         */
export type store_product_updated = webhook_callback_base;
