/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The model for a PUT to update options on a product.
 */
export type productOption_Put = {
    /**
     * The unique numerical ID of the option, increments sequentially.
     *
     */
    id?: number | null;
    /**
     * The unique numerical ID of the product to which the option belongs.
     *
     */
    product_id?: number;
    /**
     * The name of the option shown on the storefront.
     *
     */
    display_name?: string;
    /**
     * The type of option, which determines how it will display on the storefront. Acceptable values: `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch.
     *
     */
    type?: productOption_Put.type;
    /**
     * The values for option config can vary based on the Modifier created.
     */
    config?: {
        /**
         * (date, text, multi_line_text, numbers_only_text) The default value. Shown on a date option as an ISO-8601–formatted string, or on a text option as a string.
         *
         */
        default_value?: string;
        /**
         * (checkbox) Flag for setting the checkbox to be checked by default.
         *
         */
        checked_by_default?: boolean;
        /**
         * (checkbox) Label displayed for the checkbox option.
         *
         */
        checkbox_label?: string;
        /**
         * (date) Flag to limit the dates allowed to be entered on a date option.
         *
         */
        date_limited?: boolean;
        /**
         * (date) The type of limit that is allowed to be entered on a date option.
         *
         */
        date_limit_mode?: productOption_Put.date_limit_mode;
        /**
         * (date) The earliest date allowed to be entered on the date option, as an ISO-8601 formatted string.
         *
         */
        date_earliest_value?: Date;
        /**
         * (date) The latest date allowed to be entered on the date option, as an ISO-8601 formatted string.
         *
         */
        date_latest_value?: Date;
        /**
         * (file) The kind of restriction on the file types that can be uploaded with a file upload option. Values: `specific` - restricts uploads to particular file types; `all` - allows all file types.
         *
         */
        file_types_mode?: productOption_Put.file_types_mode;
        /**
         * (file) The type of files allowed to be uploaded if the `file_type_option` is set to `specific`. Values:
         * `images` - Allows upload of image MIME types (`bmp`, `gif`, `jpg`, `jpeg`, `jpe`, `jif`, `jfif`, `jfi`, `png`, `wbmp`, `xbm`, `tiff`). `documents` - Allows upload of document MIME types (`txt`, `pdf`, `rtf`, `doc`, `docx`, `xls`, `xlsx`, `accdb`, `mdb`, `one`, `pps`, `ppsx`, `ppt`, `pptx`, `pub`, `odt`, `ods`, `odp`, `odg`, `odf`).
         * `other` - Allows file types defined in the `file_types_other` array.
         *
         */
        file_types_supported?: Array<string>;
        /**
         * (file) A list of other file types allowed with the file upload option.
         *
         */
        file_types_other?: Array<string>;
        /**
         * (file) The maximum size for a file that can be used with the file upload option. This will still be limited by the server.
         *
         */
        file_max_size?: number;
        /**
         * (text, multi_line_text) Flag to validate the length of a text or multi-line text input.
         *
         */
        text_characters_limited?: boolean;
        /**
         * (text, multi_line_text) The minimum length allowed for a text or multi-line text option.
         *
         */
        text_min_length?: number;
        /**
         * (text, multi_line_text) The maximum length allowed for a text or multi line text option.
         *
         */
        text_max_length?: number;
        /**
         * (multi_line_text) Flag to validate the maximum number of lines allowed on a multi-line text input.
         *
         */
        text_lines_limited?: boolean;
        /**
         * (multi_line_text) The maximum number of lines allowed on a multi-line text input.
         *
         */
        text_max_lines?: number;
        /**
         * (numbers_only_text) Flag to limit the value of a number option.
         *
         */
        number_limited?: boolean;
        /**
         * (numbers_only_text) The type of limit on values entered for a number option.
         *
         */
        number_limit_mode?: productOption_Put.number_limit_mode;
        /**
         * (numbers_only_text) The lowest allowed value for a number option if `number_limited` is true.
         *
         */
        number_lowest_value?: number;
        /**
         * (numbers_only_text) The highest allowed value for a number option if `number_limited` is true.
         *
         */
        number_highest_value?: number;
        /**
         * (numbers_only_text) Flag to limit the input on a number option to whole numbers only.
         *
         */
        number_integers_only?: boolean;
        /**
         * (product_list, product_list_with_images) Flag for automatically adjusting inventory on a product included in the list.
         *
         */
        product_list_adjusts_inventory?: boolean;
        /**
         * (product_list, product_list_with_images) Flag to add the optional product's price to the main product's price.
         *
         */
        product_list_adjusts_pricing?: boolean;
        /**
         * (product_list, product_list_with_images) How to factor the optional product's weight and package dimensions into the shipping quote. Values: `none` - don't adjust; `weight` - use shipping weight only; `package` - use weight and dimensions.
         *
         */
        product_list_shipping_calc?: productOption_Put.product_list_shipping_calc;
    };
    /**
     * Order in which the option is displayed on the storefront.
     */
    sort_order?: number;
    option_values?: Array<({
        /**
         * The flag for preselecting a value as the default on the storefront. This field is not supported for swatch options/modifiers.
         *
         */
        is_default?: boolean;
        /**
         * The text display identifying the value on the storefront. Required in a /POST.
         *
         */
        label: string;
        /**
         * The order in which the value will be displayed on the product page. Required in a /POST.
         *
         */
        sort_order: number;
        /**
         * Extra data describing the value, based on the type of option or modifier with which the value is associated. The `swatch` type option can accept an array of `colors`, with up to three hexidecimal color keys; or an `image_url`, which is a full image URL path including protocol. The `product list` type option requires a `product_id`. The `checkbox` type option requires a boolean flag, called `checked_value`, to determine which value is considered to be the checked state.
         *
         */
        value_data?: any;
    } & {
        /**
         * The unique numeric ID of the value; increments sequentially.
         *
         */
        id?: number;
    })>;
    /**
     * Publicly available image url
     */
    image_url?: string;
};

export namespace productOption_Put {

    /**
     * The type of option, which determines how it will display on the storefront. Acceptable values: `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch.
     *
     */
    export enum type {
        RADIO_BUTTONS = 'radio_buttons',
        RECTANGLES = 'rectangles',
        DROPDOWN = 'dropdown',
        PRODUCT_LIST = 'product_list',
        PRODUCT_LIST_WITH_IMAGES = 'product_list_with_images',
        SWATCH = 'swatch',
    }

    /**
     * (date) The type of limit that is allowed to be entered on a date option.
     *
     */
    export enum date_limit_mode {
        EARLIEST = 'earliest',
        RANGE = 'range',
        LATEST = 'latest',
    }

    /**
     * (file) The kind of restriction on the file types that can be uploaded with a file upload option. Values: `specific` - restricts uploads to particular file types; `all` - allows all file types.
     *
     */
    export enum file_types_mode {
        SPECIFIC = 'specific',
        ALL = 'all',
    }

    /**
     * (numbers_only_text) The type of limit on values entered for a number option.
     *
     */
    export enum number_limit_mode {
        LOWEST = 'lowest',
        HIGHEST = 'highest',
        RANGE = 'range',
    }

    /**
     * (product_list, product_list_with_images) How to factor the optional product's weight and package dimensions into the shipping quote. Values: `none` - don't adjust; `weight` - use shipping weight only; `package` - use weight and dimensions.
     *
     */
    export enum product_list_shipping_calc {
        NONE = 'none',
        WEIGHT = 'weight',
        PACKAGE = 'package',
    }


}

