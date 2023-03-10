export type taxClass_Full = {
    /**
     * The unique numerical ID of the tax class. A read-only value which is automatically assigned and increments sequentially.
     */
    id?: string;
    /**
     * The name of the tax class.
     */
    name?: string;
    /**
     * Date and time of the tax class' creation. Read-Only.
     */
    created_at?: string;
    /**
     * Date and time when the tax class was last updated. Read-Only.
     */
    updated_at?: string;
};
