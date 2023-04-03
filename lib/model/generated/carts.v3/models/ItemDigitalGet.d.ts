export type ItemDigitalGet = ({
    /**
     * The line-item ID.
     */
    id?: string;
    /**
     * The ID of the variant. Required in the /PUT or /POST request if the product has variants.
     */
    variant_id?: number;
    /**
     * The ID of the product. Required in a /POST request.
     */
    product_id?: number;
    /**
     * SKU of the variant.
     */
    sku?: string;
    /**
     * The item’s product name.
     */
    name?: string;
    /**
     * The product URL.
     */
    url?: string;
    /**
     * Quantity of this item in the cart.
     */
    quantity?: number;
    /**
     * Boolean value that specifies whether the item is taxable.
     */
    is_taxable?: boolean;
    /**
     * Image of the product or variant.
     */
    image_url?: string;
    discounts?: Array<{
        id?: (string | number);
        /**
         * The discounted amount.
         */
        discounted_amount?: number;
    }>;
    coupons?: number;
    /**
     * The total value of all discounts applied to this item. This includes coupons and cart-level discounts.
     */
    discount_amount?: number;
    /**
     * The total value of all coupons applied to this item.
     */
    coupon_amount?: number;
    /**
     * An item’s original price is the same as the product default price in the admin panel.
     */
    original_price?: number;
    /**
     * The net item price before discounts and coupons. BigCommerce derives an item’s list price from the product default price or, if applicable, the sale price configured in the admin panel.
     */
    list_price?: number;
    /**
     * Item’s price after all discounts are applied. (The final price before tax calculation.)
     */
    sale_price?: number;
    /**
     * List price of the item multiplied by the quantity.
     */
    extended_list_price?: number;
    /**
     * Sale price of the item multiplied by the quantity.
     */
    extended_sale_price?: number;
    /**
     * The list of selected options for this product.
     */
    options?: Array<{
        /**
         * The product option name; for example, Color or Size.
         */
        name?: string;
        /**
         * The product option identifier.
         */
        nameId?: number;
        /**
         * The product option value; for example, Red or Medium.
         */
        value?: string;
        /**
         * The product option value identifier in number format.
         */
        valueId?: number;
    }>;
} & {
    /**
     * URLs to download all product files.
     */
    download_file_urls?: Array<string>;
    /**
     * The URL for the combined downloads page.
     */
    download_page_url?: string;
    /**
     * Specifies the combined download size of all files in human-readable style; for example, `30MB`.
     */
    download_size?: string;
});
