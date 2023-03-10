export type OrderItemGiftCertificate = {
    /**
     * The itemʼs product name.
     */
    name?: string;
    /**
     * Quantity of this item.
     */
    quantity?: number;
    /**
     * Whether the item is taxable.
     */
    isTaxable?: boolean;
    /**
     * Price of the item
     */
    amount?: number;
    /**
     * Explicitly specifying the gift certificate type
     */
    type?: string;
};
