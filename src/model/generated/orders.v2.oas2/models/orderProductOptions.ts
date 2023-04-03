/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type orderProductOptions = {
    /**
     * The unique numerical ID of the option; increments sequentially.
     */
    id?: number;
    /**
     * Numeric ID of the associated option.
     */
    option_id?: number;
    order_product_id?: number;
    /**
     * Numeric ID of an option applied to the product from a list of options available to the product.
     */
    product_option_id?: number;
    /**
     * Alias for display_name_customer. The product option name that is shown to customer in the storefront.
     */
    display_name?: string;
    /**
     * Alias for display_value_customer. The product option value that is shown to customer in storefront.
     */
    display_value?: string;
    /**
     * For file-upload type, it's a unique string describing the properties of the file upload. For other types, it's the value of the property.
     */
    value?: string;
    /**
     * Option Type
     */
    type?: orderProductOptions.type;
    /**
     * The option’s name, as used internally. Must be unique.
     */
    name?: string;
    /**
     * How it is displayed on the storefront. Examples include Drop-down, radio buttons, or rectangles.
     */
    display_style?: string;
    /**
     * The product option name that is shown to customer in storefront.
     */
    display_name_customer?: string;
    /**
     * The product option name that is shown to merchant in Control Panel.
     */
    display_name_merchant?: string;
    /**
     * The product option value that is shown to customer in storefront.
     */
    display_value_customer?: string;
    /**
     * The product option value that is shown to merchant in Control Panel.
     */
    display_value_merchant?: string;
};

export namespace orderProductOptions {

    /**
     * Option Type
     */
    export enum type {
        CHECKBOX = 'Checkbox',
        DATE_FIELD = 'Date field',
        FILE_UPLOAD = 'File Upload',
        MULTI_LINE_TEXT_FIELD = 'Multi-line text field',
        MULTIPLE_CHOICE = 'Multiple choice',
        PRODUCT_PICK_LIST = 'Product Pick List',
        SWATCH = 'Swatch',
        TEXT_FIELD = 'Text field',
    }


}

