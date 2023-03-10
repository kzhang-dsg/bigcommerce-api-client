/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The values for option config can vary based on the Modifier created.
 */
export type config_Full = {
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
    date_limit_mode?: config_Full.date_limit_mode;
    /**
     * (date) The earliest date allowed to be entered on the date option, as an ISO-8601 formatted string.
     *
     */
    date_earliest_value?: string;
    /**
     * (date) The latest date allowed to be entered on the date option, as an ISO-8601 formatted string.
     *
     */
    date_latest_value?: string;
    /**
     * (file) The kind of restriction on the file types that can be uploaded with a file upload option. Values: `specific` - restricts uploads to particular file types; `all` - allows all file types.
     *
     */
    file_types_mode?: config_Full.file_types_mode;
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
    number_limit_mode?: config_Full.number_limit_mode;
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
    product_list_shipping_calc?: config_Full.product_list_shipping_calc;
};

export namespace config_Full {

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

