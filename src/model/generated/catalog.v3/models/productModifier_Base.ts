/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { config_Full } from './config_Full';

/**
 * Common Modifier properties.
 */
export type productModifier_Base = {
    /**
     * BigCommerce API, which determines how it will display on the storefront. Acceptable values: `date`, `checkbox`, `file`, `text`, `multi_line_text`, `numbers_only_text`, `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. Required in a /POST.
     *
     */
    type: productModifier_Base.type;
    /**
     * Whether or not this modifer is required or not at checkout. Required in a /POST.
     *
     */
    required: boolean;
    /**
     * The order the modifiers display on the product detail page.
     */
    sort_order?: number;
    config?: config_Full;
    /**
     * The name of the option shown on the storefront.
     */
    display_name?: string;
};

export namespace productModifier_Base {

    /**
     * BigCommerce API, which determines how it will display on the storefront. Acceptable values: `date`, `checkbox`, `file`, `text`, `multi_line_text`, `numbers_only_text`, `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. Required in a /POST.
     *
     */
    export enum type {
        DATE = 'date',
        CHECKBOX = 'checkbox',
        FILE = 'file',
        TEXT = 'text',
        MULTI_LINE_TEXT = 'multi_line_text',
        NUMBERS_ONLY_TEXT = 'numbers_only_text',
        RADIO_BUTTONS = 'radio_buttons',
        RECTANGLES = 'rectangles',
        DROPDOWN = 'dropdown',
        PRODUCT_LIST = 'product_list',
        PRODUCT_LIST_WITH_IMAGES = 'product_list_with_images',
        SWATCH = 'swatch',
    }


}

