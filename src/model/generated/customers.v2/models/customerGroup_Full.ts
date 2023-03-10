/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { categoryAccessLevel_Full } from './categoryAccessLevel_Full';

/**
 * When creating a customer group category discount using the API it defaults to "products in this category and its subcategories". In the [Control Panel](https://support.bigcommerce.com/s/article/Customer-Groups#pricing) this can be changed to either "products in this category only" or "products in this category and its subcategories". There are currently no settings to change this behavior via API.
 */
export type customerGroup_Full = {
    /**
     * Id of the customer group
     */
    id?: number;
    /**
     * Name of the group
     */
    name?: string;
    /**
     * Determines whether new customers are assigned to this group by default.
     */
    is_default?: boolean;
    category_access?: categoryAccessLevel_Full;
    /**
     * A collection of discount rules that are automatically applied to customers who are members of the group
     */
    discount_rules?: Array<{
        type?: 'price_list' | 'all' | 'category' | 'product';
        method?: 'percent' | 'fixed' | 'price';
        /**
         * A float that specifies the value applied to the price modified
         */
        amount?: string;
        /**
         * If a customer group is assigned to a price list,`method` and `amount` are not shown. `type` and `price_list_id` are returned.
         */
        price_list_id?: number;
    }>;
    /**
     * If the groups is for guests. There can only be one customer group for guests at a time.
     */
    is_group_for_guests?: boolean;
};

