/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HSTSMaxAgeEnumValues } from './HSTSMaxAgeEnumValues';

export type StorefrontSecuritySettings = {
    csp_header?: {
        enabled?: boolean;
        header_value?: string;
    };
    hsts?: {
        enabled?: boolean;
        include_preload?: boolean;
        include_subdomains?: boolean;
        max_age?: HSTSMaxAgeEnumValues;
    };
    sitewide_https_enabled?: boolean;
    x_frame_options_header?: {
        allowed_url?: string;
        enabled?: boolean;
        setting?: StorefrontSecuritySettings.setting;
    };
};

export namespace StorefrontSecuritySettings {

    export enum setting {
        DENY = 'deny',
        SAME_ORIGIN = 'same_origin',
        ALLOW_FROM_URL = 'allow_from_url',
    }


}

