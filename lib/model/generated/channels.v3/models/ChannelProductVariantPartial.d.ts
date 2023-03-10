import type { ChannelProductVariantDescription } from './ChannelProductVariantDescription';
import type { ChannelProductVariantName } from './ChannelProductVariantName';
import type { ExternalId } from './ExternalId';
import type { ProductId } from './ProductId';
import type { VariantId } from './VariantId';
import type { VariantState } from './VariantState';
/**
 * Details about a variant of the product for this channel listing.
 */
export type ChannelProductVariantPartial = {
    product_id: ProductId;
    variant_id: VariantId;
    external_id?: ExternalId;
    state: VariantState;
    name?: ChannelProductVariantName;
    description?: ChannelProductVariantDescription;
};
