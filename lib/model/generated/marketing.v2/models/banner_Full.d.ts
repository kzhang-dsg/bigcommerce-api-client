import type { banner_Base } from './banner_Base';
export type banner_Full = ({
    /**
     * Id of the banner.
     * This is a READ-ONLY field; do not set or modify its value in a POST or PUT request.
     *
     */
    id?: number;
    /**
     * Date the banner is created.
     */
    date_created?: string;
    /**
     * If the banner is on a specific category or brand page then the `item_id` will correspond the category or brand id.
     */
    item_id?: string;
} & banner_Base);
