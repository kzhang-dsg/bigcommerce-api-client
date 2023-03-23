/**
 * One or more of these three fields are mandatory. `address` and `line_items` can be updated in one request. `shipping_option_id` has to be updated in a separate request because changing the address or line items can invalidate the previously available shipping options.
 */
export type UpdateConsignmentRequest = Array<{
    address?: {
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
    };
    line_items?: Array<{
        /**
         * Corresponds to `line_items.physical_items[N].id` value from `GET`checkout response.
         */
        item_id: string;
        quantity: number;
    }>;
    shipping_option_id?: string;
    pickup_option?: {
        pickup_method_id?: number;
    };
}>;
