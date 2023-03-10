/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Requests may have partial Address data. For example, the BigCommerce Cart page has the "Estimate Shipping & Tax" feature which is only expected to supply Country, Region and Postal Code.
 */
export type Address = {
    /**
     * Primary street address.
     */
    line1?: string;
    /**
     * Apartment, unit, suite, building, floor, etc.
     */
    line2?: string;
    /**
     * City, suburb, township, etc.
     */
    city?: string;
    /**
     * State, province, territory, etc.
     */
    region_name?: string;
    /**
     * If available, the short code/acronym for the region. For example, "CA" for "California" or "NSW" for "New South Wales".
     */
    region_code?: string;
    /**
     * The human-readable country name.
     */
    country_name?: string;
    /**
     * ISO 3166-1 alpha-2 format country code.
     */
    country_code?: string;
    /**
     * Postcode, ZIP, etc. Optional.
     */
    postal_code?: string;
    /**
     * If this is a commercial address, the associated company’s name.
     * @deprecated
     */
    company_name?: string;
    type?: Address.type;
};

export namespace Address {

    export enum type {
        RESIDENTIAL = 'RESIDENTIAL',
        COMMERCIAL = 'COMMERCIAL',
    }


}

