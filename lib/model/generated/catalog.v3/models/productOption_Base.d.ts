import type { productOptionConfig_Full } from './productOptionConfig_Full';
import type { productOptionOptionValue_Full } from './productOptionOptionValue_Full';
/**
 * Common Option properties.
 */
export type productOption_Base = {
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
    type?: productOption_Base.type;
    config?: productOptionConfig_Full;
    /**
     * Order in which the option is displayed on the storefront.
     */
    sort_order?: number;
    option_values?: productOptionOptionValue_Full;
};
export declare namespace productOption_Base {
    /**
     * The type of option, which determines how it will display on the storefront. Acceptable values: `radio_buttons`, `rectangles`, `dropdown`, `product_list`, `product_list_with_images`, `swatch`. For reference, the former v2 API values are: RB = radio_buttons, RT = rectangles, S = dropdown, P = product_list, PI = product_list_with_images, CS = swatch.
     *
     */
    enum type {
        RADIO_BUTTONS = "radio_buttons",
        RECTANGLES = "rectangles",
        DROPDOWN = "dropdown",
        PRODUCT_LIST = "product_list",
        PRODUCT_LIST_WITH_IMAGES = "product_list_with_images",
        SWATCH = "swatch"
    }
}
