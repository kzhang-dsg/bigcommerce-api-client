import type { bulkPricingRule_Full } from './bulkPricingRule_Full';
import type { customUrl_Full } from './customUrl_Full';
import type { productCustomField_Put } from './productCustomField_Put';
import type { productImage_Full } from './productImage_Full';
import type { productVideo_Full } from './productVideo_Full';
/**
 * Shared `Product` properties used in:
 * * `POST`
 * * `PUT`
 * * `GET`
 */
export type product_Base = {
    /**
     * A unique product name.
     *
     */
    name: string;
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    type: product_Base.type;
    /**
     * A unique user-defined product code/stock keeping unit (SKU).
     *
     */
    sku?: string;
    /**
     * The product description, which can include HTML formatting.
     *
     */
    description?: string;
    /**
     * Weight of the product, which can be used when calculating shipping costs. This is based on the unit set on the store
     *
     */
    weight: number;
    /**
     * Width of the product, which can be used when calculating shipping costs.
     *
     */
    width?: number;
    /**
     * Depth of the product, which can be used when calculating shipping costs.
     *
     */
    depth?: number;
    /**
     * Height of the product, which can be used when calculating shipping costs.
     *
     */
    height?: number;
    /**
     * The price of the product. The price should include or exclude tax, based on the store settings.
     *
     */
    price: number;
    /**
     * The cost price of the product. Stored for reference only; it is not used or displayed anywhere on the store.
     *
     */
    cost_price?: number;
    /**
     * The retail cost of the product. If entered, the retail cost price will be shown on the product page.
     *
     */
    retail_price?: number;
    /**
     * If entered, the sale price will be used instead of value in the price field when calculating the product's cost.
     *
     */
    sale_price?: number;
    /**
     * Minimum Advertised Price
     */
    map_price?: number;
    /**
     * The ID of the tax class applied to the product. (NOTE: Value ignored if automatic tax is enabled.)
     *
     */
    tax_class_id?: number;
    /**
     * Accepts AvaTax System Tax Codes, which identify products and services that fall into special sales-tax categories. By using these codes, merchants who subscribe to BigCommerce's Avalara Premium integration can calculate sales taxes more accurately. Stores without Avalara Premium will ignore the code when calculating sales tax. Do not pass more than one code. The codes are case-sensitive. For details, please see Avalara's documentation.
     *
     */
    product_tax_code?: string;
    /**
     * An array of IDs for the categories to which this product belongs. When updating a product, if an array of categories is supplied, all product categories will be overwritten. Does not accept more than 1,000 ID values.
     *
     */
    categories?: Array<number>;
    /**
     * A product can be added to an existing brand during a product /PUT or /POST.
     *
     */
    brand_id?: number;
    /**
     * Current inventory level of the product. Simple inventory tracking must be enabled (See the `inventory_tracking` field) for this to take any effect.
     *
     */
    inventory_level?: number;
    /**
     * Inventory warning level for the product. When the product's inventory level drops below the warning level, the store owner will be informed. Simple inventory tracking must be enabled (see the `inventory_tracking` field) for this to take any effect.
     *
     */
    inventory_warning_level?: number;
    /**
     * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.
     *
     */
    inventory_tracking?: product_Base.inventory_tracking;
    /**
     * A fixed shipping cost for the product. If defined, this value will be used during checkout instead of normal shipping-cost calculation.
     *
     */
    fixed_cost_shipping_price?: number;
    /**
     * Flag used to indicate whether the product has free shipping. If `true`, the shipping cost for the product will be zero.
     *
     */
    is_free_shipping?: boolean;
    /**
     * Flag to determine whether the product should be displayed to customers browsing the store. If `true`, the product will be displayed. If `false`, the product will be hidden from view.
     *
     */
    is_visible?: boolean;
    /**
     * Flag to determine whether the product should be included in the `featured products` panel when viewing the store.
     *
     */
    is_featured?: boolean;
    /**
     * An array of IDs for the related products.
     *
     */
    related_products?: Array<number>;
    /**
     * Warranty information displayed on the product page. Can include HTML formatting.
     *
     */
    warranty?: string;
    /**
     * The BIN picking number for the product.
     *
     */
    bin_picking_number?: string;
    /**
     * The layout template file used to render this product category. This field is writable only for stores with a Blueprint theme applied. For stores with a Stencil theme applied, see [Custom Template Associations](https://developer.bigcommerce.com/api-reference/store-management/custom-template-associations).
     *
     */
    layout_file?: string;
    /**
     * The product UPC code, which is used in feeds for shopping comparison sites and external channel integrations.
     *
     */
    upc?: string;
    /**
     * A comma-separated list of keywords that can be used to locate the product when searching the store.
     *
     */
    search_keywords?: string;
    /**
     * Availability text displayed on the checkout page, under the product title. Tells the customer how long it will normally take to ship this product, such as: 'Usually ships in 24 hours.'
     *
     */
    availability_description?: string;
    /**
     * Availability of the product. (Corresponds to the product's [Purchasability](https://support.bigcommerce.com/s/article/Adding-Products-v3?language=en_US#sections) section in the control panel.) Supported values: `available` - the product is available for purchase; `disabled` - the product is listed on the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders.
     *
     */
    availability?: product_Base.availability;
    /**
     * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field.
     *
     */
    gift_wrapping_options_type?: product_Base.gift_wrapping_options_type;
    /**
     * A list of gift-wrapping option IDs.
     *
     */
    gift_wrapping_options_list?: Array<number>;
    /**
     * Priority to give this product when included in product lists on category pages and in search results. Lower integers will place the product closer to the top of the results.
     *
     */
    sort_order?: number;
    /**
     * The product condition. Will be shown on the product page if the `is_condition_shown` field's value is `true`. Possible values: `New`, `Used`, `Refurbished`.
     *
     */
    condition?: product_Base.condition;
    /**
     * Flag used to determine whether the product condition is shown to the customer on the product page.
     *
     */
    is_condition_shown?: boolean;
    /**
     * The minimum quantity an order must contain, to be eligible to purchase this product.
     *
     */
    order_quantity_minimum?: number;
    /**
     * The maximum quantity an order can contain when purchasing the product.
     *
     */
    order_quantity_maximum?: number;
    /**
     * Custom title for the product page. If not defined, the product name will be used as the meta title.
     *
     */
    page_title?: string;
    /**
     * Custom meta keywords for the product page. If not defined, the store's default keywords will be used.
     *
     */
    meta_keywords?: Array<string>;
    /**
     * Custom meta description for the product page. If not defined, the store's default meta description will be used.
     *
     */
    meta_description?: string;
    /**
     * The number of times the product has been viewed.
     *
     */
    view_count?: number;
    /**
     * Pre-order release date. See the `availability` field for details on setting a product's availability to accept pre-orders.
     *
     */
    preorder_release_date?: string | null;
    /**
     * Custom expected-date message to display on the product page. If undefined, the message defaults to the storewide setting. Can contain the `%%DATE%%` placeholder, which will be substituted for the release date.
     *
     */
    preorder_message?: string;
    /**
     * If set to true then on the preorder release date the preorder status will automatically be removed.
     * If set to false, then on the release date the preorder status **will not** be removed. It will need to be changed manually either in the
     * control panel or using the API. Using the API set `availability` to `available`.
     *
     */
    is_preorder_only?: boolean;
    /**
     * False by default, indicating that this product's price should be shown on the product page. If set to `true`, the price is hidden. (NOTE: To successfully set `is_price_hidden` to `true`, the `availability` value must be `disabled`.)
     *
     */
    is_price_hidden?: boolean;
    /**
     * By default, an empty string. If `is_price_hidden` is `true`, the value of `price_hidden_label` is displayed instead of the price. (NOTE: To successfully set a non-empty string value with `is_price_hidden` set to `true`, the `availability` value must be `disabled`.)
     *
     */
    price_hidden_label?: string;
    custom_url?: customUrl_Full;
    /**
     * Type of product, defaults to `product`.
     *
     */
    open_graph_type?: product_Base.open_graph_type;
    /**
     * Title of the product, if not specified the product name will be used instead.
     *
     */
    open_graph_title?: string;
    /**
     * Description to use for the product, if not specified then the meta_description will be used instead.
     *
     */
    open_graph_description?: string;
    /**
     * Flag to determine if product description or open graph description is used.
     *
     */
    open_graph_use_meta_description?: boolean;
    /**
     * Flag to determine if product name or open graph name is used.
     *
     */
    open_graph_use_product_name?: boolean;
    /**
     * Flag to determine if product image or open graph image is used.
     *
     */
    open_graph_use_image?: boolean;
    /**
     * The brand can be created during a product PUT or POST request. If the brand already exists then the product will be added. If not the brand will be created and the product added. If using `brand_name` it performs a fuzzy match and adds the brand. eg. "Common Good" and "Common good" are the same. Brand name does not return as part of a product response. Only the `brand_id`.
     */
    'brand_name or brand_id'?: string;
    /**
     * Global Trade Item Number
     */
    gtin?: string;
    /**
     * Manufacturer Part Number
     */
    mpn?: string;
    /**
     * The total (cumulative) rating for the product.
     *
     */
    reviews_rating_sum?: number;
    /**
     * The number of times the product has been rated.
     *
     */
    reviews_count?: number;
    /**
     * The total quantity of this product sold.
     *
     */
    total_sold?: number;
    custom_fields?: Array<productCustomField_Put>;
    bulk_pricing_rules?: Array<({
        /**
         * Unique ID of the *Bulk Pricing Rule*. Read-Only.
         */
        readonly id: number;
    } & bulkPricingRule_Full)>;
    images?: Array<productImage_Full>;
    videos?: Array<productVideo_Full>;
};
export declare namespace product_Base {
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    enum type {
        PHYSICAL = "physical",
        DIGITAL = "digital"
    }
    /**
     * The type of inventory tracking for the product. Values are: `none` - inventory levels will not be tracked; `product` - inventory levels will be tracked using the `inventory_level` and `inventory_warning_level` fields; `variant` - inventory levels will be tracked based on variants, which maintain their own warning levels and inventory levels.
     *
     */
    enum inventory_tracking {
        NONE = "none",
        PRODUCT = "product",
        VARIANT = "variant"
    }
    /**
     * Availability of the product. (Corresponds to the product's [Purchasability](https://support.bigcommerce.com/s/article/Adding-Products-v3?language=en_US#sections) section in the control panel.) Supported values: `available` - the product is available for purchase; `disabled` - the product is listed on the storefront, but cannot be purchased; `preorder` - the product is listed for pre-orders.
     *
     */
    enum availability {
        AVAILABLE = "available",
        DISABLED = "disabled",
        PREORDER = "preorder"
    }
    /**
     * Type of gift-wrapping options. Values: `any` - allow any gift-wrapping options in the store; `none` - disallow gift-wrapping on the product; `list` – provide a list of IDs in the `gift_wrapping_options_list` field.
     *
     */
    enum gift_wrapping_options_type {
        ANY = "any",
        NONE = "none",
        LIST = "list"
    }
    /**
     * The product condition. Will be shown on the product page if the `is_condition_shown` field's value is `true`. Possible values: `New`, `Used`, `Refurbished`.
     *
     */
    enum condition {
        NEW = "New",
        USED = "Used",
        REFURBISHED = "Refurbished"
    }
    /**
     * Type of product, defaults to `product`.
     *
     */
    enum open_graph_type {
        PRODUCT = "product",
        ALBUM = "album",
        BOOK = "book",
        DRINK = "drink",
        FOOD = "food",
        GAME = "game",
        MOVIE = "movie",
        SONG = "song",
        TV_SHOW = "tv_show"
    }
}
