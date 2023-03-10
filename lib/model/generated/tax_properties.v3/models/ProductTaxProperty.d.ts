/**
 * A collection of tax property values associated with a product.
 */
export type ProductTaxProperty = {
    /**
     * A reference to the product that the product tax properties are associated with.
     */
    product_id: number;
    /**
     * A simple key-value pairing. The tax property must be defined to associate a value. These values will be sent to the active tax provider during Tax Provider API operations whenever the associated product is included in the operation.
     */
    tax_properties: any;
};
