import type { formFieldValue } from './formFieldValue';
export type address_Put = {
    /**
     * The first name of the customer address.
     */
    first_name?: string;
    /**
     * The last name of the customer address.
     */
    last_name?: string;
    /**
     * The company of the customer address.
     */
    company?: string;
    /**
     * The address 1 line.
     */
    address1?: string;
    /**
     * The address 2 line.
     */
    address2?: string;
    /**
     * The city of the customer address.
     */
    city?: string;
    /**
     * The state or province name.
     */
    state_or_province?: string;
    /**
     * The postal code of the customer address.
     */
    postal_code?: string;
    /**
     * The country code of the customer address.
     */
    country_code?: string;
    /**
     * The phone number of the customer address.
     */
    phone?: string;
    /**
     * The address type. Residential or Commercial.
     */
    address_type?: address_Put.address_type;
    /**
     * The unique numeric ID of the address.
     */
    id: number;
    /**
     * Array of form fields. Controlled by formfields parameter.
     *
     */
    form_fields?: Array<formFieldValue>;
};
export declare namespace address_Put {
    /**
     * The address type. Residential or Commercial.
     */
    enum address_type {
        RESIDENTIAL = "residential",
        COMMERCIAL = "commercial"
    }
}
