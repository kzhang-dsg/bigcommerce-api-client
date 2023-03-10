/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CartRequestData = {
    line_items?: Array<{
        quantity: number;
        product_id: number;
        /**
         * The Variant ID. Required if the product has variants.
         */
        variant_id: number;
        list_price?: number;
        option_selections?: Array<{
            option_id?: number;
            option_value?: string;
        }>;
    }>;
    gift_certificates?: Array<{
        /**
         * Given name for gift certificate line item.
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
     * The Channel ID. If no channel is specified, this defaults to 1.
     */
    channel_id?: number;
};

