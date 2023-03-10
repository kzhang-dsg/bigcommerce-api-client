/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CheckoutCoupon } from './CheckoutCoupon';

export type checkouts_Resp = {
    data?: {
        id?: string;
        /**
         * A cart contains a collection of items, prices, discounts, etc. It does not contain customer-related data.
         */
        cart?: {
            /**
             * Cart ID, provided after creating a cart with a POST.
             */
            id?: string;
            /**
             * ID of the customer to which the cart belongs.
             */
            customer_id?: number;
            /**
             * The cartʼs email. This is the same email that is used in the billing address
             */
            email?: string;
            /**
             * The currency in which prices are displayed (the store default currency).
             */
            currency?: {
                /**
                 * The currency name.
                 */
                name?: string;
                /**
                 * ISO-4217 currency code. (See: http://en.wikipedia.org/wiki/ISO_4217.)
                 */
                code?: string;
                /**
                 * The currency symbol.
                 */
                symbol?: string;
                /**
                 * The number of decimal places for the currency. For example, the USD currency has two decimal places.
                 */
                decimalPlaces?: number;
            };
            /**
             * Boolean representing whether tax information is included.
             */
            istaxIncluded?: boolean;
            /**
             * The cost of the cart’s contents, before applying discounts.
             */
            baseAmount?: number;
            /**
             * Discounted amount.
             */
            discountAmount?: number;
            /**
             * Sum of line-items amounts, minus cart-level discounts and coupons. This amount includes taxes, where applicable.
             */
            cartAmount?: number;
            coupons?: Array<{
                /**
                 * The coupon ID.
                 */
                id?: string;
                /**
                 * the coupon code
                 */
                code: string;
                /**
                 * The coupon title based on different types provided in control panel section.
                 */
                displayName?: string;
                /**
                 * Key name to identify the type of coupon.
                 */
                couponType?: string;
                /**
                 * The discounted amount applied within a given context.
                 */
                discountedAmount?: number;
            }>;
            discounts?: Array<{
                /**
                 * The name provided by the merchant.
                 */
                name?: string;
                /**
                 * The discounted amount applied within a given context.
                 */
                discountedAmount?: number;
            }>;
            lineItems?: Array<{
                physicalItems: Array<{
                    /**
                     * The line-item ID.
                     */
                    id?: string;
                    /**
                     * The product is part of a bundle, such as a product pick list, then the parentId or the main product ID will populate.
                     */
                    parentId?: string;
                    /**
                     * ID of the variant.
                     */
                    variantId?: number;
                    /**
                     * ID of the product.
                     */
                    productId?: number;
                    /**
                     * SKU of the variant.
                     */
                    sku?: string;
                    /**
                     * The itemʼs product name.
                     */
                    name?: string;
                    /**
                     * The product URL.
                     */
                    url?: string;
                    /**
                     * Quantity of this item.
                     */
                    quantity: number;
                    /**
                     * Whether the item is taxable.
                     */
                    isTaxable?: boolean;
                    /**
                     * A publicly-accessible URL for an image of this item.
                     */
                    imageUrl?: string;
                    /**
                     * A list of discounts applied to this item, as an array of AppliedDiscount objects.
                     */
                    discounts?: Array<{
                        /**
                         * The name provided by the merchant.
                         */
                        name?: string;
                        /**
                         * The discounted amount applied within a given context.
                         */
                        discountedAmount?: number;
                    }>;
                    /**
                     * The total value of all discounts applied to this item (excluding coupon).
                     */
                    discountAmount?: number;
                    /**
                     * The total value of all coupons applied to this item.
                     */
                    couponAmount?: number;
                    /**
                     * The item’s list price, as quoted by the manufacturer or distributor.
                     */
                    listPrice?: number;
                    /**
                     * The itemʼs price after all discounts are applied. (The final price before tax calculation.)
                     */
                    salePrice?: number;
                    /**
                     * The itemʼs list price multiplied by the quantity.
                     */
                    extendedListPrice?: number;
                    /**
                     * The itemʼs sale price multiplied by the quantity.
                     */
                    extendedSalePrice?: number;
                    /**
                     * the product type - physical or digital
                     */
                    type?: string;
                    /**
                     * If the item was added automatically by a promotion, such as a coupon or buy one, get one.
                     */
                    addedByPromotion?: boolean;
                    /**
                     * Whether this item requires shipping to a physical address.
                     */
                    isShippingRequired?: boolean;
                    isMutable?: boolean;
                    giftWrapping?: {
                        name?: string;
                        message?: string;
                        amount?: number;
                    };
                }>;
                digitalItems: Array<{
                    /**
                     * The line-item ID.
                     */
                    id?: string;
                    /**
                     * Bundled items will have their parentʼs item ID.
                     */
                    parentId?: string;
                    /**
                     * ID of the variant.
                     */
                    variantId?: number;
                    /**
                     * ID of the product.
                     */
                    productId?: number;
                    /**
                     * SKU of the variant.
                     */
                    sku?: string;
                    /**
                     * The itemʼs product name.
                     */
                    name?: string;
                    /**
                     * The product URL.
                     */
                    url?: string;
                    /**
                     * Quantity of this item.
                     */
                    quantity: number;
                    /**
                     * The itemʼs brand.
                     */
                    brand?: string;
                    /**
                     * Whether the item is taxable.
                     */
                    isTaxable?: boolean;
                    /**
                     * A publicly-accessible URL for an image of this item.
                     */
                    imageUrl?: string;
                    /**
                     * List of discounts applied to this item, as an array of AppliedDiscount objects.
                     */
                    discounts?: Array<{
                        /**
                         * The name provided by the merchant.
                         */
                        name?: string;
                        /**
                         * The discounted amount applied within a given context.
                         */
                        discountedAmount?: number;
                    }>;
                    /**
                     * The total value of all discounts applied to this item (excluding coupon).
                     */
                    discountAmount?: number;
                    /**
                     * The total value of all coupons applied to this item.
                     */
                    couponAmount?: number;
                    /**
                     * The item’s list price, as quoted by the manufacturer or distributor.
                     */
                    listPrice?: number;
                    /**
                     * The itemʼs price after all discounts are applied. (The final price before tax calculation.)
                     */
                    salePrice?: number;
                    /**
                     * The itemʼs list price multiplied by the quantity.
                     */
                    extendedListPrice?: number;
                    /**
                     * The itemʼs sale price multiplied by the quantity.
                     */
                    extendedSalePrice?: number;
                    /**
                     * the product type - physical or digital
                     */
                    type?: string;
                    isMutable?: boolean;
                    /**
                     * Whether this item requires shipping to a physical address.
                     */
                    isShippingRequired?: boolean;
                    /**
                     * URLs to download all product files.
                     */
                    downloadFileUrls?: Array<string>;
                    /**
                     * The URL for the combined downloads page.
                     */
                    downloadPageUrl?: string;
                    /**
                     * Specifies the combined download size in human-readable style; for example, `30MB`.
                     */
                    downloadSize?: string;
                }>;
                giftCertificate?: Array<{
                    /**
                     * Gift certificate identifier
                     */
                    id?: string;
                    /**
                     * The name of the purchased gift certificate; for example, `$20 Gift Certificate`.
                     */
                    name?: string;
                    /**
                     * Currently supports `Birthday`, `Boy`, `Celebration`, `Christmas`, `General`, and `Girl`.
                     */
                    theme: string;
                    /**
                     * Value must be between $1.00 and $1,000.00.
                     */
                    amount: number;
                    taxable?: boolean;
                    sender: {
                        name?: string;
                        email?: string;
                    };
                    recipient: {
                        name?: string;
                        email?: string;
                    };
                    /**
                     * Limited to 200 characters.
                     */
                    message?: string;
                    /**
                     * Explicitly specifying the gift certificate type.
                     */
                    type?: string;
                }>;
                customItems?: Array<{
                    /**
                     * ID of the custom item
                     */
                    id?: string;
                    /**
                     * Custom item SKU
                     */
                    sku?: string;
                    /**
                     * Item name
                     */
                    name?: string;
                    quantity?: string;
                    /**
                     * Price of the item. With or without tax depending on your store setup.
                     */
                    listPrice?: string;
                }>;
            }>;
            /**
             * Time when the cart was created.
             */
            createdTime?: string;
            /**
             * Time when the cart was last updated.
             */
            updatedTime?: string;
        };
        billingAddress?: ({
            firstName?: string;
            lastName?: string;
            email?: string;
            company?: string;
            address1?: string;
            address2?: string;
            city?: string;
            /**
             * Represents state or province.
             */
            stateOrProvince?: string;
            stateOrProvinceCode?: string;
            /**
             * ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
             */
            countryCode: string;
            postalCode?: string;
            phone?: string;
            customFields?: Array<{
                fieldId?: string;
                /**
                 * This can also be an array for fields that need to support list of values; for example, a set of checkboxes.
                 */
                fieldValue?: string;
            }>;
        } & {
            id?: string;
        });
        /**
         * This allows you to have multiple shipping addresses per checkout. Where there is only one shipping address, this array will contain only one value, with all the items.
         */
        consignments?: Array<{
            id?: string;
            shippingAddress?: any;
            address?: ({
                firstName?: string;
                lastName?: string;
                email?: string;
                company?: string;
                address1?: string;
                address2?: string;
                city?: string;
                /**
                 * Represents state or province.
                 */
                stateOrProvince?: string;
                stateOrProvinceCode?: string;
                /**
                 * ISO 3166-1 alpha-2 country code. (See: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
                 */
                countryCode: string;
                postalCode?: string;
                phone?: string;
                customFields?: Array<{
                    fieldId?: string;
                    /**
                     * This can also be an array for fields that need to support list of values; for example, a set of checkboxes.
                     */
                    fieldValue?: string;
                }>;
            } & {
                id?: string;
            });
            /**
             * This is available only when "include=consignments.availableShippingOptions" is presented in the URL.
             */
            availableShippingOptions?: Array<({
                /**
                 * Read only.
                 */
                readonly description?: string;
                id?: string;
                /**
                 * Specified the type of shipping option. Flat rate, UPS, etc.,
                 */
                type?: string;
                imageUrl?: string;
                cost?: number;
                /**
                 * An estimate of the arrival time.
                 */
                transitTime?: string;
            } & {
                /**
                 * Is this shipping method the recommended shipping option or not.
                 */
                isRecommended?: boolean;
            })>;
            selectedShippingOption?: {
                /**
                 * Read only.
                 */
                readonly description?: string;
                id?: string;
                /**
                 * Specifies the type of shipping option; for example, flat rate, UPS, etc.
                 */
                type?: string;
                imageUrl?: string;
                cost?: number;
                /**
                 * An estimate of the arrival time.
                 */
                transitTime?: string;
            };
            /**
             * List of consignment discounts applied through coupons
             */
            couponDiscounts?: Array<{
                /**
                 * Coupon code that applied this discount
                 */
                code?: string;
                amount?: number;
            }>;
            /**
             * List of consignment discounts applied through cart level discounts.
             */
            discounts?: Array<{
                /**
                 * Discount rule ID that applied this discount
                 */
                id?: string;
            }>;
            /**
             * The shipping cost for this consignment.
             */
            shippingCost?: number;
            /**
             * The handling cost of shipping for this consignment.
             */
            handlingCost?: number;
            lineItemIds?: Array<string>;
        }>;
        /**
         * Coupons applied at checkout level.
         */
        coupons?: Array<CheckoutCoupon>;
        orderId?: string;
        /**
         * Shipping cost before any discounts are applied.
         */
        shippingCostTotal?: number;
        /**
         * Gift wrapping for all items, including or excluding tax.
         */
        giftWrappingCostTotal?: number;
        /**
         * Handling cost for all consignments including or excluding tax.
         */
        handlingCostTotal?: number;
        taxTotal?: number;
        taxes?: Array<{
            /**
             * Name of the tax charged. This is either the system default or the custom name created for the tax.
             */
            name?: string;
            /**
             * Amount of the tax.
             */
            amount?: number;
        }>;
        /**
         * Subtotal of the checkout before applying item-level discounts. Tax inclusive based on the store settings.
         */
        subtotal?: number;
        /**
         * The total payable amount, before applying any store credit or gift certificate.
         */
        grandTotal?: number;
        /**
         * Applied gift certificate (as a payment method).
         */
        giftCertificates?: Array<{
            balance?: number;
            code?: string;
            purchaseDate?: string;
            remaining?: number;
            used?: number;
        }>;
        /**
         * Time when the cart was created.
         */
        createdTime?: string;
        /**
         * Time when the cart was last updated.
         */
        updatedTime?: string;
        /**
         * Shopperʼs message provided as details for the order to be created from this cart.
         */
        customerMessage?: string;
        /**
         * `grandTotal` subtract the store-credit amount
         *
         */
        outstandingBalance?: number;
        /**
         * `true` value indicates StoreCredit has been applied.
         *
         */
        isStoreCreditApplied?: boolean;
    };
};

