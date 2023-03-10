import type { TaxClass } from './TaxClass';
export type SalesTax = {
    /**
     * The human-readable name of this tax. Used for reporting. Depending on store configuration, may also be visible in the itemization of taxes at checkout, on invoices, and in control panel views. May not be empty.
     */
    name: string;
    /**
     * Decimal tax rate applied by this component tax rate. Tax rates support up to four decimal places. For example "0.1" for 10% and "0.0125" for 1.25%.
     */
    rate: number;
    /**
     * The absolute amount of tax applied to the item this SalesTax component is attached to, for this component rate. For example, if an item was $10 and this was a 5% component tax rate, the amount would be 0.50 (50 cents)
     */
    amount: number;
    tax_class?: TaxClass;
    /**
     * Optional unique identifier for this sales tax, describing the relevant tax classification rule on the Tax Provider platform.
     *
     * Supplying an identifier allows BigCommerce to group related taxes together from all items in the order.
     *
     * This identifier is persisted by BigCommerce and may be desirable for auditing purposes between BigCommerce and the Tax Provider. Currently supports persisting integer values only (the string type indicates we may support UUID values in the future).
     */
    id?: string;
};
