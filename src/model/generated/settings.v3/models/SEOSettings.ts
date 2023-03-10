/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SEOSettings = {
    meta_description?: string;
    meta_keywords?: string;
    page_title?: string;
    www_redirect?: SEOSettings.www_redirect;
};

export namespace SEOSettings {

    export enum www_redirect {
        WWW = 'www',
        NO_WWW = 'no-www',
        NONE = 'none',
    }


}

