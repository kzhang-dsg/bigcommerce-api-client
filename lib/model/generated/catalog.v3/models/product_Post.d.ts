import type { product_Base } from './product_Base';
import type { productVariant_Post_Product } from './productVariant_Post_Product';
/**
 * The model for a POST to create a product.
 */
export type product_Post = (product_Base & {
    /**
     * A unique product name.
     *
     */
    name: string;
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    type: product_Post.type;
    /**
     * Weight of the product, which can be used when calculating shipping costs. This is based on the unit set on the store
     *
     */
    weight: number;
    /**
     * The price of the product. The price should include or exclude tax, based on the store settings.
     *
     */
    price: number;
    variants?: Array<productVariant_Post_Product>;
});
export declare namespace product_Post {
    /**
     * The product type. One of: `physical` - a physical stock unit, `digital` - a digital download.
     *
     */
    enum type {
        PHYSICAL = "physical",
        DIGITAL = "digital"
    }
}
