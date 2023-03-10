/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type country_Full = {
    /**
     * Id of the country.
     */
    id?: number;
    /**
     * Country name.
     */
    country?: string;
    /**
     * 2-letter country code.
     */
    country_iso2?: string;
    /**
     * 3-letter country code.
     */
    country_iso3?: string;
    states?: {
        url?: string;
        resource?: string;
    };
};

