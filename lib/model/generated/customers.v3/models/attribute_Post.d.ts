export type attribute_Post = {
    /**
     * Attribute name.
     */
    name: string;
    /**
     * Attribute type should match one of: string, number, date.
     */
    type: attribute_Post.type;
};
export declare namespace attribute_Post {
    /**
     * Attribute type should match one of: string, number, date.
     */
    enum type {
        STRING = "string",
        NUMBER = "number",
        DATE = "date"
    }
}
