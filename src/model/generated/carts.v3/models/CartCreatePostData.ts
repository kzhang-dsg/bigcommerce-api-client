/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { cart_PostCustomItem } from './cart_PostCustomItem';
import type { cart_PostModifier } from './cart_PostModifier';
import type { cart_PostVariant } from './cart_PostVariant';

export type CartCreatePostData = {
    customer_id?: number;
    line_items?: Array<(cart_PostVariant | cart_PostModifier)>;
    custom_items?: cart_PostCustomItem;
    gift_certificates?: Array<{
        /**
         * Given name for the gift certificate line item.
         */
        name: string;
        /**
         * The theme of the gift certificate.
         */
        theme: 'Birthday' | 'Boy' | 'Celebration' | 'Christmas' | 'General' | 'Girl';
        amount: number;
        quantity: number;
        sender: {
            name?: string;
            email?: string;
        };
        recipient: {
            name?: string;
            email?: string;
        };
        /**
         * Message shown to recipient, as provided by sender.
         */
        message?: string;
    }>;
    /**
     * The Channel ID. If no channel is specified, defaults to 1.
     */
    channel_id?: number;
    currency?: {
        /**
         * The [transactional currency](/docs/rest-management/currencies#definitions) code for the cart, formatted as an [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) string. This code is required when multi-currency is enabled. Passing a non-transactional display currency will result in a `400` error.
         */
        code?: string;
    };
    /**
     * The locale of the cart. Accepts strings of format `xx` or `xx-YY`. Uses the [ISO-639 standard](https://www.iso.org/iso-639-language-codes.html) format.
     */
    locale?: string;
};

