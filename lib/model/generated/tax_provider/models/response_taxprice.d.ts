import type { SalesTax } from './SalesTax';
export type response_taxprice = {
    /**
     * The price of this line item inclusive of tax. Must be equal to **amount_exclusive** + **total_tax**.
     */
    amount_inclusive: number;
    /**
     * The price of this line item exclusive of tax. Must be equal to **amount_inclusive** - **total_tax**.
     */
    amount_exclusive: number;
    /**
     * The total amount of tax that applied to this line item. Must be equal to **amount_inclusive** - **amount_exclusive**.
     */
    total_tax: number;
    /**
     * The total tax rate that applied to this item. This is the aggregated rate of the individual rates in **sales_tax_summary**.
     */
    tax_rate: number;
    /**
     * Breakdown of the sales taxes that applied to this item.
     */
    sales_tax_summary: Array<SalesTax>;
};
