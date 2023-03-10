export type attributeValue_Base = {
    /**
     * Attribute value ID.
     */
    id?: number;
    /**
     * Attribute ID.
     */
    attribute_id: number;
    /**
     * Attribute value. This will always be a string, regardless of the attribute's type.
     *
     * Corresponds to `attribute_value` used in customer attribute values `GET` requests.
     */
    value: string;
    /**
     * Customer ID.
     */
    customer_id: number;
};
