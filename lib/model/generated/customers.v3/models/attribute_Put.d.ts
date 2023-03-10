/**
 * Once the data type is set, it can not be changed. The attribute will need to be deleted then created again with the new data type. This will also delete it from the customer.
 */
export type attribute_Put = {
    /**
     * Attribute name.
     */
    name: string;
    /**
     * Attribute ID.
     */
    id: number;
};
