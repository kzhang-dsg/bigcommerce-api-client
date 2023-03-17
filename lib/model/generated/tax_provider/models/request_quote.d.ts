import type { request_document } from './request_document';
/**
 * Each **QuoteRequest** represents an order. In addition to transaction details, it contains a `documents` array of one or more **DocumentRequest** objects, which represent distinct combinations of origin and fulfillment addresses and the tax-relevant contents of those consignments. This is similar to an "order" in other BigCommerce APIs.
 */
export type request_quote = {
    /**
     * Unique ID of the taxable document (order, cart, quote, etc) this tax quote request is being generated for. Will remain consistent for the lifetime of the entity being estimated.
     */
    id: string;
    /**
     * ISO 4217 3 character currency code that all prices on this request are in.
     */
    currency_code: string;
    /**
     * If the shopper is a registered customer in the merchant’s store, basic details for that customer.
     */
    customer: {
        /**
         * The ID of the shoppers customer account in BigCommerce. May be provided as a UUID.
         */
        customer_id: string;
        /**
         * The BigCommerce customer group ID assigned to this customer. The default value will be provided if the customer has no group assigned. May be provided as a UUID.
         */
        customer_group_id: string;
        /**
         * If applicable, the tax exemption code of the shopper’s customer account. A taxability code is intended to apply to multiple customers. This code should match the exemption codes provided by the third-party integration.
         */
        taxability_code?: string;
    };
    /**
     * ISO 8601 formatted date the shopper placed this order. Dates will be provided in UTC.
     */
    transaction_date: Date;
    /**
     * One or more consignments containing items being purchased by the shopper, including shipping and handling fees that are charged for each consignment. Most orders will contain a single consignment (to a single shipping address), however the BigCommerce platform also supports "Multi-address orders" which allow shoppers to place a single order with items shipped to different addresses.
     */
    documents: Array<request_document>;
};
