/**
 * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
 */
export type callback_category_data = {
    /**
     * A lightweight description of the event that triggered the webhook. Will vary depending on the event registered.
     */
    data?: {
        /**
         * This type will always be `category`.
         */
        type?: string;
        /**
         * ID of the category.
         */
        id?: number;
    };
};
