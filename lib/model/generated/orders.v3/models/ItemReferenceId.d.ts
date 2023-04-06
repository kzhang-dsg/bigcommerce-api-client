export type ItemReferenceId = {
    /**
     * The reference type.
     */
    type: ItemReferenceId.type;
    /**
     * The value identifying the returned item.
     */
    value: string;
};
export declare namespace ItemReferenceId {
    /**
     * The reference type.
     */
    enum type {
        ORDER_PRODUCT = "ORDER_PRODUCT"
    }
}
