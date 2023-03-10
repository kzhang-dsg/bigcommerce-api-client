import type { formFieldValue } from './formFieldValue';
export type address_Post = {
    /**
     * The first name of the customer address.
     */
    first_name: string;
    /**
     * The last name of the customer address.
     */
    last_name: string;
    /**
     * The company of the customer address.
     */
    company?: string;
    /**
     * The address 1 line.
     */
    address1: string;
    /**
     * The address 2 line.
     */
    address2?: string;
    /**
     * The city of the customer address.
     */
    city: string;
    /**
     * The state or province name spelled out in full. It is required for countries that need a state/province to complete an address. State or province codes not accepted.
     */
    state_or_province?: string;
    /**
     * The postal code of the customer address. It is required for countries that need postal codes to complete an address.
     */
    postal_code?: string;
    /**
     * The country code of the customer address.
     */
    country_code: string;
    /**
     * The phone number of the customer address.
     */
    phone?: string;
    /**
     * The address type. Residential or Commercial.
     */
    address_type?: address_Post.address_type;
    /**
     * The customer ID.
     */
    customer_id: number;
    /**
     * The address custom form field values
     *
     */
    form_fields?: Array<formFieldValue>;
};
export declare namespace address_Post {
    /**
     * The address type. Residential or Commercial.
     */
    enum address_type {
        RESIDENTIAL = "residential",
        COMMERCIAL = "commercial"
    }
}
