import type { ItemsRefund } from './ItemsRefund';
import type { MerchantOverride } from './MerchantOverride';
/**
 * Request body for refund requests.
 */
export type RefundRequest_Post = {
    items: Array<ItemsRefund>;
    payments: any;
    merchant_calculated_override?: MerchantOverride;
};
