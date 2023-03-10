import type { harmonizedSystemCodes } from './harmonizedSystemCodes';
/**
 * Data about the customs information object.
 */
export type customsInformation = {
    /**
     * The ID of the product which the customs information data will apply to.
     */
    product_id?: number;
    /**
     * The country of manufacture, production, or growth represented in ISO 3166-1 alpha-2 format.
     */
    country_of_origin?: string;
    /**
     * Description that provides information for customs to identify and verify shapes physical characteristics and packaging of each shipment.
     */
    commodity_description?: string;
    /**
     * Flag to determine whether this product will be shipped internationally.
     */
    international_shipping?: boolean;
    hs_codes?: harmonizedSystemCodes;
    /**
     * Date and time when the customs information was created.
     */
    readonly created_at?: string;
    /**
     * Date and time when the customs information was last updated.
     */
    readonly updated_at?: string;
};
