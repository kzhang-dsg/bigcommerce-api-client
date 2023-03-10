/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateConsignmentRequest = Array<{
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
        /**
         * You can retrieve custom fields from the [Get Form Fields](/api-reference/storefront/form-fields/form-fields/getformfields) endpoint.
         */
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
}>;
