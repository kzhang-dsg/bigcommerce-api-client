import type { AppliedCoupon } from './AppliedCoupon';
export type Checkout = {
    id?: string;
    cart?: {
        /**
         * Cart ID, provided after creating a cart with a POST request.
         */
        id?: string;
        /**
         * ID of the customer to which the cart belongs.
         */
        customer_id?: number;
        /**
         * The email address of the cart. This is the same email address that is used in the billing address.
         */
        email?: string;
        currency?: {
            /**
             * ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.)
             */
            code?: string;
        };
        /**
         * Sum of cart line-item amounts before cart-level discounts, coupons, or taxes are applied.
         */
        base_amount?: number;
        /**
         * ID of channel
         */
        channel_id?: number;
        /**
         * Discounted amount.
         */
        discount_amount?: number;
        /**
         * Sum of cart line-item amounts minus cart-level discounts and coupons including tax.
         */
        cart_amount_inc_tax?: number;
        /**
         * Sum of cart line-item amounts minus cart-level discounts and coupons excluding tax.
         */
        cart_amount_ex_tax?: number;
        coupons?: Array<{
            /**
             * The coupon code.
             */
            code: string;
            /**
             * The coupon ID.
             */
            id?: number;
            /**
             * Key name to identify the type of coupon.
             */
            coupon_type?: string;
            /**
             * The discounted amount applied within a given context.
             */
            discounted_amount?: number;
        }>;
        discounts?: Array<{
            /**
             * ID of the applied discount.
             */
            id?: string;
            /**
             * The discounted amount applied within a given context.
             */
            discounted_amount?: number;
        }>;
        line_items?: {
            physical_items: Array<{
                quantity: number;
                /**
                 * The line-item ID.
                 */
                id?: string;
                variant_id?: number;
                product_id?: number;
                sku?: string;
                /**
                 * The product name of the item.
                 */
                name?: string;
                /**
                 * The product URL.
                 */
                url?: string;
                is_taxable?: boolean;
                image_url?: string;
                discounts?: Array<{
                    /**
                     * ID of the applied discount.
                     */
                    id?: number;
                    /**
                     * The discounted amount applied within a given context.
                     */
                    discounted_amount?: number;
                }>;
                /**
                 * The total value of all discounts applied to this item.
                 */
                discount_amount?: number;
                /**
                 * The total value of all coupons applied to this item.
                 */
                coupon_amount?: number;
                /**
                 * An item’s original price is the same as the default price of the product configured in the admin panel.
                 */
                original_price?: number;
                /**
                 * The net item price before discounts and coupons are applied. BigCommerce derives an item’s list price from the product default price or, if applicable, the sale price configured in the admin panel.
                 */
                list_price?: number;
                /**
                 * Price of the item after all discounts are applied. (The final price before tax calculation.)
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
                is_require_shipping?: boolean;
                is_mutable?: boolean;
                parent_id?: number | null;
                gift_wrapping?: {
                    name?: string;
                    message?: string;
                    amount?: number;
                    amount_as_integer?: number;
                } | null;
            }>;
            digital_items: Array<{
                quantity: number;
                /**
                 * The line-item ID.
                 */
                id?: string;
                variant_id?: number;
                parent_id?: number | null;
                product_id?: number;
                sku?: string;
                /**
                 * The product name of the item.
                 */
                name?: string;
                /**
                 * The product URL.
                 */
                url?: string;
                is_mutable?: boolean;
                is_require_shipping?: boolean;
                is_taxable?: boolean;
                image_url?: string;
                discounts?: Array<{
                    /**
                     * ID of the applied discount.
                     */
                    id?: string;
                    /**
                     * The discounted amount applied within a given context.
                     */
                    discounted_amount?: number;
                }>;
                /**
                 * The total value of all discounts applied to this item.
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
                 * The net item price before discounts and coupons are applied. BigCommerce derives an item’s list price from the product default price or, if applicable, the sale price configured in the admin panel.
                 */
                list_price?: number;
                /**
                 * Price of the item after all discounts are applied. (The final price before tax calculation.)
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
            }>;
            gift_certificates: Array<{
                /**
                 * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
                 */
                theme: string;
                /**
                 * Value must be between 1.00 and 1,000.00 in the store’s default currency.
                 */
                amount: number;
                sender: {
                    name?: string;
                    email?: string;
                };
                recipient: {
                    name?: string;
                    email?: string;
                };
                id?: string;
                /**
                 * GiftCertificate-provided name that will appear in the control panel.
                 */
                name?: string;
                taxable?: boolean;
                /**
                 * Limited to 200 characters.
                 */
                message?: string;
            }>;
            custom_items?: Array<{
                quantity: number;
                id?: string;
                extended_list_price?: number;
                list_price?: number;
                sku?: string;
                name?: string;
                image_url?: string;
            }>;
        };
        /**
         * Time when the cart was created.
         */
        created_time?: string;
        /**
         * Time when the cart was last updated.
         */
        updated_time?: string;
    };
    billing_address?: ({
        first_name?: string;
        last_name?: string;
        email?: string;
        company?: string;
        address1?: string;
        address2?: string;
        city?: string;
        /**
         * Represents state or province.
         */
        state_or_province?: string;
        state_or_province_code?: string;
        country_code?: string;
        postal_code?: string;
        phone?: string;
        custom_fields?: Array<{
            field_id?: string;
            /**
             * This can also be an array for fields that need to support a list of values (e.g., a set of check boxes.)
             */
            field_value?: string;
        }>;
    } & {
        id?: string;
    });
    consignments?: Array<{
        id?: string;
        shippingAddress?: any;
        address?: ({
            first_name?: string;
            last_name?: string;
            email: string;
            company?: string;
            address1?: string;
            address2?: string;
            city?: string;
            /**
             * Represents state or province.
             */
            state_or_province?: string;
            state_or_province_code?: string;
            country_code: string;
            postal_code?: string;
            phone?: string;
            custom_fields?: Array<{
                field_id?: string;
                /**
                 * This can also be an array for fields that need to support a list of values (e.g., a set of check boxes.)
                 */
                field_value?: string;
            }>;
        } & {
            id?: string;
        });
        /**
         * This is available only when "include=consignments.available_shipping_options" is presented in the URL.
         */
        available_shipping_options?: Array<{
            description?: string;
            id?: string;
            /**
             * Specifies the type of shipping option, such as flat rate, UPS, etc.
             */
            type?: string;
            image_url?: string;
            cost?: number;
            /**
             * An estimate of the arrival time.
             */
            transit_time?: string;
            /**
             * Read-only field that is used for the Shipping Provider API.
             */
            readonly additional_description?: string;
        }>;
        selected_shipping_option?: {
            description?: string;
            id?: string;
            /**
             * Specifies the type of shipping option, such as flat rate, UPS, etc.
             */
            type?: string;
            image_url?: string;
            cost?: number;
            /**
             * An estimate of the arrival time.
             */
            transit_time?: string;
            /**
             * Read-only field that is used for the Shipping Provider API.
             */
            readonly additional_description?: string;
        };
        /**
         * List of consignment discounts applied through coupons.
         */
        coupon_discounts?: Array<{
            /**
             * Coupon code through which this discount was applied.
             */
            code?: string;
            amount?: number;
        }>;
        /**
         * List of consignment discounts applied through cart-level discounts.
         */
        discounts?: Array<{
            /**
             * Discount rule ID that applied this discount.
             */
            id?: number;
        }>;
        /**
         * The shipping cost for this consignment including tax.
         */
        shipping_cost_inc_tax?: number;
        /**
         * The shipping cost for this consignment excluding tax.
         */
        shipping_cost_ex_tax?: number;
        /**
         * The handling cost of shipping for this consignment including tax.
         */
        handling_cost_inc_tax?: number;
        /**
         * The handling cost of shipping for this consignment excluding tax.
         */
        handling_cost_ex_tax?: number;
        /**
         * Array lists only one line item. To display multiple `line_item_ids`, perform a `POST` request to add consignments to the checkout using the same address.
         */
        line_item_ids?: Array<string>;
    }>;
    taxes?: Array<{
        /**
         * Name of the tax.
         */
        name?: string;
        amount?: number;
    }>;
    /**
     * Coupons applied at checkout level.
     */
    coupons?: Array<AppliedCoupon>;
    order_id?: string | null;
    /**
     * Shipping cost before any discounts are applied including tax.
     */
    shipping_cost_total_inc_tax?: number;
    /**
     * Shipping cost before any discounts are applied excluding tax.
     */
    shipping_cost_total_ex_tax?: number;
    /**
     * Handling cost for all consignments including tax.
     */
    handling_cost_total_inc_tax?: number;
    /**
     * Handling cost for all consignments excluding tax.
     */
    handling_cost_total_ex_tax?: number;
    tax_total?: number;
    /**
     * Subtotal of the checkout before applying item-level discounts including tax.
     */
    subtotal_inc_tax?: number;
    /**
     * Subtotal of the checkout before applying item-level discounts excluding tax.
     */
    subtotal_ex_tax?: number;
    /**
     * The total payable amount, before applying any store credit or a gift certificate.
     */
    grand_total?: number;
    /**
     * Time when the cart was created.
     */
    created_time?: string;
    /**
     * Time when the cart was last updated.
     */
    updated_time?: string;
    /**
     * Shopper's message provided as details for the order to be created from this checkout.
     */
    customer_message?: string;
    promotions?: Array<{
        banners?: Array<{
            /**
             * ID of the promotion.
             */
            id?: string;
            /**
             * Type of the banner.
             */
            type?: string;
            /**
             * An array of the locations where the banner will display.
             */
            page?: Array<string>;
            /**
             * Text of the banner.
             */
            text?: string;
        }>;
    }>;
};
