/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { response_document } from './response_document';

export type response_quote = {
    /**
     * The unique identifier of the tax quote that was requested. This must match the ID of the requested quote.
     */
    id: string;
    /**
     * Represents an order quote or part of an order quote of tax-relevant items fulfilled from a single origin address to a single destination address, including arrays of shipping and handling fee objects for each item. Most order quotes contain a single document; however, BigCommerce supports "multi-address orders", which may come from or go to distinct sets of addresses and thus require multiple documents per quote.
     */
    documents: Array<response_document>;
};

