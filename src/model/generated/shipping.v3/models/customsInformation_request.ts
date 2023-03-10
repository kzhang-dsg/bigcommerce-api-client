/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { harmonizedSystemCodes } from './harmonizedSystemCodes';

/**
 * Data about the customs information object.
 */
export type customsInformation_request = {
    /**
     * The product ID to which the customs information data applies.
     */
    product_id: number;
    /**
     * The country of manufacture, production, or growth represented in ISO 3166-1 alpha-2 format.
     */
    country_of_origin: string;
    /**
     * Description that provides information for customs to identify and verify the shapes, physical characteristics, and packaging of each shipment.
     */
    commodity_description: string;
    /**
     * Flag to determine whether this product will be shipped internationally.
     */
    international_shipping: boolean;
    hs_codes: harmonizedSystemCodes;
};

