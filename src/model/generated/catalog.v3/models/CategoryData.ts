/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Url } from './Url';

export type CategoryData = {
    name?: string;
    description?: string;
    views?: number;
    sort_order?: number;
    page_title?: string;
    search_keywords?: string;
    meta_keywords?: Array<string>;
    meta_description?: string;
    layout_file?: string;
    is_visible?: boolean;
    image_url?: string;
    custom_url?: Url;
};

