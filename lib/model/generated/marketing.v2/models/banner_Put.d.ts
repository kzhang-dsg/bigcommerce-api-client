import type { banner_Base } from './banner_Base';
export type banner_Put = ({
    /**
     * If the banner is on a specific category or brand page then the `item_id` will correspond the category or brand id.
     */
    item_id?: string;
} & banner_Base);
