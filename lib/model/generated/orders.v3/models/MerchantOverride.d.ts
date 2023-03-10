import type { Amount } from './Amount';
/**
 * Merchant explicitly provided override based on their own calculation.
 *
 * This override gives merchants the flexibility to
 * - bypass any tax correction due to tax rate/providers changes between when a customer places an order and a merchant initiates a refund
 * - use explicit values calculated by external systems (e.g., merchants' own Extended Producer Responsibility or Order Management System)
 *
 * Note: when using the override, BC internal tax based refund calculation is skipped and therefore order/taxes records are not updated.
 *
 */
export type MerchantOverride = {
    total_amount: Amount;
    /**
     * Total tax amount refunded back to the shopper. Use 0 value if there is no tax liability change for the refund or tax does not need to be recorded on the refund and would be handled externally.
     */
    total_tax: number;
};
